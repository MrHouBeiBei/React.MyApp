import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// import Welcome2 from './components/test'

const Welcome = function(props) {
  return <h4 className="test">Hello, {props.name}</h4>;
}

//组合组件
function Combination() {
  return (
    <div>
      <Welcome name="Baby"/>
      <Welcome name="Zyl"/>
    </div>
  )
}

const number = '666'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Welcome name="Sara"/>
        <Combination/>
        <div>{number}</div>
        <div className="pic">
           {/* <img src={require('./assets/zyl.jpg')}/> */}
        </div>
      </div>
    );
  }
}

export default App;
