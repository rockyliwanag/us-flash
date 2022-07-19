import React from 'react';

const InputAnswers = (props) => {

  const handleSubmit = (e) => {
    props.onchange(e.target[0].value)
    // console.log('submit',e)
    e.preventDefault()
  }
  console.log('input',props)
  return (
    <div className='w-full'> 
      {!props.showAnswer ?
        <form className='flex flex-col lg:pr-5' onSubmit={handleSubmit}>
          <textarea className='p-2 mb-4 lg:mb-8 lg:h-96' name='useranswer' rows='10' placeholder='Type answer here...' style ={{resize: 'none'}}></textarea>
          <button className='bg-blue-500 text-white items-end px-6 p-2 ml-auto rounded-2xl xl:text-sm' type='submit' name='send'>Submit</button>
        </form> :
        <>        
          <h1>YOUR ANSWER</h1>
          <h1>{props.data}</h1>
        </>
      }

    </div>
  )
}

export default InputAnswers