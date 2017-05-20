import React from 'react';
import {connect} from 'react-redux';

export function GuessList(props) {
    let guesses = [];
    if (props.guesses) {
        guesses = props.guesses.map(function(guess, index) {
            return (
                <span key={index} className="guessList">
                    {guess}
                </span>
            );
        });
    }

    return (
        <p className="guessListBox">
            {guesses}
        </p>
    );

};
const mapStateToProps = (state, props) => {
    return {
        guesses: state.guesses
    };
};

export default connect(mapStateToProps)(GuessList);


