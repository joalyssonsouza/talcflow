import './Login.css';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import {
    FaUser,
    FaLock,
    FaEye,
    FaEyeSlash
} from 'react-icons/fa';

function Login() {

    const navigate = useNavigate();

    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function handleLogin(event) {

        event.preventDefault();

        setLoading(true);

        // Simula autenticação
        setTimeout(() => {

            navigate('/dashboard');

        }, 1500);

    }

    return (

        <main className="login">

            {/* ===========================
                PAINEL ESQUERDO
            ============================ */}

            <section className="login__panel">

                <div className="login__brand">

                    <div className="login__logo">
                        TF
                    </div>

                    <h1>TalcoFlow</h1>

                    <p>
                        Controle sua operação industrial com dados,
                        indicadores e acompanhamento em tempo real.
                    </p>

                </div>

            </section>

            {/* ===========================
                FORMULÁRIO
            ============================ */}

            <section className="login__form">

                <div className="login__card">

                    <span className="login__subtitle">
                        ACESSO AO SISTEMA
                    </span>

                    <h2>
                        Bem-vindo de volta
                    </h2>

                    <p>
                        Insira suas credenciais para continuar.
                    </p>

                    <form onSubmit={handleLogin}>

                        {/* E-mail */}

                        <label htmlFor="email">
                            E-mail
                        </label>

                        <div className="input__group">

                            <FaUser className="input__icon" />

                            <input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />

                        </div>

                        {/* Senha */}

                        <label htmlFor="senha">
                            Senha
                        </label>

                        <div className="input__group">

                            <FaLock className="input__icon" />

                            <input
                                type={mostrarSenha ? "text" : "password"}
                                id="senha"
                                placeholder="Digite sua senha"
                                value={senha}
                                onChange={(event) => setSenha(event.target.value)}
                                required
                            />

                            <button
                                type="button"
                                className="password__button"
                                onClick={() =>
                                    setMostrarSenha(!mostrarSenha)
                                }
                            >

                                {
                                    mostrarSenha
                                        ? <FaEyeSlash />
                                        : <FaEye />
                                }

                            </button>

                        </div>

                        {/* Esqueci minha senha */}

                        <div className="login__options">

                            <a href="#">
                                Esqueci minha senha
                            </a>

                        </div>

                        {/* Botão */}

                        <button
                            type="submit"
                            className="login__button"
                            disabled={loading}
                        >

                            {
                                loading ? (
                                    <>
                                        <span className="spinner"></span>
                                        Autenticando...
                                    </>
                                ) : (
                                    'Entrar no Sistema'
                                )
                            }

                        </button>

                        <p className="login__security">

                            Acesso restrito aos colaboradores autorizados.

                        </p>

                    </form>

                </div>

                {/* Rodapé */}

                <footer className="login__footer">

                    <p>
                        © 2026 <strong>TalcoFlow</strong>
                    </p>

                    <span>
                        Plataforma de Controle Operacional Industrial
                    </span>

                </footer>

            </section>

        </main>

    );

}

export default Login;