"use client"

import React, {useState} from 'react'
import { useRouter } from 'next/navigation'



import {categoryData} from "@/data";

import "./style.scss"

const SubCategories = () => {
  const [value , setValue] = useState('')
  const [valueId , setValueId] = useState('newCategory')
  const router = useRouter()
  const handleBackClick = () => {
    router.back();
  }

  const handleValue = (e,elem) => {
    e.preventDefault();
    setValue(elem.p);
    setValueId(elem.id)
    router.push(`/admin/categories/${elem.id}`
    );
    console.log(router)
  }
  return (
      <div className='category-content'>
        <div className="top-content">
          <button className={"back-icon"} onClick={handleBackClick}>
            <img src="/left.svg" alt="left" />
          </button>
          <h3>Сабкатегории</h3>
          <a href={`categories/${valueId}`} className={"add-category"}>
            <img src="/plus.svg" alt="plus" />
          </a>
        </div>
        <ul className={"categories"}>
          {categoryData.map((el, i) =>
              <li key={i}>
                <p>{el.p}</p>
                <div className={"control-category"}>
                  <button><img src="/check.svg" alt="like"/></button>
                  <button><img src="/delete.svg" alt="like"/></button>
                  <a href={"/admin/[categoryId]"}  onClick={(e) => { handleValue(e, el)}} ><img src="/edit.svg" alt="like"/></a>
                </div>
              </li>
          )}
        </ul>
      </div>

  )
}

export default SubCategories