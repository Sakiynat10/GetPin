import Image from "next/image";
import "./style.scss";

const SearchInput = () => {
  return (
    <div className="container-1040">
    <form className="search-input">
      <input type="text" placeholder="Поиск" />
      <button type="submit" className="search-btn">
        <Image  fill src={"/search-img.svg"} alt="search" />
      </button>
    </form>
    </div>
  );
};

export default SearchInput;
