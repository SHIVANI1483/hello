import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';


function App() {
  return (
    <div >
     <BrowserRouter>
     <Header></Header>
     </BrowserRouter> 
      
    </div>
  );
}

export default App;
