import React from 'react'

const SideBar = (props) => {
  const percentage = Math.round(props.analytics.filter((result) => result.correctResult === true).length/props.analytics.length * 100).toString()
  const correctAns = (x) => props.analytics.filter((result) => result.correctResult === x).length
 
  return (
    <div className='flex lg:flex-col space-x-10 lg:space-x-0 justify-center'>
        <div className='text-center'>
          <h1 className='text-6xl font-bold'>{isNaN(percentage) ? 0 : percentage }%</h1>
          <h4 className='text-stone-500'>{props.analytics.length} out of 10</h4>
        </div>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-red-500'>{correctAns(false)}</h1>
          <h4 className='text-stone-500'>Wrong</h4>
        </div>
        <div className='text-center'>
          <h1 className='text-6xl font-bold text-green-500'>{correctAns(true)}</h1>
          <h4 className='text-stone-500'>Correct</h4>
        </div>
        <hr />
        <div className='hidden lg:block'>
          <div className='h-5/6 overflow-y-scroll'>
            {props.analytics ?
              props.analytics.map( result => {
                return <div key={result.id} className=''>{result.correctResult ? <div className='font-bold text-green-500'> Question {result.id}</div> : <div className='font-bold text-red-500'> Question {result.id}</div>}</div>
              })
            : null } 

          </div>
        </div>
    </div>
  )
}

export default SideBar