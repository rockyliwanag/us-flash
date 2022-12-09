import React from 'react';

const InputAnswers = (props) => {

  const handleSubmit = (e) => {
    props.onchange(e.target[0].value)
    e.preventDefault()
  }
  return (
    <div className='w-full'> 
      {!props.showAnswer ?
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <textarea className='p-2 mb-4 lg:mb-8 lg:h-96 caret-blue-500' name='useranswer' rows='10' placeholder='Type answer here...' style ={{resize: 'none'}}></textarea>
          <button className='bg-blue-500 text-white items-end px-6 p-2 ml-auto rounded-2xl xl:text-sm' type='submit' name='send'>Submit</button>
        </form> :
        <div className='h-36'>        
          <h1 className='text-gray-800 font-bold italic underline underline-offset-8 my-4'>YOUR ANSWER</h1>
          <h1>{props.data}</h1>
        </div>
      }

    </div>
  )
}

export default InputAnswers