import React from 'react';
import logologin from './../img/logologin.png';
import './Auth.css';
const Login = (props) => {
    const {
        email,
        setEmail,
        senha,
        setSenha,
        erroEmail,
        erroSenha,
        limparCampos,
        handleLogin,
        possuiConta,
        setPossuiConta,
        resetSenha
    } = props;
    return (
        <section className="login">
            <div className="container">
                <img src={logologin}/>
                <input placeholder="E-mail" type="text" autofocus required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{erroEmail}</p>
                <input placeholder="Senha" type="password" required value={senha} onChange={e => setSenha(e.target.value)} />
                <p className="errorMsg">{erroSenha}</p>
                <div className="btnContainer">
                    <button onClick={handleLogin}>Entrar</button>
                    <p> Ainda não tem conta? <span onClick={limparCampos}><span onClick={() => setPossuiConta(!possuiConta)}>Cadastre-se</span></span></p>
                    <p><span onClick={resetSenha}>Esqueceu a senha?</span></p>
                   
                </div>

            </div>
        </section>
    )
}
export default Login;
