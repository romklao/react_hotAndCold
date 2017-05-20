import React from 'react';

import Header from './header';
import GuessFeedback from './guess-feedback';
import GuessForm from './guess-form';
import GuessCount from './guess-count';
import GuessList from './guess-list';

export default function App(props) {
    return (
        <div className="game">
            <Header />
            <div className="guessContainer">
                <GuessFeedback />
                <div className="guessForm">
                    <GuessForm />
                    <GuessCount />
                </div>
                <GuessList />
            </div>
        </div>
    )
}





