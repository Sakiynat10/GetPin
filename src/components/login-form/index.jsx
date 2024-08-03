"use client"

import React from 'react'
import "./style.scss"

const LoginForm = () => {
  return (
    <div className="login-content">
        <h1>Getpin</h1>
        <form>
            <input type="text" placeholder='Login' />
            <input type="text" placeholder='Parol' />
            <button type='submit'>Войти</button>
        </form>
    </div>
  )
}

export default LoginForm;