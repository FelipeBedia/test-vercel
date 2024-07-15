import './App.css';
import { BrowserRouter as Router, Routes, Route }from "react-router-dom";

import {Home} from './Screens/Home';
import { TablaProductos} from './Screens/Productos';
import {Nosotros} from './Screens/Nosotros';
import { NavBar } from './Components/Navbar';
import {BasicCard} from './Components/card';
import { Footer } from './Components/Footer';
import {Contact} from './Screens/Contact';
import {BasicCard2} from './Components/card2';
import {BasicCard3} from './Components/card3';
import { Menu } from './Screens/Menu';
import {Historial} from './Screens/Historial';
import { Buscador } from './Components/Buscador';

function App() {
  return (
    <section className='fondo'>
      <div>
        <Router>
          <Menu/>
            <Routes>
              <Route path="./home" element={<Home/>} />
              <Route path="./historial" element={<Historial/>} />
            </Routes>
        </Router>

        <NavBar/>
        <Buscador/>
        <Home />
        <TablaProductos/>
        <BasicCard/>
        <BasicCard2/>
        <BasicCard3/>
        <Nosotros />
        
        <Contact/>
        <Footer/>
      </div>
    </section>
  );
}

export default App;
