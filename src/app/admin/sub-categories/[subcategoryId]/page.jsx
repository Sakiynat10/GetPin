"use client"
import React from "react";
import {useParams, useRouter} from 'next/navigation'
import  "./style.scss"
import {categoryData} from "@/data";



const AddingSubCategory = ({value}) => {
    const router = useRouter();
    const {subcategoryId} = useParams();
    console.log(subcategoryId.split("_")[1])
    console.log();
    const category = categoryData.filter((el) => el.id === subcategoryId.split("_")[0])[0];
    const subcategory = category?.subCategoryData.filter((elem => elem.id === subcategoryId))[0].p
    console.log(subcategory)
    const handleBackClick = () => {
        router.back()
    }
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
                {subcategory ? <input type="text" placeholder={"Subcategory name"} defaultValue={subcategory}/> :
                    <input type="text" placeholder={"Subcategory name"}/>}
                <div className={"select"}>
                    <select  defaultValue={""}>
                        <option hidden value="">{category?.p ? category?.p : "Kategroiy tanlang"}</option>
                        {categoryData.map((el, i) =>
                            <option key={i} value={i}>{el.p}</option>
                        )}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default AddingSubCategory;
