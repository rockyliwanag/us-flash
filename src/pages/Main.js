import React, { useState, useEffect } from 'react';
import datas from '../data/flashcardData';
import Question from '../components/Questions';
import Answer from '../components/Answers';
import SideBar from '../components/SideBar';

let newDataSet = []
let sideData = []

const Main = () => {
    
    const [id, setId] = useState('')
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [showAns, setShowAns] = useState()
    const [userAns, setUserAns] = useState('')
    
    console.log('Render 1', newDataSet)
    newDataSet = datas.sort(() => 0.5 - Math.random())

    useEffect(() => {
        let newData = newDataSet.pop()
        // if (!mounted.current) {
            setId(newData.id)
            setQuestion(newData.question)
            setAnswer(newData.answer)
            setShowAns(false)
            sideData = [...sideData]
            console.log('Render 2', newDataSet)
        // } else {

 
        // }
    }, []);

    useEffect(() => {
        let nextData = newDataSet.pop()
        setId(nextData.id)
        setQuestion(nextData.question)
        setAnswer(nextData.answer)
        setShowAns(false)
            console.log('Render 3',newDataSet)
    },[userAns])
        
    // const getData = () => {
    //     let qaData = newDataSet.pop()
    //     return qaData
    // }
    
    // Function to add user answers to storeAnswers variable array.
    const userAnswer = (userData) => {
        let newObj = {
            id,
            question,
            answer,
            userInput : userData.userAns,
            correctResult: userData.correctResult
        }
        setUserAns(newObj)
        sideData = [...sideData, newObj]
        console.log('Answer, ', newDataSet)
    }

    return (
        <div className=' bg-slate-200 flex-grow'>
            <div className='flex flex-col-reverse justify-end lg:flex-row h-full p-5'>
                <div className="flex flex-col lg:w-screen lg:h-full items-start lg:mr-3 lg:ml-60 mb-5 lg:mb-0">
                    <div className='border-gray-100 bg-gray-100 border-2 w-full h-60 rounded-xl shadow-lg mb-7 items-start' /*style={{width:'48rem', height:'20rem'}}*/>
                        <Question question={question} id={id} />{/*question data is passed to question component as props*/}
                    </div>
                    <div className='border-gray-100 bg-gray-100 border-2 w-full h-full rounded-xl shadow-lg'>
                        <Answer id={id} answer={answer} showAnswer={showAns} userAnswer={(e) => { userAnswer(e) }}/>
                    </div>
                </div>
                <div className='mb-5 lg:w-1/3 lg:mb-0 lg:ml-2 lg:mr-60'>
                    <div className='border-gray-100 bg-gray-100 border-2 h-full lg:ml-0 rounded-xl p-5 shadow-lg'>
                        <SideBar analytics={sideData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;