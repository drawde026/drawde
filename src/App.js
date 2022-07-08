import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import ShopNow from './pages/ShopNow'
import Aboutus from './pages/Aboutus'
import Contacts from './pages/Contacts'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
  
    
function App() {
  return ( 
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='ShopNow' element={<ShopNow />}/>
      <Route path='Aboutus' element={<Aboutus />}/>
      <Route path='Contacts' element={<Contacts />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    
  );
}



export default App;

