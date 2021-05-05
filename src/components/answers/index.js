import React from 'react';
import './style.css';

function Answer(props) {
    return (
        //map answers
        <div className="answers">
            <h1>Answer</h1>

            {props.showAnswer === true ? <h1> {props.answer}</h1> : null}
            {/* <h1 className="answer">{props.answer}</h1> */}
        </div>
    )
}

export default Answer;