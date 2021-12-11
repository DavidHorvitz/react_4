import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import SendObject from './Components/SendObject';
import CountButton from './Components/CountUp';


function App() {
  const rivi = {
    name: 'rivi',
    lastName:'Horvitz',
    age: 25,
    };
  const david = {
    name: 'david',
    lastName:'Horvitz',
    age: 24,
    };
  const shri = {
    name: 'shri',
    lastName:'Horvitz',
    age: 5,
    };
  return (
    <div className="App">
        <CountButton/>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome  nam="Moshe" pre="Mr.."/>
        <SendObject user={rivi}/>
        <SendObject user={david}/>
        <SendObject user={shri}/>

      </header>
   
    </div>
  );
}

export default App;
