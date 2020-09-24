import React from 'react';
import Game from './Game';

const GameShelf = (props) => {

    let updatedTitle = ''
    switch (props.title) {
        case 'currentlyPlaying': updatedTitle = 'Currently Playing';
            break;
        case 'wantToPlay': updatedTitle = 'Want To Play';
            break;
        case 'completed': updatedTitle = 'Completed';
            break;
        default: updatedTitle = '';
    }

    return (
        <div className="gameshelf">
            <h2 className="gameshelf-title">{updatedTitle}</h2>
            <div className="gameshelf-games">
            <ol className="games-grid">
                {props.games.map(game => (
                    <li key={game.id}>
                        <Game game={game} handleSelectChange={props.handleSelectChange}/>
                    </li>
                ))}
            </ol>
            </div>
        </div>
    );
};

export default GameShelf;