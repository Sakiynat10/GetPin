import Image from "next/image";
import "./style.scss";

const SearchInput = ({isShrunk}) => {
  return (
    <div className="container-1040">
    <form className={isShrunk ? "search-input top-input" : "search-input"}>
      <input type="text" placeholder="Поиск" />
      <button type="submit" className="search-btn">
        <Image  fill src={"/search-img.svg"} alt="search" />
      </button>
    </form>
    </div>
  );
};

export default SearchInput;
