import React, { Component } from 'react';
import './App.css';
// import { monsters } from './sharedData';
import CardList from './component/card-list/card-list-component';
import { SearchBox } from './component/search-box/search-box.component';

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
    this.setState({ searchVal: ev.target.value });
  }

  render() {
    const { monsters, searchVal } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchVal.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='Search Monsters'
          handleChange={(ev) => this.doSearch(ev)}
          count={filteredMonsters.length}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
