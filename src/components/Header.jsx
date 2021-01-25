import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="logo">logo</div>
                <button className="add">add</button>
                <button className="remove">delete</button>
            </div>
        )
    }
}

export default Header;