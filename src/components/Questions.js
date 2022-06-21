import React from 'react';

function Question(props) {
    return (
        <div className="p-5 mx-auto">
            {/* {console.log("Props", props)} */}
            <h1 className='text-stone-800 font-extrabold text-xl xl:text-l mb-2'>Question # <span className='text-red-400'>{props.id}</span></h1>
            <h1 className='text-3xl'>{props.question}</h1>
            <br />

        </div>
    )
}

export default Question;