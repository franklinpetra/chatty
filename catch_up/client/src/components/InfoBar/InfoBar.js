import React from 'react';
import dotIcon2 from './img/dotIcon2.png';
import xIcon from './img/xIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="dotIcon" src={ dotIcon2 } alt="dot icon" />
            <h3>{room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><img className="xIcon" src={ xIcon } alt="x icon" /></a>
        </div>
    </div>
);

export default InfoBar;