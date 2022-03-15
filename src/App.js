import './App.css';
import { firebase, auth } from './firebase/db'
function App() {
  const handleClickButtonLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
  const result = await auth.signInWithPopup(provider);
  };
  
  return (
    <div className="App">
      <main>
        <button onClick={handleClickButtonLogin}>Login</button>
      </main>
    </div>
  );
}

export default App;
