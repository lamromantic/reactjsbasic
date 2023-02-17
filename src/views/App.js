import logo from './logo.svg';
import './App.scss';
import MyComp from './example/MyComp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <MyComp />
      </header>
    </div>
  );
}

export default App;
