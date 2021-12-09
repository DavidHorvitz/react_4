import logo from './logo.svg';
import './App.css';
import Welcome from './Components/Welcome';
import SendObject from './Components/SendObject';


function App() {
  const user = {
    name: 'Moshe',
    lastName:'Horvitz',
    age: 10,
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome  nam="Moshe" pre="Mr.."/>
        <SendObject user={user}/>
      </header>
   
    </div>
  );
}

export default App;
