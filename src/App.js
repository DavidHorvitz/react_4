// import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import SendObject from './Components/SendObject';
import CountButton from './Components/CountUp';
import ShowHover from './Components/ShowHover';
import CountDown from './Components/CountDown';

function App() {
  const rivi = {
    name: 'rivi',
    lastName:'Horvitz',
    age: 25,
    id:3435,

    };
  const david = {
    name: 'david',
    lastName:'Horvitz',
    age: 24,
    id:34335,
    };
  const shri = {
    name: 'shri',
    lastName:'Horvitz',
    age: 5,
    id:345,
    };
  return (
    <div className="App">
      
       
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <CountDown num={5}/>
        <ShowHover/>
          <CountButton/>
        <Welcome  nam="Moshe" pre="Mr.."/>
        <SendObject user={rivi}/>
        <SendObject user={david}/>
        <SendObject user={shri}/>

      </header>
   
    </div>
  );
}

export default App;
