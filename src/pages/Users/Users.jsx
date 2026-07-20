import './Users.css';


function Users(){

    const usuarios = [

        {
            nome: "Gabriel",
            cargo: "Operador",
            turno: "08h - 16h",
            status: "Ativo"
        },

        {
            nome: "Carlos",
            cargo: "Supervisor",
            turno: "16h - 00h",
            status: "Ativo"
        },

        {
            nome: "Júlia",
            cargo: "Operadora",
            turno: "00h - 08h",
            status: "Ativo"
        }

    ];


    return (

        <div className="users">

            <h1>
                Usuários
            </h1>

            <p>
                Gerenciamento dos usuários do sistema.
            </p>


            <div className="users__table">

                <table>

                    <thead>

                        <tr>

                            <th>
                                Nome
                            </th>

                            <th>
                                Cargo
                            </th>

                            <th>
                                Turno
                            </th>

                            <th>
                                Status
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {usuarios.map((usuario) => (

                            <tr key={usuario.nome}>

                                <td>
                                    {usuario.nome}
                                </td>

                                <td>
                                    {usuario.cargo}
                                </td>

                                <td>
                                    {usuario.turno}
                                </td>

                                <td>
                                    {usuario.status}
                                </td>

                            </tr>

                        ))}

                    </tbody>


                </table>

            </div>


        </div>

    );

}


export default Users;