import React, {useState} from 'react';
import Input from './InputAnswers'
import CorrAns from './CorrectAnswers'


function Answer(props) {

    const [userAns, setUserAns] = useState(null);
    const [showAns, setShowAns] = useState(props.showAnswer)

    // console.log('counter', props.counter);

    const onchange = (data) => {
        setUserAns(data)
        setShowAns(true)
    }

    const handleWrongData = () => {
        let wrongData = {correctResult:false, userAns:`${userAns}`}
        setShowAns(false)
        return props.userAnswer(wrongData)
    }
    const handleCorrectData = () => {
        let correctData = {correctResult:true, userAns:`${userAns}`}
        setShowAns(false)
        return props.userAnswer(correctData)
    }

    return (
        <div className='p-5'>
            <div>
                <h1 className='text-stone-800 font-extrabold text-xl xl:text-xl mb-5'>Answer</h1>
            </div>
            <div className='flex flex-col '>
                <div className=' w-full self-start mx-auto'>
                    <Input data={userAns} showAnswer={showAns}onchange={(e) => { onchange(e) }}/>
                </div>


                <div className='flex flex-col w-full h-full'>
                    <CorrAns correct={props} data={userAns} show={showAns}/>
                    
                    {showAns ? <div className='flex flex-col lg:flex-row content-between p-5'><hr />
                        <button className='border-red-500 text-red-500 border-2 items-end px-6 p-2 w-1/2 mx-1 rounded-3xl xl:text-sm mb-5 font-semibold hover:bg-red-500 hover:text-white' 
                            onClick={handleWrongData}>Wrong</button>
                        <button className='border-green-500 text-green-500 border-2 items-end px-6 p-2 w-1/2 mx-1  rounded-3xl xl:text-sm mb-5 font-semibold hover:bg-green-500 hover:text-white' 
                            onClick={handleCorrectData}>Right</button>
                    </div> : null}
                </div>
            </div>
        </div>
    )
}

export default Answer;