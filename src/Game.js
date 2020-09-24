import React from 'react';

const Game = (props) => {
    const { shelf, name, released, metacritic, background_image } = props.game ? props.game : '';

    const ratingColour = (score) => {
        let hexRating = '';

        if (score >= 90) hexRating = '#6c3';
        else if (score >= 50 && score < 90) hexRating = '#fc3';
        else if(score < 50 ) hexRating = '#f00';
        else hexRating = 'rgba(0,0,0,0)'
        
        return hexRating;

    }

    const convertDate = (date) => {
        return new Date(date).toLocaleString('default', { month: 'long', year : 'numeric', day : 'numeric'});
    }

    return (
        <div className="game">
            <div className="game-top">
                <div className="game-cover" style={{ width: 128, height: 193, backgroundPosition: 'center', backgroundSize: 'cover', backgroundImage: `url(${background_image})` }}>
                    <div className="game-rating" style={{ background: ratingColour(metacritic) }}>{metacritic}</div>
                </div>
                <div className="game-shelf-changer">
                    <select value={shelf} onChange={(event) => props.handleSelectChange(event, props.game)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyPlaying">Currently Playing</option>
                        <option value="wantToPlay">Want to Play</option>
                        <option value="completed">Completed</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="game-title">{name}</div>
            <div className="game-released">{convertDate(released)}</div>
        </div>
    );
};

export default Game;