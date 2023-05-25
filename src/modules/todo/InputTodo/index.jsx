import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { PropTypes } from "prop-types";
const InputTodo = () => {
  return (
    <section className="flex flex-row w-full md:gap-x-[20px] gap-x-[10px]">
      <TextField name="inputTodo" text="What to do" />
      <Button
        text="Add"
        style="w-1/5 bg-[#6459F5] hover:bg-[#4134f8] md:text-[18px] text-[15px] focus:outline-none   rounded text-white font-bold p-2 "
      />
    </section>
  );
};

InputTodo.propTypes = {
  id: PropTypes.number,
  todoUpdate: PropTypes.string,
  isUpdate: PropTypes.bool,
  done: PropTypes.func,
};

export default InputTodo;
