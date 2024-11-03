import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FormEvent } from "react";

interface SearchBarProps {
  handleSearch: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchValue = form.elements.namedItem(
      "searchValue"
    ) as HTMLInputElement;

    if (searchValue.value.trim() === "") {
      toast.error("Please write input value!");
      return;
    }

    handleSearch(searchValue.value);
    form.reset();
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.searchForm}>
        <input
          className={s.search}
          name="searchValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={s.searchBtn}>
          <hr className={s.line} />
          <FaMagnifyingGlass className={s.searchIcon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
