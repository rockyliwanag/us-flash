import React from 'react';

function Question(props) {
    return (
        <div className="m-5 p-5 xl:max-w-3xl mx-auto">
            <h1 className='text-stone-800 font-extrabold text-xl xl:text-2xl mb-5'>Question # <span className='text-red-400'>{props.id}</span></h1>
            <h1 className='text-3xl xl:text-4xl'>{props.question}</h1>
            <br />

        </div>
    )
}

export default Question;