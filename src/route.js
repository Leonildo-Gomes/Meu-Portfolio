import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Erro from './pages/Erro';
import Home from './pages/Home';

function RouteApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
        
    );
}

export default RouteApp;