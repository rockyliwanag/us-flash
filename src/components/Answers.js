import React, {useState} from 'react';
import Input from './InputAnswers'
import CorrAns from './CorrectAnswers'


function Answer(props) {

    const [userAns, setUserAns] = useState(null);
    const [showAns, setShowAns] = useState(props.showAnswer)

    const onchange = (data) => {
        setUserAns(data)
        setShowAns(true)
        // console.log('answer data: ', data)
    }

    const handleWrongData = () => {
        let wrongData = {correctResult:false, userAns:`${userAns}`}
        setShowAns(false)
        console.log('Wrong: ', JSON.stringify(wrongData))
        return props.userAnswer(wrongData)
    }
    const handleCorrectData = () => {
        let correctData = {correctResult:true, userAns:`${userAns}`}
        setShowAns(false)
        console.log('Right: ', correctData)
        return props.userAnswer(correctData)
    }

    return (
        <div className="p-5">
            <div>
                <h1 className='text-stone-800 font-extrabold text-xl xl:text-xl mb-5'>Answer</h1>
            </div>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:w-1/2 w-full self-start mx-auto'>
                    <Input data={userAns} showAnswer={showAns}onchange={(e) => { onchange(e) }}/>
                </div>

                <hr />

                <div className='lg:w-1/2 w-full h-full px-5 lg:border-l-2'>
                    <CorrAns correct={props} data={userAns} show={showAns}/>
                    {showAns ? <div className='p-5 xl:max-w-3xl mx-auto'>
                        {/*when clicked, question id saved and a false flag for wrong answer.*/}
                        <button className='border-red-500 text-red-500 border-2 items-end px-6 p-2 mx-auto rounded-3xl xl:text-sm mb-5' onClick={handleWrongData}>Wrong</button>
                        {/*when clicked, question id saved and true flag for correct answer*/}
                        <button className='border-green-500 text-green-500 border-2 items-end px-6 p-2 mx-auto rounded-3xl xl:text-sm mb-5' onClick={handleCorrectData}>Right</button>
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default Answer;