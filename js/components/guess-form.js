
import React from 'react';
import {connect} from 'react-redux';

import * as actions from '../actions/index';
import store from '../store';

export class GuessForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitGuess = this.submitGuess.bind(this);
    }
    
    submitGuess(event) {
        event.preventDefault();
        var addNumber = this.addNumberInput.value;
        this.addNumberInput.value = '';
        this.props.dispatch(actions.guessNumber(addNumber));

        if (parseInt(addNumber) === this.props.correctAnswer) {
            let fewestGuesses = this.props.guessCount + 1; 
            this.props.dispatch(
                actions.postFewestGuesses(fewestGuesses)
            ).then(() => 
                this.props.dispatch(
                    actions.fetchFewestGuesses()
                )
            )
        }
    }

    render() {
        console.log('this.props.fewestGuesses', this.props.fewestGuesses);
        return (
            <div>
                <form onSubmit={this.submitGuess}>
                    <input type="text" ref={element => this.addNumberInput = element} placeholder="Enter your Guess" className="guessInput"/>
                    <input type="submit" name="submit" value="Guess" className="guessButton"/>
                </form> 
                <span className="showFewest">Fewest Guesses: {this.props.fewestGuesses}</span>
            </div>
        );
    };
};

const mapStateToProps = (state, props) => {
    return {
        guessCount: state.guesses.length,
        correctAnswer: state.correctAnswer,
        fewestGuesses: state.fewestGuesses
    };
};

export default connect(mapStateToProps)(GuessForm);


