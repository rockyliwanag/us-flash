import React from 'react'

const InputAnswers = () => {
  return (
    <div className='w-full'> 
        <form className='flex flex-col lg:pr-5'>
          
            <textarea className='p-2' name='useranswer' rows='10' placeholder='Type answer here...'></textarea>
            <button className='bg-blue-500 text-white items-end px-6 p-2 ml-auto rounded-2xl xl:text-sm' type='submit' name='send' >Submit</button>
        </form>
    </div>
  )
}

export default InputAnswers