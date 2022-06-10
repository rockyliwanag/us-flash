import React from 'react';

function Answer(props) {
    return (
        //map answers
        <div className="m-5 p-5 xl:max-w-3xl mx-auto">
            <h1 className='text-stone-800 font-extrabold text-xl xl:text-2xl mb-5'>Answer</h1>

            {props.showAnswer === true ?  props.answer.map(ans => <h1 className='text-3xl xl:text-4xl'>{ans}</h1>) : null}
            {/* <h1 className="answer">{props.answer}</h1> */}
        </div>
    )
}

export default Answer;