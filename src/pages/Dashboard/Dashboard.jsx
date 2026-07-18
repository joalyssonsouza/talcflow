import './Dashboard.css';
import Card from '../../components/Card/Card';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

function Dashboard() {
    return (
        <div className="dashboard">

            <Sidebar />

            <main className="dashboard__content">

                <Header />

                <section className="dashboard__body">

                    <div className='dashboard__title'>

                    <h2>Visão Geral</h2> 

                    <p>
                        Acompanhe os principais indicadores da operação.
                    </p>

                    </div>

                    <div className='dashboard__cards'>

                                    <Card 
                    title="Produção"
                    value="120"
                    description="Ordens em andamento"
                />


                <Card 
                    title="Setores"
                    value="08"
                    description="Setores cadastrados"
                />


                <Card 
                    title="Usuários"
                    value="25"
                    description="Usuários ativos"
                /> 

                    </div>

                </section>

            </main>

        </div>
    );
}

export default Dashboard;