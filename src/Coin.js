import { useEffect, useState } from "react";

function App() {
  // useState
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [select, setSelect] = useState([]);
  const [money, setMoney] = useState(null);
  console.log(select[1]);
  console.log(money);

  // function
  const onClick = (e) => {
    coins.find((coin) => e.target.value == coin.id ? setSelect((value) => [coin.name, coin.quotes.USD.price]) : null);
  };
  const onChange = (e) => setMoney(e.target.value);

  // useEffect
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? null : `[${coins.length}]`}</h1>
      {loading ? (<strong>Loading...</strong>) : (
        <select onClick={onClick}>
          <option>select coin</option>
          {coins.map((coin) => (<option key={coin.id} value={coin.id}>{coin.name}({coin.symbol})</option>))}
        </select>
      )}
      <hr/>
      {select.length !== 0 ? (<h3>{select[0]}: ${select[1]} USD / ₩{select[1] * 1214.63}원</h3>) : null}
      <table style={{border: '1px solid #000', borderCollapse: 'collapse',}}>
        <tr style={{border: '1px solid #000'}}>
          <th style={{border: '1px solid #000'}}>현재 가지고 있는 돈</th>
          <th>구입 가능한 갯수</th>
        </tr>
        <tr>
          <td style={{border: '1px solid #000'}}>
            <input value={money} onChange={onChange} type='number' placeholder='How much do you have?' /><strong>원</strong>
          </td>
          <td>
            <input value={select.length !== 0 ? (money / 1214.63) / select[1] : null} type='text' readOnly/><strong>개</strong>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default App;
