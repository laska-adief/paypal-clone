import React, { useState } from "react";
import Button from "../common/Button";
import Text from "../common/Text";
import Input from "../common/Input";

interface FilterButtonProps {
  id: string;
  text: string;
  selectedFilter?: { label: string; value: string };
  filterData: FilterDataProps[];
}

interface FilterDataProps {
  label: string;
  value: string;
}

const FilterButton = ({ id, text, selectedFilter, filterData }: FilterButtonProps) => {
  const [isActive, setIsActive] = useState(false);
  const handleFilterDisplay = () => {
    setIsActive(!isActive);
  };

  const handleChangeFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("filter", event);
  };

  return (
    <div>
      <Button
        type="button"
        variant="secondary"
        customClass={`rounded-full text-primary border-none outline-none focus:shadow-button-secondary-hover ${
          selectedFilter ? "!bg-filter-button" : "bg-transparent"
        }`}
        onClick={handleFilterDisplay}>
        {text} {selectedFilter ? ` : ${selectedFilter.label}` : ""}
      </Button>

      {isActive && (
        <div className="border shadow-md rounded-lg w-fit p-4">
          <Text customClass="pt-2 pb-4">Date</Text>
          <div className="flex flex-col gap-4">
            {filterData?.length &&
              filterData.map((filter: FilterDataProps, index: number) => (
                <div className="flex items-center gap-4" key={index}>
                  <Input
                    type="radio"
                    id={filter.value}
                    name={id}
                    value={filter.value}
                    onChange={handleChangeFilter}
                    customClass="form-radio h-5 w-5 cursor-pointer"></Input>
                  <label htmlFor={filter.value} className="cursor-pointer">
                    <Text>{filter.label}</Text>
                  </label>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default FilterButton;
