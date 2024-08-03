import React from 'react'
import "./style.scss"
import NavLink from '../navlink';

const AdminAside = () => {
  return (
    <>
      <div className="admin-aside">
        <a href="#" className='admin-logo'>
            Getpin
        </a>
        <ul>
            <li>
                <NavLink href="advertisement">Все обявлении</NavLink>
            </li>
            <li>
                <NavLink href="moderation">Модерация</NavLink>
            </li>
            <li>
                <NavLink href="transactions">Транзакции</NavLink>
            </li>
            <li>
                <NavLink href="development">Саморазвития</NavLink>
            </li>
            <li>
                <NavLink href="categories">Категории</NavLink>
            </li>
            <li>
                <NavLink href="sub-categories">Сабкатегории</NavLink>
            </li>
        </ul>
      </div>
    </>
  )
}

export default AdminAside;