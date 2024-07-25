import "./style.scss"

import SearchInput from "@/components/search-input";
import { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <section id="hero">
        <SearchInput />
        <div className="container-1040">
            <ul className="page-tabs">
                <li>
                    <a href="/">Главная</a>
                    <a href="/master">Мастер-классы</a>
                    <a href="/design">То что вам удобна это ux-дизайн </a>
                </li>
            </ul>
            <div className="hero-contents">
                
            </div>
        </div>
      </section>
    </Fragment>
  );
}
