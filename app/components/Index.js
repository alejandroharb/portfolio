import React from 'react';
import NavBar from './children/NavBar';
import Main from './children/Main';

class Index extends React.Component {
    render() {
        return (
            <div>
                <NavBar />    
                <Main />    
            </div>
        );
    }
}

module.exports = Index;