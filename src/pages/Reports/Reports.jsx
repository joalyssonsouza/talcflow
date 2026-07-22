import './Reports.css';
import { useEffect, useState } from 'react';


function Reports(){

    const [checklist, setChecklist] = useState(null);

    const [historico, setHistorico] = useState([]);


    useEffect(() => {

        const dadosChecklist = localStorage.getItem("checklist");

        if(dadosChecklist){

            setChecklist(JSON.parse(dadosChecklist));

        }


        const dadosProducao = localStorage.getItem("producoes");

        if(dadosProducao){

           setHistorico(JSON.parse(dadosProducao));

}

    }, []);


    const totalOperacoes = historico.length;


    const operadorAtual = historico.length > 0
    ? historico[historico.length - 1].operador
    : "Nenhum";


    const itensConcluidos = historico.length > 0
    ? Object.values(
        historico[historico.length - 1].checklist
    ).filter(
        (item) => item === true
    ).length
    : 0;


    return (

        <div className="reports">

            <h1>
                Relatórios da Operação
            </h1>


            <p>
                Resumo geral dos dados registrados no sistema.
            </p>


            <div className="reports__cards">


                <div className="report-card">

                    <h3>
                        Operações
                    </h3>

                    <strong>
                        {totalOperacoes}
                    </strong>

                    <span>
                        Registros realizados
                    </span>

                </div>



                <div className="report-card">

                    <h3>
                        Último Operador
                    </h3>

                    <strong>
                        {operadorAtual}
                    </strong>

                    <span>
                        Responsável pelo registro
                    </span>

                </div>



                <div className="report-card">

                    <h3>
                        Checklist
                    </h3>

                    <strong>
                        {itensConcluidos}/4
                    </strong>

                    <span>
                        Itens concluídos
                    </span>

                </div>


            </div>

            <div className="reports__history">

    <h2>
        Histórico de Operações
    </h2>


    <div className="table__container">

        <table>

            <thead>

                <tr>
                    <th>Data</th>
                    <th>Ordem</th>
                    <th>Operador</th>
                    <th>Máquina</th>
                    <th>Concentração</th>
                    <th>Status</th>
                </tr>

            </thead>


            <tbody>

                {historico.map((item) => (

                    <tr key={item.id}>

                        <td>{item.data}</td>

                        <td>{item.ordem}</td>

                        <td>{item.operador}</td>

                        <td>{item.maquina}</td>

                        <td>{item.concentracao}</td>

                        <td>
                            Normal
                        </td>

                    </tr>

                ))}

            </tbody>

        </table>

    </div>

</div>

        </div>

    );

}


export default Reports;