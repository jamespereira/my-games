import React, { Component } from 'react';
import * as GamesAPI from './GamesAPI';
import { Link } from 'react-router-dom';
import GameShelf from './GameShelf';


class AddGames extends Component {

    state = {
        term: '',
        searchedGames: [],
        allGames: []
    }

    componentDidMount() {
        GamesAPI.getPage(1).then(response => {
            let games = response.results;
            let newGames = [];

            for (let shelfGame of this.props.shelfGames) {
                games.map(game => {
                    if (game.name === shelfGame.name) {
                        games.splice(games.indexOf(game), 1);
                    }
                })
            }
            games.map(game => game.shelf = 'none')

            newGames = [...this.props.shelfGames, ...games];

            this.setState({ allGames: newGames })
        })
    }

    handleInputChange = (term) => {
        this.setState({ term: term })
        this.searchGame(term);
    }


    searchGame = (query) => {
        if (query) {
            console.log(query)
            let filteredGames = this.state.allGames.filter(game => (
                game.name.toLowerCase().includes(query.toLowerCase())
            ));
            this.setState({ searchedGames: filteredGames })
        }
    }

    render() {
        const { term, allGames, searchedGames } = this.state;

        return (
            <div className="search-games">
                <div className="search-games-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-games-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by game name"
                            value={term}
                            onChange={(event) => this.handleInputChange(event.target.value)}
                        />
                    </div>
                </div>

                <div className="search-games-results">
                    {term && (
                        <ol className="games-grid">
                            <GameShelf title={"search"} games={searchedGames} handleSelectChange={this.props.handleSelectChange} />
                        </ol>
                    )}
                </div>
            </div>
        );
    }
}

export default AddGames;