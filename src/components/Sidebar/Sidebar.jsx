import './Sidebar.css';

import { Link, NavLink } from 'react-router-dom';

import {
    FaChartBar,
    FaIndustry,
    FaUsers,
    FaClipboardList,
    FaChartPie,
    FaClipboardCheck
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

                            <NavLink
                                to="/sectors"
                                className={({isActive}) => isActive ? "active" : ""}
                            >

                                <FaClipboardList />

                                <span>
                                    Setores
                                </span>

                            </NavLink>

                        </li>

                        <li>
                            <NavLink to="/checklist">

                                <FaClipboardCheck />

                                <span>
                                    Checklist
                                </span>

                            </NavLink>
                        </li>

                    <li>

                        <NavLink
                            to="/users"
                            className={({isActive}) => isActive ? "active" : ""}
                        >

                            <FaUsers />

                            <span>
                                Usuário
                            </span>

                        </NavLink>

                    </li>
                    <li>
                        <NavLink 
                            to="/reports"
                            className={({isActive}) => isActive ? "active" : ""}
                        >

                            <FaChartPie />

                            <span>
                                Relatório
                            </span>

                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Sidebar;