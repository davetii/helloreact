import React from 'react';
const Header = (props) => (
    <div className="header">
        <div className="container">
            <p className="header__title">{props.title}</p>
            <p className="header__subtitle">{props.subtitle}</p>
        </div>
    </div>
);

Header.defaultProps = { title: 'My default Title', subtitle: 'My default subtitle' }
export default Header;

