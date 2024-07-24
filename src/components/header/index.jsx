import Image from "next/image";
import SearchInput from "../search-input";

import "./style.scss";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="nav-top">
          <a className="nav-logo" href="/">Getpin</a>
          <a className="account" href="account">
            <span className="account-title">Добавить объявления</span>
            <span className="account-img">
              <Image fill src="/speaker-2.png" />
            </span>
          </a>
        </div>
        <SearchInput />
      </nav>
    </header>
  );
};

export default Header;
