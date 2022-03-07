import React from 'react';
import { useNavigate } from 'react-router-dom';


import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    let navigate = useNavigate();
    function handleClick() {
        navigate(linkUrl)
    }
    return (
        <div className={`${size} menu-item`} onClick={handleClick}>
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
};

export default MenuItem;