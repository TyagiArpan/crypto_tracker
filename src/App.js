import './App.css';
import './Coin.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Coin from './Coin';


function App() {

  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState('');


  useEffect(() =>{
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res =>{
        setCoins(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleChange} />
        </form>
      </div>
      <div className="coin-container">
        <div className="coin-row">
          <p className="coin-rank">#</p>
          <p className="coin">Coin</p>
          <div className="coin-data">
            <p className="coin-price">Price</p>
            <p className="coin-volume">24h Volume</p>
            <p className="coin-percentage">24h</p>
            <p className="coin-marketcap">Mkt Cap</p>
          </div>
        </div>
      </div>
      {filteredCoins.map(coin =>{
        return(
          <Coin
            key = {coin.id}
            rank = {coin.market_cap_rank}
            name = {coin.name}
            image = {coin.image}
            symbol = {coin.symbol}
            marketcap = {coin.market_cap}
            price = {coin.current_price}
            priceChange = {coin.price_change_percentage_24h}
            volume = {coin.total_volume}
          />
        );
      }
    )} 
    </div>
  );
}

export default App;
