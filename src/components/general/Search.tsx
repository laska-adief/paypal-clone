import Input from "../common/Input";
import SearchIcon from "./../../assets/images/search-icon.svg";

const Search = ({
  placeholder,
  value,
  onChangeInputSearch,
}: {
  placeholder: string;
  value: string;
  onChangeInputSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative">
      <img src={SearchIcon} alt="search-icon" className="absolute left-8 top-2/4 -translate-y-2/4 w-6" />
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChangeInputSearch}
        customClass="rounded-full px-8 pl-16 text-lg placeholder:text-placeholder"></Input>
    </div>
  );
};
export default Search;
