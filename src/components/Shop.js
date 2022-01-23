import React from 'react';

const Shop = ({changeState, upgrade, points}) => {
    return (
        <div className="d-flex j-center a-center container">
            <div className="d-flex column">
                <h1 className="mb-50">My Points: {points}</h1>
                <button onClick={() => changeState(2)} className="btn mb-50">GO BACK</button>
                <button className="btn" onClick={() => upgrade(1)}>Click 2x (price 200)</button>
                <button className="btn" onClick={() => upgrade(2)}>Click 5x (price 500)</button>
                <button className="btn" onClick={() => upgrade(3)}>Click 10x (price 1000)</button>
                <button className="btn" onClick={() => upgrade(4)}>Change Cookie (price 400)</button>
                <button className="btn" onClick={() => upgrade(5)}>Change Background (price 300)</button>
                <button className="btn" onClick={() => upgrade(6)}>Cookie spin (price 600)</button>
            </div>
        </div>
    );
};

export default Shop;