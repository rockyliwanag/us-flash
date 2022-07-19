import React from 'react'

const SideBar = (props) => {
  // const answers = localStorage.getItem('userAnswers')
  console.log('SideBar', props.analytics)
  return (
    <div className=''>
        <div>
            <h1 className='text-6xl'>100%</h1>
            <h4>{props.analytics.length} out of 100</h4>
            <br />
            <hr />
             {props.analytics ?
             props.analytics.map( result => {
              return <h4 key={result.id}>Number {result.id} - {result.correctResult.toString()}</h4>
              }
             )

                : null } 
        </div>
    </div>
  )
}

export default SideBar