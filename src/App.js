import './App.css';
import fire from './firebase/db';
import Login from './Auth/Login';
import Home from './components/HomeMedico';
import Signin from './Auth/Signin';
import React from 'react';
import {useState, useEffect} from 'react';
function App() {
  const [user, setUser] = useState('');
  const [dados, setDados] = useState([]);
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUser, setTipoUser] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  const [possuiConta, setPossuiConta] = useState(false);
  

  const limparCampos = () => {
    setEmail('');
    setSenha('');
  }

  const limparErros = () => {
    setErroEmail('');
    setErroSenha('');
  }
  
  const perfilUsuario = (perfil) => {
   
    if(perfil === "medico"){
      return <Home 
              nome = {dados.usuario}
              tipoUsuario = {dados.tipo}
              handleLogout = {handleLogout}/>
    }
    if(perfil === "gerente"){
      return <Home 
              nome = {dados.usuario}
              tipoUsuario = {dados.tipo}
              handleLogout = {handleLogout}/>
    }
    if(perfil === "secretaria"){
      return <Home 
              nome = {dados.usuario}
              tipoUsuario = {dados.tipo}
              handleLogout = {handleLogout}/>
    }

  }
  const getUser = (uid) => {
    const docRef = fire.firestore().collection('users').doc(uid);
    docRef.get().then((doc) =>{
      setDados(doc.data());
    })
  }
  const handleLogin = () => {
    limparErros();
    fire.auth().signInWithEmailAndPassword(email, senha).then
    (async (data) => {
      const uid = data.user.uid;
      getUser(uid);
    })
    .catch(err => {
      switch (err.code) {
        case "auth/invalid-email":
          setErroEmail("Email inválido");
        break;
        case "auth/user-not-found":
          setErroEmail("Usuário não encontrado");
        break;
        case "auth/wrong-password":
          setErroSenha("Senha incorreta");
        break;
      }       
     
    })
  }

  const handleCadastroUsuario = () => {
    limparErros();
    fire.auth().createUserWithEmailAndPassword(email, senha)
    .then(data => {
          const users = fire.firestore().collection('users');
          users.doc(data.user.uid).set({
          usuario: usuario,
          email: email,
          tipo: tipoUser
      });
          const uid = data.user.uid;
          getUser(uid);
          alert("conta criada com sucesso");
    }).catch(err => {
      switch (err.code) {
        case "auth/invalid-email":
          setErroEmail("Email inválido");
        break;
        case "auth/user-not-found":
          setErroEmail("Usuário não encontrado");
        break;
        case "auth/weak-password":
          setErroSenha("Senha muito fraca");
        break;
      }       
     

    });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        limparCampos();
        setUser(user);
      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

 
  return (
    <div className="App">
      {user ? (
          <Home 
          nome = {dados.usuario}
          tipoUsuario = {dados.tipo}
          handleLogout = {handleLogout}/> 
      ) : (
        !possuiConta ? (<Login
          email={email} setEmail={setEmail}
          senha={senha} setSenha={setSenha}
          possuiConta={possuiConta} setPossuiConta={setPossuiConta} 
          erroEmail={erroEmail}
          erroSenha={erroSenha}
          handleLogin={handleLogin}
          limparCampos={limparCampos}
          />) : (
            <Signin
            usuario={usuario} setUsuario={setUsuario}
            email={email} setEmail={setEmail}
            senha={senha} setSenha={setSenha}
            tipoUser={tipoUser} setTipoUser={setTipoUser}
            possuiConta={possuiConta} setPossuiConta={setPossuiConta} 
            erroEmail={erroEmail}
            erroSenha={erroSenha}
            handleCadastroUsuario={handleCadastroUsuario}
            limparCampos={limparCampos} />
          )
      )}
      
      
    </div>
  );
}

export default App;
