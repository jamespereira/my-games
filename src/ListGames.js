import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameShelf from './GameShelf';

class ListGames extends Component {
    render() {

        const shelves = [
            'currentlyPlaying',
            'wantToPlay',
            'completed'
        ]

        return (
            <div className="list-games">
                {/* <div className="list-games-title">
                    <h1>My gameshelf</h1>
                </div> */}
                <div className="list-games-content">
                    {shelves.map(shelf => (
                        <GameShelf key={shelf} title={shelf} games={this.props.games.filter(game => game.shelf === shelf)} handleSelectChange={this.props.handleSelectChange}/>
                    ))}
                </div>
                <Link to="/search" className="open-search">
                    <button>Add a game</button>
                </Link>
            </div>
        );
    }
}

export default ListGames;