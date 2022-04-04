import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from './movieRoutes/Main'
import Detail from './movieRoutes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/detail/:id' element={<Detail />}></Route>
        <Route path='/' element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;