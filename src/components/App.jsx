import React, { Component } from 'react';
import './Inner';
import Inner from './Inner';
import Header from './Header';
import { cardItems } from './data/data';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="inner">
                    {cardItems.map((dataItem) => (
                        <Inner
                            Title={dataItem.title}
                            Description={dataItem.description}
                            Image={dataItem.image}
                        />
                    ))}
                </div>
            </div>
        )
    }
}


export default App;