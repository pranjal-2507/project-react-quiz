import React from 'react'
import './Quiz.css'

export default class Quiz extends React.Component{
    render(){
        return(
            <>
            <div className="container">
                <h1>Question</h1>
                <div className="NoOfQues">1 of 15</div>
                <p>Which is the only mammal that can jump?</p>

                <div className="options">
                    <button className='option'>Dog</button>
                    <button className='option'>Elephant</button>
                    <button className='option'>Goat</button>
                    <button className='option'>Lion</button>
                </div>
                <div className="lastBtns">
                    <button id='pre' className='btn'>Previous</button>
                    <button id='next' className='btn'>Next</button>
                    <button id='quit' className='btn'>Quit</button>
                </div>
            </div>
            </>
        )
    }
}