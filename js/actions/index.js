import 'isomorphic-fetch';

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = number => ({
    type: GUESS_NUMBER,
    number: number
});

export const SHOW_INSTRUCTION = 'SHOW_INSTRUCTION';
export const showInstruction =  () => ({
    type: SHOW_INSTRUCTION,
});

export const HIDE_INSTRUCTION = 'HIDE_INSTRUCTION';
export const hideInstruction =  () => ({
    type: HIDE_INSTRUCTION,
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
    type: NEW_GAME,
});

export const fetchFewestGuesses = () => dispatch => {
    var url = '/fewest-guesses';
    return fetch(url).then(response => {
        console.log('response', response.body)
        if (response.status < 200 || response.status >= 300) {
            var error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        dispatch(fetchFewestGuessesSuccess(data.fewestGuesses))
    )
    .catch(error =>
        dispatch(fetchFewestGuessesError(error))
    );
};

export const FETCH_FEWEST_GUESSES_SUCCESS = 'FETCH_FEWEST_GUESSES_SUCCESS';
export const fetchFewestGuessesSuccess = (fewestGuesses) => ({
    type: FETCH_FEWEST_GUESSES_SUCCESS,
    fewestGuesses: fewestGuesses
});

export const FETCH_FEWEST_GUESSES_ERROR = 'FETCH_FEWEST_GUESSES_ERROR';
export const fetchFewestGuessesError = (error) => ({
    type: FETCH_FEWEST_GUESSES_ERROR,
    error: error
});

export const postFewestGuesses = fewestGuesses => dispatch => {
    var url = `/fewest-guesses/${fewestGuesses}`;
    return fetch(url, {
        method: 'POST'
    }).then(response => {
        if (response.status < 200 || response.status >= 300) {
            var error = new Error(response.statusText)
            error.response = response
            throw error;
        }
        return response;
    })
    .then(response => response.json())
    .then(data =>
        dispatch(postFewestGuessesSuccess(data.fewestGuesses))
    )
    .catch(error =>
        dispatch(postFewestGuessesError(error))
    );
};

export const POST_FEWEST_GUESSES_SUCCESS = 'POST_FEWEST_GUESSES_SUCCESS';
export const postFewestGuessesSuccess = (fewestGuesses) => ({
    type: POST_FEWEST_GUESSES_SUCCESS,
    fewestGuesses: fewestGuesses
});

export const POST_FEWEST_GUESSES_ERROR = 'POST_FEWEST_GUESSES_ERROR';
export const postFewestGuessesError = (error) => ({
    type: POST_FEWEST_GUESSES_ERROR,
    error: error
});







