import { useEffect, useState } from 'react';
import './Checklist.css';

function Checklist(){

    const [observacao, setObservacao] = useState('');

    const [status, setStatus] = useState({
        agua: "Pendente",
        concentracao: "Pendente",
        rosca: "Pendente",
        tanque: "Pendente"
    });

    const operador = "Gabriel";

    useEffect(() => {

    const dadosSalvos = localStorage.getItem("checklist");


    if (dadosSalvos) {

        const checklist = JSON.parse(dadosSalvos);

        setObservacao(checklist.observacao || "");

        setStatus(checklist.status);

    }

}, []);


    function salvarObservacao(){

        const checklist = {
        operador,
        data: "20/07/2026",
        turno: "08h - 16h",
        status,
        observacao

    };

    const historicoSalvo = localStorage.getItem("historicoChecklist");

    const historico = historicoSalvo
        ? JSON.parse(historicoSalvo)
        : [];


    historico.push(checklist);


    localStorage.setItem(
        "historicoChecklist",
        JSON.stringify(historico)
    );

    localStorage.setItem(
    "checklist",
    JSON.stringify(checklist)
    );

    setObservacao('');

    setStatus({
        agua: "Pendente",
        concentracao: "Pendente",
        rosca: "Pendente",
        tanque: "Pendente"
    });

}


    return (

        <div className="checklist">

            <h1>
                Checklist da Operação
            </h1>

            <p>
                Registro das verificações realizadas durante o processo.
            </p>


            <div className="checklist__info">

                <div>
                    <strong>Operador:</strong>
                    <span> Gabriel</span>
                </div>


                <div>
                    <strong>Data:</strong>
                    <span> 20/07/2026</span>
                </div>


                <div>
                    <strong>Turno:</strong>
                    <span> 08h - 16h</span>
                </div>

            </div>



            <div className="checklist__table">

                <table>

                    <thead>

                        <tr>
                            <th>Horário</th>
                            <th>Item</th>
                            <th>Status</th>
                        </tr>

                    </thead>



                    <tbody>


                        <tr>

                            <td>08h</td>

                            <td>Vazão da água</td>

                            <td>

                                <select
                                    value={status.agua}
                                    onChange={(e) =>
                                        setStatus({
                                            ...status,
                                            agua: e.target.value
                                        })
                                    }
                                >

                                    <option>Pendente</option>
                                    <option>Concluído</option>

                                </select>

                            </td>

                        </tr>



                        <tr>

                            <td>12h</td>

                            <td>Concentração do talco</td>

                            <td>

                                <select
                                    value={status.concentracao}
                                    onChange={(e) =>
                                        setStatus({
                                            ...status,
                                            concentracao: e.target.value
                                        })
                                    }
                                >

                                    <option>Pendente</option>
                                    <option>Concluído</option>

                                </select>

                            </td>

                        </tr>



                        <tr>

                            <td>14h</td>

                            <td>Nível da rosca</td>

                            <td>

                                <select
                                    value={status.rosca}
                                    onChange={(e) =>
                                        setStatus({
                                            ...status,
                                            rosca: e.target.value
                                        })
                                    }
                                >

                                    <option>Pendente</option>
                                    <option>Concluído</option>

                                </select>

                            </td>

                        </tr>



                        <tr>

                            <td>16h</td>

                            <td>Verificação do tanque</td>

                            <td>

                                <select
                                    value={status.tanque}
                                    onChange={(e) =>
                                        setStatus({
                                            ...status,
                                            tanque: e.target.value
                                        })
                                    }
                                >

                                    <option>Pendente</option>
                                    <option>Concluído</option>

                                </select>

                            </td>

                        </tr>


                    </tbody>


                </table>


            </div>



            <div className="checklist__notes">


                <h3>
                    Observações da Operação
                </h3>



                <textarea

                    placeholder="Digite alguma observação ou ocorrência..."

                    value={observacao}

                    onChange={(e) => setObservacao(e.target.value)}

                />



                <button

                    className="checklist__button"

                    onClick={salvarObservacao}

                >

                    Salvar Observação

                </button>



            </div>


        </div>

    );

}


export default Checklist;