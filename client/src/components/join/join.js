import React, { useState } from 'react';
import { Link } from "react-router-dom"; 
import Footer from './footer'
import './join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div>
      <div className="joinOuterContainer">
        <div className="menuContainer">
          <div className="joinInnerContainer">
          <br/><br/>
            <span className="hdr nes">Welcome to Talk-a-Latte</span>
            <br/><br/><br/>
            <div>
              <input placeholder="Name" className="joinInput nes" type="text" onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
              <input placeholder="Table" className="joinInput mt-20 nes" type="text" onChange={(event) => setRoom(event.target.value)} />
            </div>
            <Link className={'button mt-20 eightbit-btn eightbit-btn--proceed'} onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
              
              Create Table

            </Link>
          </div>
        </div>
        
    
      </div> 
      <Footer/>
    </div>
  );
}
