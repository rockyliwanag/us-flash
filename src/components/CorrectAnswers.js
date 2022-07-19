import React from 'react'

const CorrectAnswers = (props) => {

  return (
    <div className='h-full'>
      <div>
          <h1 className='text-gray-800 font-bold'>CORRECT ANSWER</h1>
      </div>

      {!props ? null : (props.show === true ?  props.correct.answer.map(
        (ans, i) => 
          <div key={i} className=''>
            <h1 className='text-sm lg:text-base'>
              {ans}
            </h1>
          </div>
        ) : null
      )}

    </div>
  )
}

export default CorrectAnswers