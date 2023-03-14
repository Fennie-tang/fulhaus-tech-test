import logo from './logo.svg';
import './App.css';
import * as React from "react"

function App() {
  const[messgae, setMessage]= React.useState("no message");
  React.useEffect(()=> {
    fetch("/fetch-message").then((res)=>
    res
    .json()
    .then((data)=> setMessage(data.message))
    .catch((e)=> console.log("got error", e))
    );
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
