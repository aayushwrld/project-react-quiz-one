import React, { Component } from "react";
import '../../../src/App.css'

export default class Home extends Component {
render() {
    return (
        <>
        <div className="quiz-parent">
            <div className="quiz-main">
                <div className="quiz-question">
                    <div className="quiz-question-1">
                        Question 1
                    </div>
                    <div className="quiz-question-2">
                        1 of 15
                    </div>
                    <div className="quiz-question-3">
                        What are you?
                    </div>
                </div>
                <div className="quiz-options">
                    <button className="quiz-options-1">opt</button>
                    <button className="quiz-options-2">opt</button>
                    <button className="quiz-options-3">opt</button>
                    <button className="quiz-options-4">opt</button>
                </div>
                <div className="quiz-navigate">
                    <button className="quiz-navigate-1">Previous</button>
                    <button className="quiz-navigate-2">Next</button>
                    <button className="quiz-navigate-3">Quit</button>
                </div>
            </div>
        </div>
        </>
    );
}
}