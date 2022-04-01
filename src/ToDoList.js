import { useState } from 'react';

function App() {
    const [value, setValue] = useState(''); // input 값.
    const [list, setList] = useState([]); // input 값을 받을 빈 배열 생성.

    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if(value === '') return;
        setList(list => [...list, value]); // ... -> 배열을 포함시킨다는 의미.
        setValue('');
    };
    return (
        <div>
            <h1>My To Do List ({list.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    value={value}
                    onChange={onChange}
                    type='text'
                    placeholder='Write your to do'
                    autoFocus
                />
                <button>Add To Do</button>
            </form>
            <ul>
                {/* react는 배열의 모든 값을 인식하기 때문에 구분하기 위해서 key의 값을 고유한 값으로 지정해주어야 한다. */}
                {/* map의 기능중 두 번째 argument는 index의 기능으로, key의 고유한 값으로 지정 할 수 있다. */}
                {list.map((value, index) => <li key={index}>{value}</li>)}
            </ul>
        </div>
    );
}

export default App;