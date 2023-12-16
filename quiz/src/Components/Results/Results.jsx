import React, { Component } from 'react'
import '../../../src/App.css'

export default class Results extends Component {
  render() {
    return (
        <div className="results-parent">
                <div className="results-head">
                    Results
                </div>
            <div className="results-main">
                <div className="results-response">
                    You need to improve!
                </div>
                <div className="results-score">
                    Your score is 20%
                </div>
                <div className="results-details">
                    <div className="results-details-1">
                        <div className="results-details-1a">
                            Total. Number of Questions
                        </div>
                        <div className="results-details-1b">
                            15
                        </div>
                    </div>
                    <div className="results-details-2">
                    <div className="results-details-2a">
                            Number of Attempted Questions
                        </div>
                        <div className="results-details-2b">
                            9
                        </div>
                    </div>
                    <div className="results-details-3">
                    <div className="results-details-3a">
                            Number of correct answers
                        </div>
                        <div className="results-details-3b">
                            3
                        </div>
                    </div>
                    <div className="results-details-4">
                    <div className="results-details-4a">
                            Number of wrong answers
                        </div>
                        <div className="results-details-4b">
                            6
                        </div>
                    </div>
                </div>
                <div className="results-buttons">
                    <button className="results-button-again">Play Again</button>
                    <button className="results-button-exit">Exit</button>
                </div>
            </div>
        </div>
    )
    }
}
