import './Registration.css';
import React from 'react';

function Registration() {

    function Reg(){
        const login = document.getElementById('login').value
        const password = document.getElementById('password').value
        const email = document.getElementById('email').value

        const data = {
            login: login,
            password: password,
            email: email
        }
        console.log(data)
    }

  return (
    <div className='Registration'>
        <h1>Регистрация</h1>
        <input id='login' type='text' placeholder='Логин'/>
        <input id='password' type='password' placeholder='Пароль'/>
        <input id='email' type='text' placeholder='Email'/>
        <button onClick={Reg}>Зарегестрироваться</button>
    </div>
  );
}

export default Registration;