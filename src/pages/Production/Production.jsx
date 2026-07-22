import { useState } from 'react';
import './Production.css';

function Production() {

    const initialForm = {
        ordem: "",
        data: "",
        operador: "",
        maquina: "",
        concentracao: "",
        vazaoAgua: "",
        vazaoTalco: "",
        nivelRosca: "",
        observacoes: "",
        checklist: {
            h08: false,
            h12: false,
            h14: false,
            h16: false
        }
    };


    const [formData, setFormData] = useState(initialForm);



    function handleChange(event) {

        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

    }



    function handleChecklistChange(event) {

        const { name, checked } = event.target;

        setFormData((prev) => ({
            ...prev,

            checklist: {
                ...prev.checklist,
                [name]: checked
            }

        }));

    }



    function handleSubmit(event) {

        event.preventDefault();


        const novaProducao = {

            id: Date.now(),

            ...formData,

            status: "Normal"

        };



        const producoesSalvas = JSON.parse(
            localStorage.getItem("producoes")
        ) || [];



        localStorage.setItem(

            "producoes",

            JSON.stringify([

                ...producoesSalvas,

                novaProducao

            ])

        );



        alert("Produção registrada com sucesso!");



        setFormData({

            ...initialForm,

            checklist: {
                h08: false,
                h12: false,
                h14: false,
                h16: false
            }

        });

    }




    return (

        <div className="production">


            <h1>
                Ordens de Produção
            </h1>


            <p>
                Registre os dados operacionais da produção.
            </p>




            <div className="production__indicators">


                <div className="production__parameters">


                    <h2>
                        Parâmetros do Processo
                    </h2>



                    <div className="parameters__grid">


                        <div className="parameter__card">
                            <span>
                                Vazão de Depuração
                            </span>

                            <strong>
                                --
                            </strong>

                        </div>



                        <div className="parameter__card">

                            <span>
                                Vazão de Branqueamento
                            </span>

                            <strong>
                                --
                            </strong>

                        </div>



                        <div className="parameter__card">

                            <span>
                                Vazão Total
                            </span>

                            <strong>
                                --
                            </strong>

                        </div>



                        <div className="parameter__card">

                            <span>
                                Consumo Específico de Talco
                            </span>

                            <strong>
                                --
                            </strong>

                        </div>


                    </div>


                </div>





                <div className="indicator__card">

                    <span>
                        Concentração
                    </span>

                    <strong>
                        42
                    </strong>

                </div>



                <div className="indicator__card">

                    <span>
                        Vazão da Água
                    </span>

                    <strong>
                        8
                    </strong>

                </div>



                <div className="indicator__card">

                    <span>
                        Nível do Talco
                    </span>

                    <strong>
                        6
                    </strong>

                </div>


            </div>





            <div className="production__status">

                <span>
                    Status da Operação
                </span>


                <strong>
                    Normal
                </strong>


            </div>






            <div className="production__card">


                <form

                    className="production__form"

                    onSubmit={handleSubmit}

                >




                    <div className="form__group">

                        <label>
                            Ordem de Produção
                        </label>


                        <input

                            type="text"

                            name="ordem"

                            value={formData.ordem}

                            onChange={handleChange}

                            placeholder="Ex: OP-2026-001"

                        />

                    </div>





                    <div className="form__group">


                        <label>
                            Data
                        </label>


                        <input

                            type="date"

                            name="data"

                            value={formData.data}

                            onChange={handleChange}

                        />

                    </div>





                    <div className="form__group">

                        <label>
                            Operador
                        </label>


                        <input

                            type="text"

                            name="operador"

                            value={formData.operador}

                            onChange={handleChange}

                            placeholder="Nome do operador"

                        />

                    </div>





                    <div className="form__group">

                        <label>
                            Máquina
                        </label>


                        <input

                            type="text"

                            name="maquina"

                            value={formData.maquina}

                            onChange={handleChange}

                            placeholder="Ex: M-01"

                        />

                    </div>





                    <div className="form__group">

                        <label>
                            Concentração do Talco
                        </label>


                        <input

                            type="number"

                            name="concentracao"

                            value={formData.concentracao}

                            onChange={handleChange}

                        />

                    </div>





                    <div className="form__group">

                        <label>
                            Vazão da Água
                        </label>


                        <input

                            type="number"

                            name="vazaoAgua"

                            value={formData.vazaoAgua}

                            onChange={handleChange}

                        />

                    </div>





                    <div className="form__group">

                        <label>
                            Vazão do Talco
                        </label>


                        <input

                            type="number"

                            name="vazaoTalco"

                            value={formData.vazaoTalco}

                            onChange={handleChange}

                        />

                    </div>





                    <div className="form__group">

                        <label>
                            Nível da Rosca
                        </label>


                        <input

                            type="number"

                            name="nivelRosca"

                            value={formData.nivelRosca}

                            onChange={handleChange}

                        />

                    </div>





                    <div className="form__group form__group--full">


                        <label>
                            Observações
                        </label>


                        <textarea

                            name="observacoes"

                            value={formData.observacoes}

                            onChange={handleChange}

                            placeholder="Digite alguma observação..."

                        />


                    </div>





                    <button type="submit">

                        Registrar Produção

                    </button>






                    <div className="production__checklist">


                        <h2>
                            Checklist Operacional
                        </h2>




                        <div className="checklist__times">


                            {
                                [
                                    {
                                        nome: "h08",
                                        horario: "08:00"
                                    },
                                    {
                                        nome: "h12",
                                        horario: "12:00"
                                    },
                                    {
                                        nome: "h14",
                                        horario: "14:00"
                                    },
                                    {
                                        nome: "h16",
                                        horario: "16:00"
                                    }

                                ].map((hora) => (


                                    <div

                                        className="checklist__item"

                                        key={hora.nome}

                                    >


                                        <span>
                                            {hora.horario}
                                        </span>


                                        <input

                                            type="checkbox"

                                            name={hora.nome}

                                            checked={
                                                formData.checklist[hora.nome]
                                            }

                                            onChange={
                                                handleChecklistChange
                                            }

                                        />


                                    </div>


                                ))

                            }


                        </div>


                    </div>





                </form>


            </div>


        </div>

    );

}


export default Production;