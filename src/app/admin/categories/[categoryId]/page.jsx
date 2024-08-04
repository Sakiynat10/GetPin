"use client"
import React from "react";
import {useParams, useRouter} from 'next/navigation'
import  "./style.scss"
import {categoryData} from "@/data";



const AddingCategory = ({value}) => {
    const router = useRouter();
    const {categoryId} = useParams();
    const handleBackClick = () => {
        router.back()
    }
    console.log(categoryData.filter((el) => el.id === +categoryId).map((el) => el.p))
    console.log(value)
    console.log(categoryId);
    return(
        <div className='category-content'>
            <div className="top-content">
                <button className={"back-icon"} onClick={handleBackClick}>
                    <img src="/left.svg" alt="left"/>
                </button>
                <h3>Категории</h3>
                <button>сохранить</button>
            </div>
            <div className={"add-category-input"}>
                <input defaultValue={categoryData.filter((el) => el.id === +categoryId).map((el) => el.p)} className={"category-input"} type="text" placeholder={"Kategoriya"} />
            </div>
        </div>
    )
}

export default AddingCategory;
