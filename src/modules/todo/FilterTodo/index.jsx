import Button from "../../components/Button";

const FilterTodo = () => {
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
          style={`md:text-[12px] text-[11px]  font-bold py-1 px-3 rounded-full text-white ${
            el.filter == "ALL" ? `bg-[#1BAF9F]` : `bg-[#788997]`
          }`}
          handleClick={() => {
            handleClick(el.id, el.filter);
          }}
        />
      ))}
    </section>
  );
};

export default FilterTodo;
