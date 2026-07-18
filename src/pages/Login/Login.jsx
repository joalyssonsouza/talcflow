import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login () {
    const navigate = useNavigate();

    function handleLogin(event){
        event.preventDefault();

        navigate('/dashboard');
    }

    return (
        <main className='login'>

            <section className='login__panel'>

                <div className='login__brand'>

                    <div className='login__logo'>
                        TF
                    </div>

                <h1>TalcoFlow</h1>
                <p>Gerencia processos, acompanhe operações e tenha mais controle sobre sua produção.</p>

                </div>

            </section>

            <section className='login__form'>

                <div className='login__card'>

                <h2>Bem-vindo de volta</h2>
                <p>Insira suas credencias para continuar.</p>

            <form onSubmit={handleLogin}>

                <label htmlFor="usuario">Usuário</label>

                <input type="text" 
                id='usuario'
                placeholder='Digite seu usuário'
                />

                <label htmlFor="senha">Senha</label>

                <input type="password" 
                id='senha'
                placeholder='Digite sua senha'
                />

                <button type='submit'>
                    Entrar no Sistema
                </button>

            </form>

            </div>

            </section>

        </main>
    );
}

export default Login;