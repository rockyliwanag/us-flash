import React from 'react';
import './style.css';

function Question(props) {
    return (
        <div className="questions">
            <h1>Question {props.id}</h1>
            <h1>{props.question}</h1>
            <br />

        </div>
    )
}

export default Question;