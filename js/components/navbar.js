import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export function Navbar(props) {
    var newGame = event => {
        event.preventDefault();
        props.dispatch(actions.newGame());
    };

    var showInstruction = event => {
        event.preventDefault();
        props.dispatch(actions.showInstruction());
    };

    return (
        <nav className="navTop">
            <ul className="navList">
                <li className="listLeft">
                    <a href="#" onClick={showInstruction} className="linkList whatLink">WHAT?</a>
                </li>
                <li className="listRight">
                    <a href="#" onClick={newGame} className="linkList newGameLink">+ NEW GAME</a>
                </li>
            </ul>
        </nav>
    )
}

export default connect()(Navbar);


