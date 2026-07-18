import './Sidebar.css';

import { Link, NavLink } from 'react-router-dom';

import {
    FaChartBar,
    FaIndustry,
    FaUsers,
    FaClipboardList,
    FaChartPie
} from 'react-icons/fa';

function Sidebar() {
    return (
        <aside className='sidebar'>
            <div className='sidebar__logo'>
                <Link to="/">
                <h2>TalcoFlow</h2>
                </Link>
            </div>

            <nav className='sidebar__menu'>
                <ul>
                    <li>
                        <NavLink to="/dashboard" className={({isActive})=> isActive ? "active" : ""}
                        >
                        <FaChartBar />
                        <span>Dashboard</span>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/production" className={({isActive}) => isActive ? "active" : ""}
                        >
                        <FaIndustry />
                        <span>Ordens de Produção</span>
                        </NavLink>
                        </li>
                    
                    <li>
                        <FaClipboardList/>
                        <span>Setores</span>
                        </li>
                    <li>
                        <FaUsers />
                        <span>Usuário</span>

                    </li>
                    <li>
                        <FaChartPie />
                        <span>Relatório</span>
                        </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;