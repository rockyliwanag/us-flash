import React from 'react'

const SideBar = (props) => {
  // const answers = localStorage.getItem('userAnswers')
  console.log('SideBar', props.analytics)

  const correctAns = Math.round(props.analytics.filter((result) => result.correctResult === true).length/props.analytics.length * 100).toString()
  console.log('first', correctAns)
  return (
    <div className=''>
        <div>
            <h1 className='text-6xl'>{isNaN(correctAns) ? 0 : correctAns }%</h1>
            <h4>{props.analytics.length} out of 100</h4>
            <br />
            <hr />
            {props.analytics ?
              props.analytics.map( result => {
                return <div div key={result.id} className=''> Question {result.id} - {result.correctResult ? 'Correct' : 'Wrong'}</div>
              })
            : null } 
        </div>
    </div>
  )
}

export default SideBar