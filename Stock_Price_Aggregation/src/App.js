import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const handleStockPageClick = () => {
    navigate('./Stock_page.js');
  };

  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <Button onClick={handleStockPageClick}  variant="contained">Stock Page</Button>
      </header>
      {/* <ButtonUsage /> */}
      
    </div>
  );
}

export default App;
