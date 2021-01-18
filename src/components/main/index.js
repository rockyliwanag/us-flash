import React from 'react';
import data from '../../data/flashcardData';
import Question from '../questions/index';
import Answer from '../answers/index';

const getData = data[Math.floor(Math.random() * data.length)];
class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            id: getData.id,
            question: getData.question,
            answer: getData.answer
        };
        this.handleData = this.handleData.bind(this);
    }

    handleData() {
        const nextData = data[Math.floor(Math.random() * data.length)];
        this.setState(() => {
            return {
                id: nextData.id,
                question: nextData.question,
                answer: nextData.answer
            };

        }); console.log("nextData, ", nextData);
    }

    render() {
        return (
            <div className="flash-card">
                <div className="question">
                    <h1>Question {this.state.id}</h1>
                    <Question question={this.state.question} />{/*question data is passed to question component as props*/}
                </div>
                <div className="answer">
                    <h1>Answer</h1>
                    <Answer answer={this.state.answer} />
                </div>
                <button onClick={this.handleData}>Next</button>
            </div>
        )
    }
}


export default Main;