import React from 'react'

const CorrectAnswers = (props) => {
  return (
    <div className='h-full'>
        {console.log("CORR:", props.props.answer)}
        <div>
            <h1 className='text-gray-800 font-bold'>CORRECT ANSWER</h1>
        </div>
        {props.props.showAnswer === true ?  props.props.answer.map(ans => 
        <div>
          <h1 className='text-sm lg:text-base'>
            {ans}
          </h1>
        </div>) : null}
        <div className='p-5 xl:max-w-3xl mx-auto'>
            <button className='bg-blue-500 text-white items-end px-6 p-2 mx-auto rounded-2xl xl:text-sm mb-5' /*onClick={handleData}*/>Next</button>
        </div>
    </div>
  )
}

export default CorrectAnswers