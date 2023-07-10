import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import { Route, Routes } from 'react-router-dom';
import Detail from './component/Detail';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>


    </>
  );
}

export default App;
