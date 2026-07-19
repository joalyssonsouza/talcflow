import './Dashboard.css';
import Card from '../../components/Card/Card';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

function Dashboard() {

    const dashboardData = [
            {
                title: "Produção do Dia",
                value: "120 t",
                description: "Produção registrada hoje"
            },
            {
                title: "Concentração",
                value: "42%",
                description: "Dentro do padrão"
            },
            {
                title: "Vazão da Água",
                value: "8",
                description: "Valor atual"
            },
            {
                title: "Status",
                value: "Normal",
                description: "Operação estável"
            }
        ];

    return (
        <div className="dashboard">

            <Sidebar />

            <main className="dashboard__content">

                <Header />

                <section className="dashboard__body">

                    <div className='dashboard__title'>

                    <h2>Visão Geral</h2> 

                    <span className='dashboard__update'>
                        Última atualização: Hoje às 08:00
                    </span>

                    <p>
                        Acompanhe os principais indicadores da operação.
                    </p>

                    </div>

                    <div className='dashboard__cards'>

                        {dashboardData.map((item) => (
                            <Card
                                key={item.title}
                                title={item.title}
                                value={item.value}
                                description={item.description}
                            />
                        ))}          

                    </div>

                    <div className="dashboard__charts">

                    <div className="chart__card">
                        <h3>Concentração do Talco</h3>
                        <p>Gráfico será implementado na próxima etapa.</p>
                    </div>

                    <div className="chart__card">
                        <h3>Consumo de Talco</h3>
                        <p>Gráfico será implementado na próxima etapa.</p>
                    </div>

                    <div className="dashboard__operations">

                            <h3>Últimas Operações</h3>

                            <table>

                                <thead>
                                    <tr>
                                        <th>Data</th>
                                        <th>Operador</th>
                                        <th>Concentração</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr>
                                        <td>19/07/2026</td>
                                        <td>Joalisson</td>
                                        <td>42</td>
                                        <td>Normal</td>
                                    </tr>

                                    <tr>
                                        <td>19/07/2026</td>
                                        <td>Carlos</td>
                                        <td>43</td>
                                        <td>Normal</td>
                                    </tr>

                                    <tr>
                                        <td>19/07/2026</td>
                                        <td>Ana</td>
                                        <td>41</td>
                                        <td>Normal</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                </div>

                </section>

            </main>

        </div>
    );
}

export default Dashboard;