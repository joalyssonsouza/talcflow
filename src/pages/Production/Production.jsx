import './Production.css';

function Production() {
    return (
        <div className="production">

            <h1>Ordens de Produção</h1>

            <p>
                Registre os dados operacionais da produção.
            </p>

            <div className="production__indicators">

                <div className="production__parameters">

                        <h2>Parâmetros do Processo</h2>

                        <div className="parameters__grid">

                            <div className="parameter__card">
                                <span>Vazão de Depuração</span>
                                <strong>--</strong>
                            </div>

                            <div className="parameter__card">
                                <span>Vazão de Branqueamento</span>
                                <strong>--</strong>
                            </div>

                            <div className="parameter__card">
                                <span>Vazão Total</span>
                                <strong>--</strong>
                            </div>

                            <div className="parameter__card">
                                <span>Consumo Específico de Talco</span>
                                <strong>--</strong>
                            </div>

                        </div>

                    </div>

                    <div className="indicator__card">
                        <span>Concentração</span>
                        <strong>42</strong>
                    </div>


                    <div className="indicator__card">
                        <span>Vazão da Água</span>
                        <strong>8</strong>
                    </div>


                    <div className="indicator__card">
                        <span>Nível do Talco</span>
                        <strong>6</strong>
                    </div>


                </div>

                <div className="production__status">

                        <span>Status da Operação</span>

                        <strong>
                            Normal
                        </strong>

                    </div>


            <div className="production__card">

                <form className="production__form">

                    <div className="form__group">
                        <label>Ordem de Produção</label>

                        <input
                            type="text"
                            placeholder="Ex: OP-2026-001"
                        />

                    </div>

                    <div className="form__group">
                        <label>Data</label>
                        <input 
                            type="date"
                        />
                    </div>


                    <div className="form__group">
                        <label>Operador</label>
                        <input 
                            type="text"
                            placeholder="Nome do operador"
                        />
                    </div>


                    <div className="form__group">
                        <label>Máquina</label>
                        <input 
                            type="text"
                            placeholder="Identificação da máquina"
                        />
                    </div>


                    <div className="form__group">
                        <label>Concentração do Talco</label>
                        <input 
                            type="number"
                            placeholder="Ex: 42"
                        />
                    </div>


                    <div className="form__group">
                        <label>Vazão da Água</label>
                        <input 
                            type="number"
                            placeholder="Ex: 8"
                        />
                    </div>


                    <div className="form__group">
                        <label>Vazão do Talco</label>
                        <input 
                            type="number"
                            placeholder="Ex: 6"
                        />
                    </div>


                    <div className="form__group">
                        <label>Nível da Rosca</label>
                        <input 
                            type="number"
                            placeholder="Ex: 70%"
                        />
                    </div>

                    <div className="form__group form__group--full">

                        <label>Observações</label>

                        <textarea
                            placeholder="Digite alguma observação da operação..."
                        ></textarea>

                    </div>

                    <button type="submit">
                        Registrar Produção
                    </button>

                    <div className="production__checklist">

                        <h2>Checklist Operacional</h2>

                        <div className="checklist__times">

                            <div className="checklist__item">
                                <span>08:00</span>
                                <input type="checkbox" />
                            </div>


                            <div className="checklist__item">
                                <span>12:00</span>
                                <input type="checkbox" />
                            </div>


                            <div className="checklist__item">
                                <span>14:00</span>
                                <input type="checkbox" />
                            </div>


                            <div className="checklist__item">
                                <span>16:00</span>
                                <input type="checkbox" />
                            </div>

                        </div>

                    </div>

                </form>

            </div>

        </div>
    );
}

export default Production;