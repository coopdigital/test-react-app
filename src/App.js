import logo from './logo.svg';
import './App.css';
import Blockquote from '@coopdigital/blockquote';

/**
 * ISSUE: Cannot import file from node_modules src e.g.
 // import Broken from '../node_modules/@coopdigital/blockquote/src/index.mjs';
 * TODO: look into importing files outside of src in CRA
 */
function App() {
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
      <main>
        <Blockquote quote="This is a example quote from blockquote component " citation="dale" quoteLarge />
        <Blockquote quote="This is another example quote that isn't set to large" citation="new citation"/>
      </main>
    </div>
  );
}

export default App;
