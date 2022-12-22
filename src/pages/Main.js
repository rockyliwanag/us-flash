import React, { useState, useEffect } from 'react';
import datas from '../data/flashcardData';
import Question from '../components/Questions';
import Answer from '../components/Answers';
import SideBar from '../components/SideBar';
import Results from '../components/Results';

let newDataSet = []
let analytics = []

const Main = () => {
    const [id, setId] = useState('')
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [showAns, setShowAns] = useState()
    const [showResults, setResults] = useState(false)
    const [newData, setNewData] = useState({})
    
    //initialize first 10 Q&A
    useEffect(() => {
        newDataSet = datas.sort(() => 0.5 - Math.random()).slice(0,11)
        setNewData(newDataSet.pop())
    }, []);
    
    // console.log('first dataSet', newData)

   
    useEffect(() => {
        if(analytics.length < 10){
            setId(newData.id)
            setQuestion(newData.question)
            setAnswer(newData.answer)
            setShowAns(false)
        } else {
            setResults(true)

            console.log('END')
        }
    }, [newData.id, newData.question, newData.answer])
  
    
    // Function to add user answers to analytics variable array.
    const userAnswer = (userData) => {
        if(analytics.length < 10) 
        {let newObj = {
            id,
            question,
            answer,
            userInput : userData.userAns,
            correctResult: userData.correctResult
        }
        analytics = [...analytics, newObj]
        setNewData(newDataSet.pop())} else {
            setId('')
            setQuestion('')
            setAnswer('')
            setShowAns(false)
        };
    }

    return (
        <div className=' bg-slate-200 flex-grow'>
            { !showResults ? 
            <div className='flex flex-col-reverse justify-end lg:flex-row h-full p-5'>
                <div className='flex flex-col lg:w-screen lg:h-full items-start lg:mr-3 lg:ml-60 mb-5 lg:mb-0'>
                    <div className='border-gray-100 bg-gray-100 border-2 w-full h-60 rounded-xl shadow-lg mb-7 items-start'>
                        <Question question={question} id={id} />
                    </div>
                    <div className='border-gray-100 bg-gray-100 border-2 w-full h-full rounded-xl shadow-lg'>
                        <Answer id={id} answer={answer} showAnswer={showAns} counter={analytics.length} userAnswer={(e) => { userAnswer(e) }}/>
                    </div>
                </div>
                <div className='mb-5 lg:w-1/3 lg:mb-0 lg:ml-2 lg:mr-60'>
                    <div className='border-gray-100 bg-gray-100 border-2 h-full lg:ml-0 rounded-xl p-5 shadow-lg'>
                        <SideBar analytics={analytics}/>
                    </div>
                </div>
            </div> :
            <div className='border-slate-900'>
                <Results analytics={analytics}/>
            </div> 
            }
        </div>
    )
}

export default Main;