import Button from "../../components/Button";
const FilterTodo = () => {
  return (
    <section className="flex flex-row gap-x-[20px]">
      <Button
        text="ALL"
        style="text-xs font-bold py-1 px-3 bg-[#1BAF9F] rounded-full text-white"
        handleClick={() => console.log("test")}
      />
      <Button
        text="ACTIVE"
        style="text-xs font-bold py-1 px-3 bg-[#788997] rounded-full text-white"
        handleClick={() => console.log("test")}
      />
      <Button
        text="COMPLETED"
        style="text-xs font-bold py-1 px-3 bg-[#788997] rounded-full text-white"
        handleClick={() => console.log("test")}
      />
    </section>
  );
};

export default FilterTodo;
