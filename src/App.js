import React, { Component } from 'react';
import './App.css';
// import { monsters } from './sharedData';
import CardList from './component/card-list/card-list-component';

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [], searchVal: '' };
    this.doSearch = this.doSearch.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
      .catch((e) => {
        console.log('error on fetch');
      });
  }

  doSearch(ev) {
    this.setState({ searchVal: ev.target.value }, () =>
      console.log(this.state.searchVal)
    );
  }

  render() {
    return (
      <div className='App'>
        <input
          type='search'
          placeholder='search monsters'
          onChange={(ev) => this.doSearch(ev)}
        />
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
