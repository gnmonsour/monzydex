import React, { Component } from 'react';
import './App.css';
// import { monsters } from './sharedData';

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [] };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((e) => {
        console.log('error on fetch');
      });
  }

  hideButton() {
    const btn = document.querySelector('button');
    btn.style.visibility = 'collapse';
  }
  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster, idx) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
