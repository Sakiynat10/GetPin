"use client"

import React from 'react'
import "./style.scss"
import {useRouter} from "next/navigation";

const LoginForm = () => {
    const router = useRouter() ;

  // const  handleUserValue = () => {
  //     router.push(`/profile`)
  // }

  const login = (e) => {
      e.preventDefault();
      const elements = e.currentTarget.elements;
      const user = {
           parol: elements[0]?.value,
           password: elements[0]?.value,
      }
      console.log(user)
  }

  return (
    <div className="login-content">
        <h1>Getpin</h1>
        <form onSubmit={login}>
            <input type="text" name={"login"} placeholder='Login' />
            <input type="password" name={"password"} placeholder='Parol' />
            <button  type='submit'>Войти</button>
        </form>
    </div>
  )
}

export default LoginForm;