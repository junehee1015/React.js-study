import Btn from './Button';
import styles from './css/App.module.css';
import { useState, useEffect } from 'react';

function Hello() {
  // cleanup function
  // function 안에 return function을 해주면 component가 사라질 때 function이 실행된다.

  // cleanup fnuction은 따로 function을 만들지 않고 useEffect 안에서 사용한다.
  // useEffect(() => {return () => {}}, []);
  useEffect(() => {
    console.log(`I'm come! :)`);
    return () => console.log(`I'm gone :(`);
  }, []);
  return <h1>Hello</h1>;
}
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [showing, setShowing] = useState(false);

  const onClick = () => setCounter(value => value + 1);
  const onChange = (e) => setKeyword(e.target.value);
  const clickShowing = () => setShowing(value => !value);

  console.log('i run all time');

  // useEffect(argument1, argument2) -> import 해야한다.
  // -> argument1: 한 번만 실행하고 싶은 코드, 함수.
  useEffect(() => console.log('call the API...') , []);

  // keyword가 바뀔때만 re-render된다.
  useEffect(() => {if(keyword !== '' && keyword.length > 3)console.log('Search', keyword)}, [keyword]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type='text'
        placeholder='Search here...'
      />

      {/* import한 style.module.css 파일에서 className인 title 사용. */}
      <h1 className={styles.title}>Welcom back!!!</h1>

      <h3>{counter}</h3>

      <Btn text='Confirm' onClick={onClick}/>
      <button onClick={clickShowing}>{showing ? 'Hide' : 'show'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
