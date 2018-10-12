import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>Put your life in the hands of a computer!</p>
        </div>
    ); 
};

Header.defaultProps = {
    title: 'Some default Title'
}; 


export default Header


