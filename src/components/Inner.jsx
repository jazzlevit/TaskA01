import React from 'react';

class Inner extends React.Component {
    render() {
        return (
            <div className="inner">
                <div id="1" className="inner__item">
                    <div className="image-wrapper">
                        <img className="image" src="https://i.pinimg.com/474x/01/73/f1/0173f1060ecafc83e58be838586517d5.jpg" alt="pic" />
                    </div>
                    <div className="title">BMW 7L</div>
                    <div className="description">$54000</div>
                    <button className="add-btn">купить</button>
                </div>
                <div className="inner__item">
                    <div className="image-wrapper">
                        <img className="image" src="https://i.pinimg.com/474x/50/eb/d1/50ebd1ba0836937fd4da4489ebfaeb96.jpg" alt="pic" />
                    </div>
                    <div className="title">BMW 5 Coupe</div>
                    <div className="description">$48000</div>
                    <button className="add-btn">купить</button>
                </div>
                <div className="inner__item">
                    <div className="image-wrapper">
                        <img className="image" src="https://i.pinimg.com/474x/87/55/3f/87553f94c3d3c608ab0a860175e53d92.jpg" alt="pic" />
                    </div>
                    <div className="title">Audi A8</div>
                    <div className="description">$52000</div>
                    <button className="add-btn">купить</button>
                </div>
                <div className="inner__item">
                    <div className="image-wrapper">
                        <img className="image" src="https://i.pinimg.com/474x/c3/0e/a0/c30ea0cd5b016d32139a6642affe1ee9.jpg" alt="pic" />
                    </div>
                    <div className="title">lincoln cq</div>
                    <div className="description">$37000</div>
                    <button className="add-btn">купить</button>
                </div>
                <div className="inner__item">
                    <div className="image-wrapper">
                        <img className="image" src="https://i.pinimg.com/474x/1b/2d/bc/1b2dbc99bb3e887b425dcae26b365d77.jpg" alt="pic" />
                    </div>
                    <div className="title">Mercedes AMG GT63</div>
                    <div className="description">$40000</div>
                    <button className="add-btn">купить</button>
                </div>
            </div>
        )
    }
}




export default Inner;