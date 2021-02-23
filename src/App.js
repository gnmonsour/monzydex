import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { copy: 'Hello George' };
    this.alternateString = 'Well I was here long before you';
  }

  hideButton() {
    const btn = document.querySelector('button');
    btn.style.visibility = 'collapse';
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <p>{this.state.copy}</p>
          <button
            onClick={() => {
              this.setState({ copy: this.alternateString });
              this.hideButton();
            }}
          >
            Change Copy
          </button>
        </header>
      </div>
    );
  }
}

export default App;
