import React, { Component } from 'react'

class TableSection extends Component {
    handleClick() {
        generateTable()
    }

    render() {
        return (
            <div id='table' className="container-fluid well">
                <p>Since there are so many numbers and the list is so long, I though putting them into a table might be useful as well.</p>
                <button type="button" onClick={this.handleClick} > Fill in Table</button>
                <div id='tablelist'></div>
            </div>
            )
    }
}
export default TableSection
