import React, { Component } from 'react'

class CanvasSection extends Component {

    handleClick() {
        drawOnCanvas()
    }

    render() {
        return (
            <div className="container-fluid well">
                <div id="info"></div>
                <p>Lastly, I wish to offer a slight distraction. Although it cannot compete in the area of performance with simply printing the list of numbers, 
                    the canvas will offer easily observed visual evidence of the random nature of the list. As a value is retrieved from the list, its index on the canvas is filled. 
                    The fill value grades between black and white, representing the order the values were retrieved by percentage. Black represents 0%, white 100%.</p>
                <button type="button" onClick={this.handleClick} > Click to Generate Image</button>
                <canvas id = 'canvas'></canvas>
               
            </div>
        )
    }
}
export default CanvasSection
