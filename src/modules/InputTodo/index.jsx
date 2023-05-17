import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../store/todosSlice";
import { PropTypes } from "prop-types";
const InputTodo = ({ id, todoUpdate, isUpdate, done }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = () =>
    value != "" &&
    (dispatch(
      addTodo({
        todo: value,
      })
    ),
    setValue(""));

  const handleUpdate = () =>
    value != "" &&
    (dispatch(
      updateTodo({
        id: id,
        todo: value,
      })
    ),
    setValue(""),
    done());

  useEffect(() => {
    setValue(todoUpdate);
  }, [todoUpdate]);

  return (
    <section className="flex flex-row w-full gap-x-[20px]">
      <TextField
        name="inputTodo"
        text="What to do"
        value={value}
        handleChange={(e) => setValue(e.target.value)}
      />
      <Button
        text={`${isUpdate ? "Update" : "Add"}`}
        style="w-1/5 bg-[#6459F5] hover:bg-[#4134f8]   rounded text-white font-bold p-2"
        handleClick={isUpdate ? handleUpdate : handleSubmit}
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
