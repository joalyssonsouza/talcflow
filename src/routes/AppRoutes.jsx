import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Production from '../pages/Production/Production';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/production" element={<Production />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;