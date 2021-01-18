import React from 'react';

function Question(props) {
    return (
        <>
            <h1>{props.question}</h1>
            {console.log("question: ", props.question)}
        </>
    )
}

export default Question;