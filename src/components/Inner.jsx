import React from 'react';

const Inner = ({ Title, Description, Image }) => {
    return (
        <div id="id-0" className="inner__item">
            <div className="image-wrapper">
                <img className="image" src={Image} alt="pic" />
            </div>
            <div className="title">{Title}</div>
            <div className="description">{Description}</div>
            <button className="add-btn">купить</button>
        </div>
    )
}

export default Inner;