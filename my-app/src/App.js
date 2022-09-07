import logo from './logo.svg';
import './App.css';
import TestComponent from './TestComponent';
import TestFunComponent from './TestFunComponent';
import { findInstance } from 'react-dom-instance';
import * as React from 'react';

function App() {
  var childRef = React.useRef();
  function onButtonClick () {
    const node = document.getElementById('testNode');
    //console.log(findInstance( node ))
    findReact(node);
    console.log(childRef);
   // findInstance( node ).sayHello();  
  }

  function findReact(dom) {
    let key = Object.keys(dom).find(key => key.startsWith("__reactFiber$"));
    let internalInstance = dom[key];
    if (internalInstance == null) return "internalInstance is null: " + key;

    if (internalInstance.return) { // react 16+
        return internalInstance._debugOwner
            ? internalInstance._debugOwner.stateNode
           : internalInstance.return.stateNode;
    } else { // react <16
        return internalInstance._currentElement._owner._instance;
   }
}

  function getDom (dom) {
    let key = Object.keys(dom).find(key=>key.startsWith("__reactInternalInstance$"));
    let internalInstance = dom[key];
    if (internalInstance == null) return null;

    if (internalInstance.return) { // react 16+
        return internalInstance._debugOwner
            ? internalInstance._debugOwner.stateNode
            : internalInstance.return.stateNode;
    } else { // react <16
        return internalInstance._currentElement._owner._instance;
    }
}

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

        <button onClick={onButtonClick} >Click Me</button>
        {/* <TestComponent /> */}
        <TestFunComponent ref={childRef} />
      </header>
    </div>
  );
}

export default App;
