import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Production from '../pages/Production/Production';
import Reports from '../pages/Reports/Reports';
import Checklist from '../pages/Checklist/Checklist';
import Users from '../pages/Users/Users';
import Sectors from '../pages/Sectors/Sectors';

function AppRoutes() {
    return (
        <BrowserRouter>

            <Routes>

                <Route 
                    path="/" 
                    element={<Login />} 
                />

                <Route 
                    path="/dashboard" 
                    element={<Dashboard />} 
                />

                <Route 
                    path="/production" 
                    element={<Production />} 
                />

                <Route 
                    path="/checklist" 
                    element={<Checklist />} 
                />

                <Route 
                    path="/reports" 
                    element={<Reports />} 
                />

                <Route 
                    path="/users" 
                    element={<Users />}
                />

                <Route 
                    path="/sectors" 
                    element={<Sectors />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default AppRoutes;