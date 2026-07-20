import './Sectors.css';


function Sectors(){

    const setores = [

        {
            nome: "Branqueamento",
            responsavel: "Gabriel",
            status: "Operando"
        },

        {
            nome: "Depuração",
            responsavel: "Carlos",
            status: "Operando"
        },

        {
            nome: "Secagem",
            responsavel: "Júlia",
            status: "Parado"
        },

        {
            nome: "Preparação do Talco",
            responsavel: "Gabriel",
            status: "Operando"
        }

    ];


    return (

        <div className="sectors">

            <h1>
                Setores da Operação
            </h1>


            <p>
                Acompanhe os setores e responsáveis pelo processo.
            </p>



            <div className="sectors__table">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Setor
                            </th>

                            <th>
                                Responsável
                            </th>

                            <th>
                                Status
                            </th>

                        </tr>

                    </thead>



                    <tbody>

                        {setores.map((setor) => (

                            <tr key={setor.nome}>

                                <td>
                                    {setor.nome}
                                </td>


                                <td>
                                    {setor.responsavel}
                                </td>


                                <td>
                                    {setor.status}
                                </td>

                            </tr>

                        ))}


                    </tbody>


                </table>


            </div>


        </div>

    );

}


export default Sectors;