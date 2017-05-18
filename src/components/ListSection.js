import React, { Component } from 'react'

class ListSection extends Component {

    handleClick() {
        genList()
    }

    render() {
        return (
            <div className="container-fluid well">
                <h1> List of 1 to 10000 in Random Order </h1> <br />
                <h4>All functions are coded in JavaScript</h4>
                <p>This first function simply lists the numbers. The values are enclosed in braces () to allow easy page search to confirm the unique values of the list. </p>
                <p>Use the links on the navigation bar to jump to the two other functions offered</p>
                <button type="button" onClick={this.handleClick} > Click to Generate new List</button>
                <div id='thelist' className='well'>
                </div>
            </div>
            )
    }
}
export default ListSection
