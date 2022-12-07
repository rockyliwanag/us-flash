import React from 'react'

const CorrectAnswers = (props) => {

  return (
    <div className=''>
      {!props ? null : props.show === true ? 
        <div className=''>
            <h1 className='text-gray-800 font-bold italic underline underline-offset-8 my-4'>CORRECT ANSWER</h1>
        </div> : null}
      <div className='h-36 overflow-auto'>
        {!props ? null : (props.show === true ?  props.correct.answer.map((ans, i) => 
          <li key={i} className='text-sm lg:text-base'>{ans}</li>
          ) : null
        )}
      </div>
    </div>
  )
}

export default CorrectAnswers