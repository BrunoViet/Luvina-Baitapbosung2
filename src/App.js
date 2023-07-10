import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <>
      <Header />
      <div style={{ padding: "0 200px", marginTop: "20px" }}>
        <Home />
      </div>

    </>
  );
}

export default App;
