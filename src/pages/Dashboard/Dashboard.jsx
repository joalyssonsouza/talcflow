import './Dashboard.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';

import Charts from '../../components/Charts/Charts';

function Dashboard() {


    const [checklist, setChecklist] = useState(null);

    const [historico, setHistorico] = useState([]);

    useEffect(() => {

    const dados = localStorage.getItem("checklist");

    if(dados){

        setChecklist(JSON.parse(dados));

    }

    const dadosHistorico = localStorage.getItem("historicoChecklist");

        if(dadosHistorico){

            setHistorico(JSON.parse(dadosHistorico));

        }

}, []);

    const itensConcluidos = checklist
    ? Object.values(checklist.status).filter(
        (item) => item === "Concluído"
    ).length
    : 0;

    const statusOperacao = itensConcluidos === 4
    ? "Normal"
    : "Atenção";

    const ultimaOperacao = checklist
    ? {
        data: checklist.data,
        operador: checklist.operador,
        status: statusOperacao
    }
    : null;

    const dataAtualizacao = new Date().toLocaleString();

    const dashboardData = [
            {
                title: "Checklist",
                value: `${itensConcluidos}/4`,
                description: "Itens concluídos"
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
            value: checklist ? statusOperacao : "Sem dados",
            description: checklist
                ? "Baseado no checklist"
                : "Nenhum checklist encontrado"
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
                        Última atualização: {dataAtualizacao}
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

                       <Charts />

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

                                {historico.length > 0 ? (

                                    historico.map((operacao, index) => (

                                        <tr key={index}>

                                            <td>
                                                {operacao.data}
                                            </td>

                                            <td>
                                                {operacao.operador}
                                            </td>

                                            <td>
                                                42%
                                            </td>

                                            <td>
                                                {operacao.status.agua === "Concluído"
                                                    ? "Normal"
                                                    : "Atenção"}
                                            </td>

                                        </tr>

                                    ))

                                ) : (

                                    <tr>

                                        <td colSpan="4">
                                            Nenhuma operação registrada
                                        </td>

                                    </tr>

                                )}

                            </tbody>

                            </table>

                        </div>

                

                </section>

            </main>

        </div>
    );
}
export default Dashboard;