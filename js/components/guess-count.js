import React from 'react';
import {connect} from 'react-redux';

export function GuessCount(props) {
    let count = 0;
    if (props.guesses) {
        count = props.guesses.length;
    }
    return (
        <p className="guessCount">Guess# <span className="count">{count}</span>!</p>
    )
}

const mapStateToProps = (state, props) => {
    return {
        guesses: state.guesses
    };
};

export default connect(mapStateToProps)(GuessCount);