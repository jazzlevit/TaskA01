import React, { Component } from 'react';
import './Inner';
import Inner from './Inner';
import Header from './Header';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Inner />
            </div>
       )
    }
}


export default App;