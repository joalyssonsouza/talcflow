import './Login.css';

function Login () {
    return (
        <main className='login'>

            <section className='login__panel'>
                <h1>TalcoFlow</h1>
                <p>Plataforma de Controle Operacional</p>
            </section>

            <section className='login__form'>

                <div className='login__card'>

                <h2>Bem-vindo de volta</h2>
                <p>Insira suas credencias para continuar.</p>

            <form>

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