import Button from "@/components/atoms/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateFilter } from "@/store/todosSlice";
const FilterTodo = () => {
  const filter = useSelector((state) => state.todos.filterBy);
  const dispatch = useDispatch();
  const handleFilter = (filter) =>
    dispatch(
      updateFilter({
        filterBy: filter,
      })
    );

  const selectFilter = [
    {
      id: 1,
      filter: "ALL",
    },
    {
      id: 2,
      filter: "ACTIVE",
    },
    {
      id: 3,
      filter: "COMPLETED",
    },
  ];

  return (
    <section className="flex flex-row gap-x-[20px]">
      {selectFilter.map((el, i) => (
        <Button
          key={i}
          text={el.filter}
          className={`md:text-[12px] text-[11px]  font-bold py-1 px-3 rounded-full text-white ${
            el.filter == filter ? `bg-[#1BAF9F]` : `bg-[#788997]`
          }`}
          onClick={() => handleFilter(el.filter)}
        />
      ))}
    </section>
  );
};

export default FilterTodo;
