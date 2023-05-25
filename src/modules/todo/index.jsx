import MainTemplate from "@/components/templates/MainTemplate";
import ContentTemplate from "@/components/templates/ContentTemplate";
import InputTodo from "@/modules/todo/InputTodo";
import ListTodo from "@/modules/todo/ListTodo";
import FilterTodo from "@/modules/todo/FilterTodo";
import {
  compledeTodo,
  deleteTodo,
  addTodo,
  updateTodo,
} from "@/store/todosSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const TodoApp = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    id: "",
    todo: "",
    isUpdate: false,
  });

  const handleCheckbox = (id) =>
    dispatch(
      compledeTodo({
        id,
      })
    );

  const handleDelete = (id) =>
    dispatch(
      deleteTodo({
        id,
      })
    );

  const handleAdd = () =>
    value.todo != "" &&
    (dispatch(
      addTodo({
        todo: value.todo,
      })
    ),
    setValue({
      ...value,
      todo: "",
    }));

  const handleGetTodo = (id, todo) =>
    setValue({
      id,
      todo,
      isUpdate: true,
    });

  const handleUpdate = () =>
    value.id != "" &&
    value.todo != "" &&
    (dispatch(
      updateTodo({
        id: value.id,
        todo: value.todo,
      })
    ),
    setValue({
      id: "",
      todo: "",
      isUpdate: false,
    }));

  return (
    <MainTemplate>
      <ContentTemplate>
        <h1 className="text-[#293845] md:text-[29px] text-[23px] font-extrabold">
          What's the plan for today?
        </h1>
        <div className="flex flex-col w-full md:gap-y-[45px] gap-y-[35px] ">
          <div className="flex flex-row w-full md:gap-x-[20px] gap-x-[10px]">
            <InputTodo
              text={!value.isUpdate ? "Add" : "Update"}
              onClick={!value.isUpdate ? handleAdd : handleUpdate}
              value={value.todo}
              onChange={(e) => setValue({ ...value, todo: e.target.value })}
            />
          </div>
          <div className="flex flex-col w-full gap-y-[20px] ">
            <FilterTodo />
            <ListTodo
              handleGetTodo={handleGetTodo}
              handleCheckbox={handleCheckbox}
              handleDelete={handleDelete}
              todos={todos}
            />
          </div>
        </div>
      </ContentTemplate>
    </MainTemplate>
  );
};

export default TodoApp;
