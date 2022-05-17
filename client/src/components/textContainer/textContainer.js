import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './textContainer.css';

const TextContainer = ({ users,room }) => (
  <div className="textContainer">
    <div>
      <h1 className='header'>Talk-a-Latte <span role="img" aria-label="emoji">💬</span><br/><br/><br/>Chat Table {room}</h1>
 
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
              <ul> 
                {users.map(({name}) => (
                  <li>
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div></li>
                ))}  
               </ul>
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;