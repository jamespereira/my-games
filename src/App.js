import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Base from './Base';

import ListGames from './ListGames';
import AddGames from './AddGames';

class App extends Component {

  state = {
    games: []
  }

  componentDidMount() {
    this.ref = Base.syncState('games', {
      context: this,
      state: 'games',
      asArray: true
    });
  }

handleShelfUpdate = (event, game) => {
  const shelf = event.target.value;
  let newGames = [];

  game.shelf === 'none' ? newGames = [...this.state.games, game] : newGames = [...this.state.games] ;
  game.shelf = shelf;

  this.setState({ games : newGames })
}

  render() {
    return (
      <div className="App">
      <Route exact path="/my-games/" render={() => (
        <ListGames games={this.state.games} handleSelectChange={this.handleShelfUpdate} />
      )} />
      <Route exact path="/my-games/search" render={() => (
        <AddGames shelfGames={this.state.games} handleSelectChange={this.handleShelfUpdate} />
      )} />
      </div>
    );
  }
}

export default App;
