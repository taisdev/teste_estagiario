import './App.css';
import fire from './firebase/db';
import Login from './Auth/Login';
import Home from './components/HomeMedico';
import Signin from './Auth/Signin';
import React from 'react';
import {useState, useEffect} from 'react';
function App() {
  const [user, setUser] = useState('');
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipoUser, setTipoUser] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroSenha, setErroSenha] = useState('');
  

  const limparCampos = () => {
    setEmail('');
    setSenha('');
  }

  const limparErros = () => {
    setErroEmail('');
    setErroSenha('');
  }
  const handleLogin = () => {
    limparErros();
    fire.auth().signInWithEmailAndPassword(email, senha)
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
      <Home handleLogout={handleLogout} />
      ) : (
     /* <Login
      email={email} setEmail={setEmail}
      senha={senha} setSenha={setSenha}
      erroEmail={erroEmail}
      erroSenha={erroSenha}
      handleLogin={handleLogin} />
*/
      <Signin
      usuario={usuario} setUsuario={setUsuario}
      email={email} setEmail={setEmail}
      senha={senha} setSenha={setSenha}
      tipoUser={tipoUser} setTipoUser={setTipoUser}
      erroEmail={erroEmail}
      erroSenha={erroSenha}
      handleCadastroUsuario={handleCadastroUsuario} />
      )}
      
      
    </div>
  );
}

export default App;
