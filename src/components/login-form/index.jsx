"use client"

import React from 'react'
import "./style.scss"
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const router = useRouter()
  const  handleUserValue = () => {
      rouer.push(`/profile`)
  }
  return (
    <div className="login-content">
        <h1>Getpin</h1>
        <form>
            <input type="text" placeholder='Login' />
            <input type="text" placeholder='Parol' />
            <button onClick={handleUserValue} type='submit'>Войти</button>
        </form>
    </div>
  )
}

export default LoginForm;