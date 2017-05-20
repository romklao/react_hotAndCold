const express = require('express');

const app = express();

app.use(express.static('build'));

var state = {
    fewestGuesses : null
}

app.get('/fewest-guesses', function(request, response) {
    console.log('server test');
    response.send({"fewestGuesses": state.fewestGuesses});
});

app.post('/fewest-guesses/:count', function(request, response) {
    var newFewestGuesses = parseInt(request.params.count);
    console.log('post fewest guesses: ', newFewestGuesses);
    if (state.fewestGuesses == null ||
            newFewestGuesses < state.fewestGuesses) {
        state.fewestGuesses = newFewestGuesses;
    }
    response.send({"fewestGuesses": state.fewestGuesses});

});

app.listen(process.env.PORT || 8080, process.env.IP);







