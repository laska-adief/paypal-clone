import { useState } from "react";
import Search from "../components/general/Search";
import Text from "../components/common/Text";

const Activity = () => {
  const [valueSearch, setValueSearch] = useState("");

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setValueSearch(value);
  };

  return (
    <div className="max-w-screen-xl max-xl:px-4 p-8 px-14 m-auto max-md:grid-cols-1 max-md:gap-y-4 max-md:gap-x-0">
      <Search value={valueSearch} onChangeInputSearch={onChangeSearchValue} placeholder="Search by name or email" />
      <Text customClass="text-lg pt-8 pb-4 font-semibold">Filter by</Text>
    </div>
  );
};
export default Activity;
