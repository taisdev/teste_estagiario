import React from 'react';

const Login = (props) => {
    const {
        email,
        setEmail,
        senha,
        setSenha,
        erroEmail,
        erroSenha,
        handleLogin
    } = props;
    return (
        <section className="login">
            <div className="loginContainer">
                <label>E-mail</label>
                <input type="text" autofocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{erroEmail}</p>
                <label>Senha</label>
                <input type="text" required value={senha} onChange={e => setSenha(e.target.value)} />
                <p className="errorMsg">{erroSenha}</p>
                <div className="btnContainer">
                    <button onClick={handleLogin}>Entrar</button>
                </div>

            </div>
        </section>
    )
}
export default Login;
