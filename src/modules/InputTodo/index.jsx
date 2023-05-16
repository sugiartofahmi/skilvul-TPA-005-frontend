import TextField from "../../components/TextField";
import Button from "../../components/Button";
const InputTodo = () => {
  return (
    <section className="flex flex-row w-full gap-x-[20px]">
      <TextField
        name="inputTodo"
        text="What to do"
        handleChange={() => console.log("test")}
      />
      <Button
        text="Add"
        style="w-1/5 bg-[#6459F5] hover:bg-[#4134f8]   rounded text-white font-bold p-2"
        handleClick={() => console.log("test")}
      />
    </section>
  );
};

export default InputTodo;
