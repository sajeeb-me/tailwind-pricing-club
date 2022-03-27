import React from 'react';

const Links = ({ route }) => {
    const { name, link } = route;
    return (
        <li className='mx-10'>
            <a href={link}>{name}</a>
        </li>
    );
};

export default Links;