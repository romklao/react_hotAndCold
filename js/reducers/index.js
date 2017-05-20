import * as actions from '../actions/index';

const initialState = {
    correctAnswer : Math.floor(Math.random() * 100),
    guesses : [],
    fewestGuesses : null,
    feedbackMessage: "Make your Guess!",
    showInstruction: false,
};

export const gameReducer = function(state, action) {
    var inputNumber = parseInt(action.number); // Used parseInt to converse string to integer
    var fewestGuesses;

    state = state || initialState;

    if (action.type === actions.NEW_GAME) {
        var correctAnswer = Math.floor(Math.random() * 100);
        state = Object.assign({}, 
            initialState, {
                correctAnswer: correctAnswer, 
                fewestGuesses: state.fewestGuesses
            }
        );
        return state;

    } else if (action.type === actions.GUESS_NUMBER) {
        var difference = Math.abs(inputNumber - state.correctAnswer);
        var feedbackMessage;

        if (state.guesses.indexOf(inputNumber) >= 0) {
            feedbackMessage = "You guessed this number already!"
            state = Object.assign({},
                state, {
                feedbackMessage: feedbackMessage, 
                }
            );
            return state; 

        } else if (inputNumber < 0 || inputNumber > 100) {
            feedbackMessage = "Enter a number 0 to 100!"
            state = Object.assign({},
                state, {
                feedbackMessage: feedbackMessage, 
                }
            );
            return state; 

        } else if (difference > 40) {
            feedbackMessage = "Very cold!";

        } else if (difference > 25 && difference <= 40) {
            feedbackMessage = "Cold!";

        } else if (difference > 15 && difference <= 25) {
            feedbackMessage = "Warm!";

        } else if (difference > 5 && difference <= 15) {
            feedbackMessage = "Kinda hot!";

        } else if (difference >= 1 && difference <= 5) {
            feedbackMessage = "Hot!";

        } else if (difference == 0) {
            feedbackMessage = "You got it!";
                
        } else {
            feedbackMessage = "Enter a number 0 to 100!";
            state = Object.assign({},
                state, {
                feedbackMessage: feedbackMessage, 
                }
            );
            return state; 
        }

        state = Object.assign({},
            state, {
                feedbackMessage: feedbackMessage, 
                guesses: state.guesses.concat(inputNumber),
                fewestGuesses: state.fewestGuesses
            }
        );
        return state;

    } else if (action.type === actions.SHOW_INSTRUCTION){

        state = Object.assign({}, 
            state, {
                showInstruction: true
            }
        );
        return state;

    } else if (action.type === actions.HIDE_INSTRUCTION) {

        state = Object.assign({}, 
            state, {
                showInstruction: false
            }
        );
        return state;

    } else if (action.type === actions.FETCH_FEWEST_GUESSES_SUCCESS) {
        state = Object.assign({},
            state, {
                fewestGuesses: action.fewestGuesses
            }
        );
        return state;

    } else if (action.type === actions.FETCH_FEWEST_GUESSES_ERROR) {
        state = Object.assign({},
            state, {
                fewestGuesses: action.error
            }
        );
        return state;

    } else if (action.type === actions.POST_FEWEST_GUESSES_SUCCESS) {
        state = Object.assign({},
            state, {
                fewestGuesses: action.fewestGuesses
            }
        );
        return state;
        
    } else if(action.type === actions.POST_FEWEST_GUESSES_ERROR) {
        state = Object.assign({},
            state, {
                fewestGuesses: action.error
            }
        );
        return state;
    }
    console.log('state2', state)
    return state;
};







