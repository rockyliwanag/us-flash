import React from 'react';

function Results(props) {
    const percentage = Math.round(props.analytics.filter((result) => result.correctResult === true).length/10 * 100).toString()
    const refresh = () => window.location.reload(true)
    return (
        <div className='container mx-auto'>
            <div className='p-5 mt-20 text-center'>
                {percentage >= 60 ? 
                    <h1 className='text-stone-800 font-extrabold text-xl xl:text-3xl mb-2'>Congratulations, you're an American!</h1> 
                    : 
                    <h1 className='text-stone-800 font-extrabold text-xl xl:text-l mb-2'>Try again, you failed.</h1> 
                }
            </div>
            <div className='my-10 px-5'>
                {props.analytics.map((x, i) => <ul><li key={i}><span className="font-semibold text-right">{i +1}</span> - {x.question}</li></ul>)}
            </div>
            <div className='text-center my-10'>
                <button className='rounded-3xl border-1 border-gray-600 bg-gray-400 text-gray-200 font-semibold py-2 px-6 hover:bg-sky-700' onClick={refresh}>Try Again</button>
            </div>
        </div>
    )
}

export default Results;