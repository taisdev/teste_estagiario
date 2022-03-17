import './App.css';
import fire from './firebase/db';
import Login from './Auth/Login';
import HomeMedico from './components/HomeMedico';
import HomeSecretaria from './components/HomeSecretaria';
import HomeGerente from './components/HomeGerente';
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
      return <HomeMedico 
              nome = {dados.usuario}
              handleLogout = {handleLogout}/>
    }
    if(perfil === "gerente"){
      return <HomeGerente 
              nome = {dados.usuario}
              handleLogout = {handleLogout}/>
    }
    if(perfil === "secretaria"){
      return <HomeSecretaria 
              nome = {dados.usuario}
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
 const resetSenha = () => {
  fire.auth().sendPasswordResetEmail(email)
  .then(() => {
   alert("E-mail de redefinição de senha enviado, por favor verifique seu e-mail")
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorMessage);
    console.error(errorCode);
  });
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
        case "auth/email-already-exists":
          setErroEmail("E-mail já cadastrado");
        break;
        case "auth/invalid-password":
          setErroSenha("Senha precisa ter no mínimo 6 caracteres");
        break;
        case "auth/weak-password":
          setErroSenha("Senha muito fraca");
        break;
      }       
     

    });
  };

  const handleLogout = () => {
    fire.auth().signOut();
    setPossuiConta(false);
    limparCampos();
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
          perfilUsuario(dados.tipo) 
      ) : (
        !possuiConta ? (<Login
          email={email} setEmail={setEmail}
          senha={senha} setSenha={setSenha}
          possuiConta={possuiConta} setPossuiConta={setPossuiConta} 
          erroEmail={erroEmail}
          erroSenha={erroSenha}
          handleLogin={handleLogin}
          limparCampos={limparCampos}
          resetSenha={resetSenha}
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
