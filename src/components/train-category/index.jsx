"use client";
import React, { useEffect, useState } from "react";
import NavLink from "@/components/navlink";
import { categoryData } from "@/data";

const TrainCategory = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [categoryId , setCategoryId] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Bce");

  const res = ((categoryData.filter((el) => +el.id === +categoryId)).map((el) => el.subCategoryData))

    const handleId = (id , category) => {
      setCategoryId(id)
      setActiveCategory(category)
    }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

      console.log(res[0]?.map((el) => el))
      console.log(categoryId)

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [categoryId]);
  return (
    <div className={"container-categ"}>
      <ul
        className={
          isShrunk ? "space" : "none"
        }
      >
      </ul>
        <ul
            className={
                isShrunk ? "category-training category-fixed" : "category-training"
            }
        >
            {categoryData?.map((el, i) => (
                <>
                    <li key={i} className={activeCategory === el.p ? "active-category" : ""}>
                        <NavLink  onClick={() => handleId(el.id , el.p)} href="">{el.p}</NavLink>
                    </li>
                </>
            ))}
            {/*<li style={{display:"flex" , alignItems:"center" , gap:"10px"}}>*/}
            {/*    {res[0].map((res , i) =>*/}
            {/*        <p key={i}>{res.p}</p>*/}
            {/*    )}*/}
            {/*</li>*/}
        </ul>
    </div>
  );
};

export default TrainCategory;
