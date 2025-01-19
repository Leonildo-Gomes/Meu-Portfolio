import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Erro from './pages/Erro';
import Home from './pages/Home';

function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="*" element={<Erro/>} />
            </Routes>
        </BrowserRouter>
        
    );
}

export default RouteApp;