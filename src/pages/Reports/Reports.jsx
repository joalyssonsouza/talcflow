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


        const dadosHistorico = localStorage.getItem("historicoChecklist");

        if(dadosHistorico){

            setHistorico(JSON.parse(dadosHistorico));

        }

    }, []);


    const totalOperacoes = historico.length;


    const operadorAtual = checklist
        ? checklist.operador
        : "Nenhum";


    const itensConcluidos = checklist
        ? Object.values(checklist.status).filter(
            (item) => item === "Concluído"
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


        </div>

    );

}


export default Reports;