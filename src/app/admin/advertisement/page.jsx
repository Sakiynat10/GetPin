"use client"

import React from "react";
import "./style.scss";
import { advInfos } from '@/data';
import {useRouter} from "next/navigation";

const Advertisement = () => {
  const router = useRouter();

  const handleAdd = (id) => {
    router.push(`/admin/advertisement/${id}`)
  }
  return (
    <>
      <div className="admin-adv-top"></div>
      <div className="admin-adv">
        <div className="admin-table">
          <a href="/admin/advertisement/adding" className="plus">
            <img src="/plus.svg" alt="plus" />
          </a>
          {advInfos.map((el, i) => (
            <ul key={i}>
              <li>
                <span></span>
                <p>{el.site}</p>
              </li>
              <li>
                <p>{el.nameCompany}</p>
              </li>
              <li>
                {el.claim  ? <button><img src="/like.svg" alt="like" /></button> : ""}
                <p>{el.likes}</p>
              </li>
              <li>
                {el.claim  ? <button><img src="/viewer.svg" alt="like" /></button> : ""}
                <p>{el.viewers}</p>
              </li>
              {el.claim  ? <li className="crud">
                <button><img src="/check.svg" alt="like" /></button>
                <button><img src="/delete.svg" alt="like" /></button>
                <button onClick={() => handleAdd(el.id)}><img src="/edit.svg" alt="like" /></button>
              </li>  : ""}
            </ul>
          ))}
          <ul>
            <li>
              <span></span>
              <p>This training will have been by Jamshid Umirov on Monday</p>
            </li>
            <li>
              <p>Getter Uz</p>
            </li>
            <li>
              <p>429</p>
            </li>
            <li>
              <p>357</p>
            </li>
          </ul>
          <ul>
            <li>
              <span></span>
              <p>This training will have been Monday</p>
            </li>
            <li>
              <p>Getter Uz</p>
            </li>
            <li>
              <p>429</p>
            </li>
            <li>
              <p>357</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Advertisement;
