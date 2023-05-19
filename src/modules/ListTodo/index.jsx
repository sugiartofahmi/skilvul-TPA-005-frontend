import { TbTrashXFilled } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
import Checkbox from "../../components/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { compledeTodo, deleteTodo } from "../../store/todosSlice";
import FilterTodo from "../FilterTodo";
import { PropTypes } from "prop-types";

const ListTodo = ({ getTodo }) => {
  const todos = useSelector((state) => state.todos.todos);
  const filterBy = useSelector((state) => state.todos.filterBy);
  const dispatch = useDispatch();
  const handleCheckbox = (id) =>
    dispatch(
      compledeTodo({
        id: id,
      })
    );

  const handleDelete = (id) =>
    dispatch(
      deleteTodo({
        id: id,
      })
    );

  const handleGetData = (id, todo) => getTodo(id, todo);

  const filteredTodo = () => {
    if (filterBy === "COMPLETED") {
      return todos.filter((todo) => todo.completed);
    }
    if (filterBy === "ACTIVE") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  };

  return (
    <section className="flex flex-col w-full gap-y-[20px] ">
      <FilterTodo />
      <section className="flex flex-col w-full h-full md:gap-y-[20px] gap-y-[10px]">
        {filteredTodo().map((el, i) => (
          <section
            key={i}
            className="border-2 border-[#CFD7DC] md:h-[55px] h-[50px] flex justify-between items-center px-4 text-[#4B5C6B] w-full"
          >
            <section className="flex items-center md:gap-x-[10px] gap-x-[8px]">
              <Checkbox
                handleChange={() => handleCheckbox(el.id)}
                value={el.todo}
                isChecked={el.completed}
              />
              <h1
                className={`font-semibold capitalize md:w-[250px] w-[200px] line-clamp-1 md:text-[17px] text-[15px]  ${
                  el.completed && `line-through decoration-2`
                } `}
              >
                {el.todo}
              </h1>
            </section>
            <section className="flex flex-row items-center md:gap-x-[5px] gap-x-[3px]">
              {!el.completed && (
                <RiPencilFill
                  onClick={() => handleGetData(el.id, el.todo)}
                  className="md:text-[28px] text-[23px] cursor-pointer"
                />
              )}
              <TbTrashXFilled
                onClick={() => handleDelete(el.id)}
                className="md:text-[28px] text-[23px] cursor-pointer"
              />
            </section>
          </section>
        ))}
      </section>
    </section>
  );
};

ListTodo.propTypes = {
  getTodo: PropTypes.func,
};

export default ListTodo;
