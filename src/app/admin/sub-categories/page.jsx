"use client"

import React, {useState} from 'react'
import { useRouter } from 'next/navigation'



import {categoryData} from "@/data";

import "./style.scss"

const SubCategories = () => {
  const [value , setValue] = useState('')
  const [valueSubCategory , setValueSubCategory] = useState('newCategory')
  const router = useRouter()
  const handleBackClick = () => {
    router.back();
  }

  const subValue6 = categoryData.filter((el) => +el.id === 6).map((el) => el.p)



  const handleValue = (e,elem , subValue) => {
    router.push(`/admin/sub-categories/${elem.id}`
    );

  }



  return (
      <div className='category-content'>
        <div className="top-content">
          <button className={"back-icon"} onClick={handleBackClick}>
            <img src="/left.svg" alt="left" />
          </button>
          <h3>Сабкатегории</h3>
          <a href={`/admin/sub-categories/newSubCategory`} className={"add-category"}>
            <img src="/plus.svg" alt="plus" />
          </a>
        </div>
        <ul className={"subcategories"}>
          {categoryData.map((el, i) =>el.subCategoryData.map((elem) => <li key={elem.id}>
            <p>{el.p}</p>
            <p>              {elem.p}
            </p>
            <div className={"control-category"}>
              <button><img src="/check.svg" alt="like"/></button>
              <button><img src="/delete.svg" alt="like"/></button>
              <button onClick={(e) => {
                handleValue(e, elem, subValue6)
              }}><img src="/edit.svg" alt="like"/></button>
            </div>
          </li>))}
        </ul>
      </div>

  )
}

export default SubCategories