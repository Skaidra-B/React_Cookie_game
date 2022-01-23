import React from 'react';

const Menu = ({changeState}) => {
    return (
        <div className="d-flex j-center a-center container">
            <button onClick={() => changeState(2)} className="btn start-btn">START GAME</button>
        </div>
    );
};

export default Menu;