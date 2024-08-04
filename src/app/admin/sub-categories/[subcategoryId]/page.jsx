"use client"
import React from "react";
import {useParams, useRouter} from 'next/navigation'
import  "./style.scss"
import {categoryData} from "@/data";



const AddingSubCategory = ({value}) => {
    const router = useRouter();
    const {categoryId} = useParams();
    const handleBackClick = () => {
        router.back()
    }
    console.log(categoryData.filter((el) => el.id === +categoryId).map((el) => el.p))
    console.log(value)
    console.log(subcategoryId);
    return(
        <div className='subcategory-content'>
            <div className="top-content">
                <button className={"back-icon"} onClick={handleBackClick}>
                    <img src="/left.svg" alt="left"/>
                </button>
                <h3>Сабкатегории</h3>
                <button>сохранить</button>
            </div>
            <div className={"add-subcategory-input"}>
                <input defaultValue={categoryData.filter((el) => el.id === +categoryId).map((el) => el.p)} className={"category-input"} type="text" placeholder={"Kategoriya"} />
            </div>
        </div>
    )
}

export default AddingSubCategory;
