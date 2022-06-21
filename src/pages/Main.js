import React, { useState, useEffect } from 'react';
import data from '../data/flashcardData';
import Question from '../components/Questions';
import Answer from '../components/Answers';
import SideBar from '../components/SideBar';

const getData = data[Math.floor(Math.random() * data.length)];

const Main = () => {

    const [id, setId] = useState('')
    const [question, setQuestion] = useState('')
    const [answer, setAnswer] = useState('')
    const [showAns, setShowAns] = useState()

    useEffect(()=>{
        setId(getData.id)
        setQuestion(getData.question)
        setAnswer(getData.answer)
        setShowAns(true)   
    }, [])

    return (
        <div className=' bg-slate-200 flex-grow'>
            <div className='flex flex-col lg:flex-row h-full p-5'>
                <div className="flex flex-col lg:w-screen lg:h-full items-start lg:mr-3 mb-5 lg:mb-0">
                    <div className='border-gray-100 bg-gray-100 grow-0 border-2 w-full h-60 rounded-xl shadow-lg mb-7 items-start' /*style={{width:'48rem', height:'20rem'}}*/>
                        <Question question={question} id={id} />{/*question data is passed to question component as props*/}
                    </div>
                    <div className='border-gray-100 bg-gray-100 grow border-2 w-full h-full rounded-xl shadow-lg'>
                        <Answer answer={answer} showAnswer={showAns} />
                    </div>
                </div>
                <div className='lg:ml-2'>
                    <div className='border-gray-100 bg-gray-100 border-2 h-full lg:ml-0 rounded-xl p-5 shadow-lg'>
                        <SideBar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;