import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    function handleLogin(event) {

        event.preventDefault();

        navigate('/dashboard');

    }


    return (

        <main className="login">


            <section className="login__panel">

                <div className="login__brand">


                    <div className="login__logo">
                        TF
                    </div>


                    <h1>
                        TalcoFlow
                    </h1>


                    <p>
                        Controle sua operação industrial com dados,
                        indicadores e acompanhamento em tempo real.
                    </p>


                </div>

            </section>



            <section className="login__form">


                <div className="login__card">


                    <h2>
                        Bem-vindo de volta
                    </h2>


                    <p>
                        Insira suas credenciais para continuar.
                    </p>



                    <form onSubmit={handleLogin}>


                        <label htmlFor="usuario">
                            Usuário
                        </label>


                        <input
                            type="text"
                            id="usuario"
                            placeholder="Digite seu usuário"
                        />



                        <label htmlFor="senha">
                            Senha
                        </label>


                        <input
                            type="password"
                            id="senha"
                            placeholder="Digite sua senha"
                        />



                        <button type="submit">
                            Entrar no Sistema
                        </button>

                        <p className="login__security">
                            Acesso restrito aos colaboradores autorizados.
                        </p>


                    </form>


                </div>



                <footer className="login__footer">

                    © 2026 TalcoFlow | Sistema de Controle Operacional

                </footer>


            </section>


        </main>

    );

}


export default Login;