

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import People from './components/People';

function App() {

  return (
    <div className="App">
      <main className="App-main">
        <People />
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;
