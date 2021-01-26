import React, { useEffect, useState } from "react";
import './App.css';
import { ApolloClient, InMemoryCache} from '@apollo/client';
import { ChainId, Token, Fetcher, Trade, Route, TokenAmount, TradeType } from '@uniswap/sdk'
import Tokentable from './Tokentable';
import { ETHER_PRICE, ALL_TOKENS } from './queries'
import { sortTokenList, getTokenBySymbol, getTokensByID } from './utils';
import { Container, TextField, MenuItem, Button, ButtonGroup, Paper, Switch } from '@material-ui/core';
import ButtonAppBar from './AppBar'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useWallet } from 'use-wallet'

interface TradeToken {
  name: string
  symbol: string
  address: string
  decimals: number
}

function App() {
  const [etherPrice, setEtherPrice] = useState<number>(0);
  const [tokenslist, setTokensList] = useState<any | any[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<any[] | any>([]);
  const [token1, settoken1] = useState<TradeToken>({name: "", symbol: "", address: "", decimals: 0});
  const [token2, settoken2] = useState<TradeToken>({name: "", symbol: "", address: "", decimals: 0});
  const [selectToken1, setSelectToken1] = useState('');
  const [selectToken2, setSelectToken2] = useState('');
  const [inputToken1, setInputToken1] = useState('');
  const [inputToken2, setInputToken2] = useState('');
  const [darkmode, setDarkMode] = useState<boolean>(true);

  const wallet = useWallet();

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

  const HandleCheckBox = () => {
    if(selectedKeys){
      var tokens: any[] | any = getTokensByID(tokenslist, selectedKeys);
      if(selectedKeys.length == 1){
        console.log(tokens[0].symbol)
        setSelectToken1(tokens[0].symbol)
      }
      else if(selectedKeys.length == 2){
        console.log(tokens[1].symbol)
        setSelectToken2(tokens[1].symbol)
      }
      else if(selectedKeys.length >= 2){
        console.log("Toom many selected")
      }
    }
    return(null) 
  }

  // Get realtime price of token1 based on paired token2
  const getPrice = async (id1: string, decimals1: number, id2: string, decimals2: number) => {
    const token1 = new Token(ChainId.MAINNET, id1, decimals1);
    const token2 = new Token(ChainId.MAINNET, id2, decimals2);
    const pair = await Fetcher.fetchPairData(token1, token2);
    const route = new Route([pair], token1);
    const trade = new Trade(route, new TokenAmount(token1, '10000000000000000'), TradeType.EXACT_INPUT);
    console.log("Execution Price:", trade.executionPrice.toSignificant(6));
    console.log("Mid Price:", route.midPrice.toSignificant(6))
    return trade.executionPrice.toSignificant(6);
  }

  const BalanceButton = () => {

    const handleBalanceButton = () =>{
      if(selectToken1=='WETH'){
        setInputToken1((parseFloat(wallet.balance)/1000000000000000000).toString())
      }
    }

    return(
      <div>
      {wallet.status === 'connected' ? (
        <div>
          <Button variant="outlined" size="large" color="primary" onClick={handleBalanceButton}>
            <div>Balance: {(parseFloat(wallet.balance)/1000000000000000000)} ETH</div>
          </Button>
        </div>
      ) : (
        <div>
          <Button variant="outlined" size="large" color="primary" disabled>
            <div>Balance: Disconnected</div>
          </Button>
        </div>
      )}
      <br/>
      </div>
    )
  }

  // On Mount 
  useEffect(()=>{
    getEtherPrice();
    getAllTokens();
    sortTokenList(tokenslist, etherPrice);
  }, []);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectToken1(event.target.value);
    var token_temp = getTokenBySymbol(tokenslist, event.target.value);
    settoken1({name: token_temp.name, symbol: token_temp.symbol, address: token_temp.id, decimals: token_temp.decimals});
    setInputToken1('');
    setInputToken2('');
  };
  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setInputToken1(event.target.value);
    if(event.target.value==''){
      setInputToken2('');
    }
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectToken2(event.target.value);
    var token_temp = getTokenBySymbol(tokenslist, event.target.value);
    settoken2({name: token_temp.name, symbol: token_temp.symbol, address: token_temp.id, decimals: token_temp.decimals});
    setInputToken1('');
    setInputToken2('');
  };
  const handleEstimatePriceButton = async () => {
    var ExecutionPrice = await getPrice(token1.address, token1.decimals, token2.address, token2.decimals);
    setInputToken2((parseFloat(inputToken1)*parseFloat(ExecutionPrice)).toString());
  };

  return (
    <ThemeProvider theme={mainTheme}>
      <Paper>
    <div className="App">
      <ButtonAppBar></ButtonAppBar>
      <header>
        <h1>
          Uniswap Remote Trader
        </h1>
      </header>

      <BalanceButton></BalanceButton>

      <Container>
        {/* <HandleCheckBox></HandleCheckBox> */}
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
          <Button variant="contained" size="large" color="primary" disabled={(inputToken1=='')||(selectToken2=='')} onClick={handleEstimatePriceButton}>
            Estimate
          </Button>
          <Button variant="contained" size="large" color="primary" disabled={(selectToken1!="WETH")||((parseFloat(wallet.balance)/1000000000000000000) < parseFloat(inputToken1))||(inputToken2=='')}>
            Swap
          </Button>
        </ButtonGroup>
        </div>
        <br/>

        <Tokentable coindata={sortTokenList(tokenslist, etherPrice)} selectRows={(selectedRowsKeys: string|string[]) => setSelectedKeys(selectedRowsKeys)}/>
      </Container>
      <Switch color="secondary" onChange={() => setDarkMode(!darkmode)}></Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;
