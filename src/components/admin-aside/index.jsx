"use client"
import React, {useState} from 'react'
import "./style.scss"
import NavLink from '../navlink';
import {ReadonlyURLSearchParams, useParams, usePathname, useRouter, useSearchParams} from "next/navigation";

const AdminAside = () => {

  return (
    <>
      <div className="admin-aside">
        <a href="#" className='admin-logo'>
            Getpin
        </a>
        <ul>
            <li>
                <NavLink href="/admin/advertisement">Все обявлении</NavLink>
            </li>
            <li>
                <NavLink  href="/admin/moderation">Модерация</NavLink>
            </li>
            <li>
                <NavLink href="/admin/transactions">Транзакции</NavLink>
            </li>
            <li>
                <NavLink  href="/admin/development">Саморазвития</NavLink>
            </li>
            <li>
                <NavLink href="/admin/categories">Категории</NavLink>
            </li>
            <li>
                <NavLink  href="/admin/sub-categories">Сабкатегории</NavLink>
            </li>
        </ul>
      </div>
    </>
  )
}

export default AdminAside;