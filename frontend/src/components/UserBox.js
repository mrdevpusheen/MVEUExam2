import './UserBox.css';
import React from 'react';

function UserBox({setModalBox}) {
  return (
    <div className="UserBox">
        <ul>
          <li onClick={() => setModalBox('Login')}>Вход</li>
          <li onClick={() => setModalBox('Registration')}>Регистрация</li>
        </ul>
    </div>
  );
}

export default UserBox;