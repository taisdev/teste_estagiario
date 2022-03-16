import React from 'react';

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
            <div className="loginContainer">
                <label>Nome</label>
                <input type="text" autofocus required value={usuario} onChange={e => setUsuario(e.target.value)} />
                <label>E-mail</label>
                <input type="text" required value={email} onChange={e => setEmail(e.target.value)} />
                <p className="errorMsg">{erroEmail}</p>
                <label>Senha</label>
                <input type="text" required value={senha} onChange={e => setSenha(e.target.value)} />
                <p className="errorMsg">{erroSenha}</p>
            
                <label>Tipo de usuário</label>
                <select value={tipoUser} onChange={e => setTipoUser(e.target.value)}>
                    <option select>Selecione</option>
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