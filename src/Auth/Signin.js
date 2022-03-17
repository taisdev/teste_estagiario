import React from 'react';
import logologin from './../img/logologin.png';
import './Auth.css';

const Signin = (props) => {
    const {
        usuario,
        setUsuario,
        email,
        setEmail,
        senha,
        setSenha,
        tipoUser,
        setTipoUser,
        erroEmail,
        erroSenha,
        possuiConta,
        setPossuiConta,
        limparCampos,
        handleCadastroUsuario
    } = props;

    return (
        <section className="login">
            <div className="container">
            <img src={logologin}/>
                <input placeholder="Nome" type="text" autofocus required value={usuario} onChange={e => setUsuario(e.target.value)} />
                <input placeholder="E-mail" type="text" required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{erroEmail}</p>
                <input placeholder="Senha" type="password" required value={senha} onChange={e => setSenha(e.target.value)} />
                <p className="errorMsg">{erroSenha}</p>
                <select placeholder="Tipo de usuário" value={tipoUser} onChange={e => setTipoUser(e.target.value)}>
                    <option >Selecione</option>
                    <option value="medico">Médico</option>
                    <option value="gerente">Gerente</option>
                    <option value="secretaria">Secretária</option>
                </select>
                <div className="btnContainer">
                    <button onClick={handleCadastroUsuario}>Cadastrar</button>
                    <p>Já tenho conta <span onClick={limparCampos}><span onClick={() => setPossuiConta(!possuiConta)}>Fazer login</span></span></p>
                </div>

            </div>
        </section>
    )
}
export default Signin;
