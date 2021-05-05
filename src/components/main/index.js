import React from 'react';
import data from '../../data/flashcardData';
import Question from '../questions/index';
import Answer from '../answers/index';
import './style.css';

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
            <div className="flash-card">
                <div className="question">
                    <Question question={this.state.question} id={this.state.id} />{/*question data is passed to question component as props*/}
                </div>
                <div className="answer">
                    <Answer answer={this.state.answer} showAnswer={this.state.showAnswer} />
                </div>

                {/* {this.state.showAnswer === false ? <button onClick={this.handleData}>Next</button> : null} */}
                <button onClick={this.handleData}>Next</button>

            </div>
        )
    }
}


export default Main;