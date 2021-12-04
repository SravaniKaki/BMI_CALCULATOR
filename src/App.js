import logo from './logo.svg';
import './App.css';
import Main from "./components/main.js"


function App() {
  return (
    <div className="App">  
    <h1 className="Main_head">BMI Calculator</h1>
    <div className="heartBeat">
      <div className="pulse"></div>
    </div>
      <div className ="inApp">
        <Main />
      </div>
    </div>
  );
}

export default App;
