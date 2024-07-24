"use client";
import React, { useEffect, useState } from "react";
import NavLink from "@/components/navlink";
import { categoryData } from "@/data";

const TrainCategory = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 77) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
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
          <li key={i}>
            <NavLink href="">{el.p}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TrainCategory;
