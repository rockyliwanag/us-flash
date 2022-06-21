import React from 'react';
import Input from './InputAnswers'
import CorrAns from './CorrectAnswers'

function Answer(props) {
    return (
        //map answers
        <div className="p-5">
            <div>
                <h1 className='text-stone-800 font-extrabold text-xl xl:text-xl mb-5'>Answer</h1>
            </div>
            <div className='flex flex-col lg:flex-row '>
                <div className='lg:w-1/2 w-full self-start mx-auto'>
                    <Input/>
                </div>
                <div>
                    
                </div>
                <hr />

                <div className='lg:w-1/2 w-full h-full px-5 border-l-2'>
                    <CorrAns props={props}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Answer;