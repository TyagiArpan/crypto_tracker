import './Coin.css';

const Coin = ({ name, rank, image, symbol, price, volume, priceChange, marketcap }) => {
    return ( 
        <div className="coin-container">
            <div className="coin-row">
                <p className="coin-rank">#{ rank }</p>
                <div className="coin">
                    <img src={image} alt="crypto" />
                    <h1>{ name }</h1>
                    <p className="coin-symbol">{ symbol }</p>
                </div>
                <div className="coin-data">
                    <p className="coin-price">Rs. { price.toLocaleString() }</p>
                    <p className="coin-volume">Rs. { volume.toLocaleString() }</p>
                    {priceChange < 0 ? (
                        <p className="coin-percentage red">{ priceChange.toFixed(2) }%</p>
                    ) : (
                        <p className="coin-percentage green">{ priceChange.toFixed(2) }%</p>
                    )}
                    <p className="coin-marketcap">
                        Rs.{marketcap.toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
     );
};
 
export default Coin;