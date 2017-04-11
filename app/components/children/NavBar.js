import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="transparent">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Alejandro</a>

                    <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className=" left hide-on-med-and-down">

                        <li><a href="http://www.uncovermed.com">Writing</a></li>
                    </ul>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="https://www.linkedin.com/in/alejandroharb"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a></li>
                        <li><a href="https://github.com/alejandroharb"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a></li>
                    </ul>

                    <ul id="slide-out" className="side-nav">

                        <li><a href="http://www.uncovermed.com">Writing</a></li>
                        <li><a href="https://www.linkedin.com/in/alejandroharb"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>LinkedIn</a></li>
                        <li><a href="https://github.com/alejandroharb"><i className="fa fa-github fa-2x" aria-hidden="true"></i>GitHub</a></li>
                    </ul>

                    <div className="background-img"></div>
                </div>
            </nav>
        );
    }
}

module.exports = NavBar;