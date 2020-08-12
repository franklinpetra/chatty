import React from 'react';
import dotIcon2 from '../InfoBar/img/dotIcon2.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1 id="slide">Realtime Chat Application <span role="img" aria-label="emoji"></span></h1>
      <h4>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji"></span></h4>
      <h4>Enjoy catching up! <span role="img" aria-label="emoji"></span></h4>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently online</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name, room}) => (
                  <div key={name} className="activeItem">
                    <span>{ name }</span>&nbsp;is in the {room}
                    <img style={{width:"10%"}} alt="Dot Icon2" src={ dotIcon2 }/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;