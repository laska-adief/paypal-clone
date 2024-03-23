import Button from "../common/Button";

interface FilterButtonProps {
  text: string;
  selectedFilter?: { label: string; value: string };
}
const FilterButton = ({ text, selectedFilter }: FilterButtonProps) => {
  return (
    <div>
      <Button
        type="button"
        variant="secondary"
        customClass={`rounded-full text-primary border-none outline-none focus:shadow-button-secondary-hover ${
          selectedFilter ? "!bg-filter-button" : "bg-transparent"
        }`}>
        {text} {selectedFilter ? ` : ${selectedFilter.label}` : ""}
      </Button>
    </div>
  );
};
export default FilterButton;
