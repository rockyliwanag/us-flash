import React from 'react';

function Answer(props) {
    return (
        <>
            <h1> {props.answer}</h1>
            {console.log(props.answer)}
        </>
    )
}

export default Answer;