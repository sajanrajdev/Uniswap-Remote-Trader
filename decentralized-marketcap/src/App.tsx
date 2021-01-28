import React, { useEffect, useState } from "react";
import './App.css';
import { ApolloClient, InMemoryCache} from '@apollo/client';
import { Fetcher, Trade, Route, TokenAmount, TradeType, Percent } from '@uniswap/sdk'
import Tokentable from './Tokentable';
import { ETHER_PRICE, ALL_TOKENS } from './queries'
import { sortTokenList, getTokenBySymbol, toHex } from './utils';
import { Container, TextField, MenuItem, Button, ButtonGroup, Paper, Switch } from '@material-ui/core';
import ButtonAppBar from './AppBar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Onboard from 'bnc-onboard'
import Web3 from 'web3'
import {ethers} from 'ethers'
import Notify, { API } from 'bnc-notify'
import { BigNumber } from "bignumber.js";
import { initOnboard, initNotify } from './services'
import getSigner from './signer'
import { APIO } from "bnc-onboard/dist/src/interfaces";


interface TradeToken {
  name: string
  symbol: string
  address: string
  decimals: number
}

let provider: any;

function App() {
  
  const [etherPrice, setEtherPrice] = useState<number>(0);
  const [tokenslist, setTokensList] = useState<any | any[]>([]);
  const [token1, settoken1] = useState<TradeToken>({name: "", symbol: "", address: "", decimals: 0});
  const [token2, settoken2] = useState<TradeToken>({name: "", symbol: "", address: "", decimals: 0});
  const [selectToken1, setSelectToken1] = useState('');
  const [selectToken2, setSelectToken2] = useState('');
  const [inputToken1, setInputToken1] = useState('0.01');
  const [inputToken2, setInputToken2] = useState('');
  const [darkmode, setDarkMode] = useState<boolean>(true);
  const [currentTrade, setCurrentTrade] = useState<Trade>();

  const [address, setAddress] = useState(null)
  const [network, setNetwork] = useState(null)
  const [balance, setBalance] = useState(null)
  const [wallet, setWallet] = useState({})
  const [toAddress, setToAddress] = useState('')

  const [onboard, setOnboard] = useState<APIO>()
  const [notify, setNotify] = useState<API>()

  const NETWORK_ID = 4; // Mainnet 1, Ropsten 3 and Rinkeby 4
  const WEI_TO_ETH = 1000000000000000000;
  const SLIPPAGE_TOLERANCE = '50'; // 50 Bitps, setting default 0.5%
  const DEADLINE = 20;

  // TEST CONSTANTS (USE NETWORK_ID = 4)
  const UNI_RINK = '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984';
  const WETH_RINK = '0xc778417e063141139fce010982780140aa0cd5ab';
  const DAI_RINK = '0xc7ad46e0b8a400bb3c915120d284aafba8fc4735'
  const INFURA_URL_RINK = 'https://rinkeby.infura.io/v3/d7da0df84bee438db5954b908cfbdf2e'

  useEffect(() => {
    const onboard = initOnboard({
      address: setAddress,
      network: setNetwork,
      balance: setBalance,
      wallet: (wallet: any) => {
        if (wallet.provider) {
          setWallet(wallet)

          const ethersProvider = new ethers.providers.Web3Provider(
            wallet.provider
          )

          provider = ethersProvider

          window.localStorage.setItem('selectedWallet', wallet.name)
        } else {
          provider = null
          setWallet({})
        }
      }
    })

    setOnboard(onboard);

    setNotify(initNotify())
  }, [])

  useEffect(() => {
    const previouslySelectedWallet = window.localStorage.getItem(
      'selectedWallet'
    )

    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet)
    }
  }, [onboard])

  const mainTheme = createMuiTheme({
    palette:{
      type: darkmode ? "dark" : "light",
      primary: {
        main: '#F4157D',
      },
      secondary: {
        main: '#00695f'
      }
    }
  });


  

    // Get realtime price of token1 based on paired token2
    const getPrice = async (id1: string, decimals1: number, id2: string, decimals2: number) => {
      const token1 = await Fetcher.fetchTokenData(NETWORK_ID, WETH_RINK);
      const token2 = await Fetcher.fetchTokenData(NETWORK_ID, UNI_RINK);
      console.log(token1, token2)
      const pair = await Fetcher.fetchPairData(token1, token2);
      const route = new Route([pair], token1);
      const trade = new Trade(route, new TokenAmount(token1, (parseFloat(inputToken1)*WEI_TO_ETH).toString()), TradeType.EXACT_INPUT);
      console.log("Execution Price:", trade.executionPrice.toSignificant(6));
      console.log("Mid Price:", route.midPrice.toSignificant(6))
      setCurrentTrade(trade);
      console.log(address)
      return trade.executionPrice.toSignificant(6);
    }
  
    const performTrade = async () => {
      if(currentTrade != undefined){
        const slippageTolerance = new Percent(SLIPPAGE_TOLERANCE, '10000');
        const amountOutMin = toHex(currentTrade.minimumAmountOut(slippageTolerance).raw);
        const path = [WETH_RINK, UNI_RINK];
        const to = address; // Sends to selected address
        const deadline = Math.floor(Date.now() / 1000) + 60 * DEADLINE; // Maximum wait time for transaction (20min)
        const value = toHex(currentTrade.inputAmount.raw);
        const signer = (new ethers.providers.Web3Provider(window.ethereum)).getSigner();
        const uniswap = new ethers.Contract('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', ['function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)'], signer);

        const tx = await uniswap.swapExactETHForTokens(amountOutMin, path, to, deadline, {value, gasPrice: 20e9});
        console.log('Transaction Hash:',tx.hash);
        const receipt = await tx.wait();
        console.log("Transaction was mined in block:", receipt.blockNumber);
      }
      else{
        console.log("Current Trade not defined")
      }
  
    }

  const client = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
    cache: new InMemoryCache()
  });

  const getEtherPrice = () => {
    client
    .query({
      query: ETHER_PRICE
    })
    .then(result => setEtherPrice(result.data.bundle.ethPrice.valueOf()));
    return(null);
  }

  const getAllTokens = () => {
    client
    .query({
      query: ALL_TOKENS
    })
    .then(result => setTokensList(result.data.tokens));
    return(null);
  }

  // On Mount 
  useEffect(()=>{
    getEtherPrice();
    getAllTokens();
    sortTokenList(tokenslist, etherPrice);
  }, []);

  // Handler for Token 1 Selector
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectToken1(event.target.value);
    var token_temp = getTokenBySymbol(tokenslist, event.target.value);
    settoken1({name: token_temp.name, symbol: token_temp.symbol, address: token_temp.id, decimals: token_temp.decimals});
    setInputToken1('');
    setInputToken2('');
  };
  // Handler for Token 1 Input
  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setInputToken1(event.target.value);
    if(event.target.value==''){
      setInputToken2('');
    }
  };
  // Handler for Token 2 Selector
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectToken2(event.target.value);
    var token_temp = getTokenBySymbol(tokenslist, event.target.value);
    settoken2({name: token_temp.name, symbol: token_temp.symbol, address: token_temp.id, decimals: token_temp.decimals});
    setInputToken1('');
    setInputToken2('');
  };
  // Handler for Price Estimate button
  const handleEstimatePriceButton = async () => {
    var ExecutionPrice = await getPrice(token1.address, token1.decimals, token2.address, token2.decimals);
    setInputToken2((parseFloat(inputToken1)*parseFloat(ExecutionPrice)).toString());
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Paper>
    <div className="App">
      <ButtonAppBar address={address}></ButtonAppBar>
      <header>
        <h1>
          Uniswap Remote Trader
        </h1>
      </header>
      <div>
        <Button
            className="bn-demo-button" variant="outlined" size="large" color="primary"
                onClick={() => {
                  if(onboard){
                  onboard.walletSelect()
                  }
                }}>
                Select a Wallet
          </Button>
        </div>

      <Container>
        <form className="form">
          <div>
            <TextField id="Select1" select label="Select" value={selectToken1} onChange={handleChange1} helperText="Please select your token 1" variant="outlined">
              {tokenslist.map((option: any | any[]) => (
                <MenuItem key={option.id} value={option.symbol}>
                  {option.symbol}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="Input1" label="Amount" variant="outlined" value={inputToken1} color="primary" onChange={handleInputChange1} disabled={(selectToken1=='')||(selectToken2=='')} type="number"/>
          </div>
          <br/>
          <div>
            <TextField id="Select2" select label="Select" value={selectToken2} onChange={handleChange2} helperText="Please select your token 2" variant="outlined">
              {tokenslist.map((option: any | any[]) => (
                <MenuItem key={option.id} value={option.symbol}>
                  {option.symbol}
                </MenuItem>
              ))}
            </TextField>
            <TextField id="Input2" label="Estimated Execution Price" variant="outlined" value={inputToken2} color="primary" disabled type="number"/>
          </div>
        </form>
        <br/>
        <div>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button variant="contained" size="large" color="primary" disabled={/* (inputToken1=='')||(selectToken2=='') */ false} onClick={handleEstimatePriceButton}>
            Estimate
          </Button>
          <Button variant="contained" size="large" color="primary" disabled={/* (selectToken1!="WETH")||(inputToken2=='') */ false} onClick={performTrade}>
            Swap
          </Button>
        </ButtonGroup>
        </div>
        <br/>

        <Tokentable coindata={sortTokenList(tokenslist, etherPrice)}/>
      </Container>
      <Switch color="secondary" onChange={() => setDarkMode(!darkmode)}></Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
