import React from 'react';

const Game = ({changeState, points, addPoints, cookie, cookieSpin}) => {
    return (
        <div className="d-flex j-center a-center container">

            <div>
                <img className={cookieSpin ? "spin" : ""} onClick={addPoints} src={cookie} alt=""/>
                <h1 className="mb-50">Points: {points}</h1>
                <button onClick={() => changeState(3)} className="btn mb-50">SHOP</button>
            </div>




        </div>
    );
};

export default Game;