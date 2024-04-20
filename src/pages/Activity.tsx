import { useState } from "react";
import Search from "../components/general/Search";
import Text from "../components/common/Text";
import FilterButton from "../components/general/FilterButton";
import { FilterDate } from "../static/FilterData";
import Container from "../components/general/Container";

const Activity = () => {
  const [valueSearch, setValueSearch] = useState("");
  const [dateFilter, setDateFilter] = useState({ label: "Last 90 days", value: "last-90-days" });

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target?.value;
    setValueSearch(value);
  };

  return (
    <Container>
      <div className="max-w-screen-xl max-xl:px-4 p-8 px-14 m-auto max-md:grid-cols-1 max-md:gap-y-4 max-md:gap-x-0">
        <Search value={valueSearch} onChangeInputSearch={onChangeSearchValue} placeholder="Search by name or email" />
        <Text customClass="text-lg pt-8 pb-4 font-semibold">Filter by</Text>
        <FilterButton
          id="filter-date"
          filterData={FilterDate}
          text="Date"
          selectedFilter={dateFilter}
          setFilter={setDateFilter}></FilterButton>
      </div>
    </Container>
  );
};
export default Activity;
