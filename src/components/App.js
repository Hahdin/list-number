
import React, { Component } from 'react'
import NavBar from './NavBar'
import FooterSection from './FooterSection'
import ListSection from './ListSection'
import TableSection from './TableSection'
import CanvasSection from './CanvasSection'

class App extends Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            title: 'job-test'
        }
    }

    render() {
       return (
            <div>
               <NavBar />
               <ListSection />
               <TableSection />
               <CanvasSection />
               <FooterSection />
            </div>)
    }
}
export default App
