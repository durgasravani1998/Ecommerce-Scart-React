
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Shop from './Components/Shop';
import { ShopContextProvider } from './Context/Shop-Context';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>        
        <Route path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
      
    </div>
  );
}


export default App;
