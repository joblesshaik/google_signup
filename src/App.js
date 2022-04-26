// import logo from './logo.svg';
import './App.css';
import{Auntentication} from "./firebase"
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  const SignINWitgGoogle=()=>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(Auntentication, provider)
    .then((re)=>{
      console.log(re);
    })
    .catch((err)=>{
      console.log(err);
    })

  }
  return (
    <div className="App">
   <button onClick={SignINWitgGoogle}>click me</button>
    </div>
  );
}

export default App;
