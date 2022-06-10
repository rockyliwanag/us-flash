import React from 'react';
import data from '../data/flashcardData';
import Question from '../components/Questions';
import Answer from '../components/Answers';

const getData = data[Math.floor(Math.random() * data.length)];
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            id: getData.id,
            question: getData.question,
            answer: getData.answer,
            showAnswer: false
        };
        this.handleData = this.handleData.bind(this);
    }

    handleData() {
        const nextData = data[Math.floor(Math.random() * data.length)];
        this.setState(() => {
            return {
                id: nextData.id,
                question: nextData.question,
                answer: nextData.answer,
            };
        });
        setTimeout(() => {
            this.setState({
                showAnswer: true
            });
        }, 5000);
        console.log(this.state.showAnswer)
        this.setState({
            showAnswer: false
        });
        console.log(this.state.showAnswer)
    }

    render() {
        return (
            <div className="p-5 flex flex-col">
                <div>
                    <Question question={this.state.question} id={this.state.id} />{/*question data is passed to question component as props*/}
                </div>
                <div>
                    <Answer answer={this.state.answer} showAnswer={this.state.showAnswer} />
                </div>
                <div>
                    <div className='m-5 p-5 xl:max-w-3xl mx-auto'>
                        <button className='bg-blue-500 text-white items-end px-6 p-2 mx-auto rounded-xl xl:text-2xl mb-5' onClick={this.handleData}>Next</button>
                    </div>
                </div>

            </div>
        )
    }
}


export default Main;