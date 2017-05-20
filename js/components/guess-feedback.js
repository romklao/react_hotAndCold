import React from 'react';
import {connect} from 'react-redux';

export function GuessFeedback(props) {
    return (
        <div className="feedbackMessage">
            <h2>{props.feedbackMessage}</h2>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    feedbackMessage: state.feedbackMessage
});

export default connect(mapStateToProps)(GuessFeedback);