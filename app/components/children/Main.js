import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 main-display">
                        <img src="assets/images/alex-profile.jpg" className=" profile-img responsive-img circle" />
                        <h1>Full Stack Web Developer</h1>
                        <a href="http://www.uncovermed.com" className="waves-effect waves-light btn blue-grey darken-2">Writing</a>
                        <a href="https://www.linkedin.com/in/alejandroharb" className="linkedIn waves-effect waves-light"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
                    </div>
                    <div className=" quotes col m8 s12 offset-m2">
                        <p id="quotesDisplay" ></p>
                        <p id="author" ></p>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Main;