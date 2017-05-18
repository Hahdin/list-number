//import React, { Component } from 'react'

//class NavBar extends Component {
//    render() {
//        var pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact']
//        var navLinks = pages.map(function (page) {
//            return (
//                <a href={'/#'}>
//                    {page}
//                </a>
//            )
//        })
//       return (<nav>{navLinks}</nav>)
//    }
//}
//export default NavBar
import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <div className="container">
            <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="#myPage">BlackToque</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav navbar-right">
                                <li><a href="#table">In a Table</a></li>
                                <li><a href="#canvas">On a Canvas</a></li>
                    </ul>
                </div>
            </div>
            </nav>
                </div>)
    }
}
export default NavBar
