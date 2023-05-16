import { TbTrashXFilled } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
import Checkbox from "../../components/Checkbox";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { compledeTodo, deleteTodo } from "../../store/todoSlice";

const ListTodo = ({ getTodo }) => {
  const todos = useSelector((state) => state.todos);
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

  return (
    <section className="flex flex-col w-full h-full gap-y-[20px]">
      {todos.map((el, i) => (
        <section
          key={i}
          className="border-2 border-[#CFD7DC] h-[55px] flex justify-between items-center px-4 text-[#4B5C6B]"
        >
          <section className="flex items-center gap-x-[10px]">
            <Checkbox
              handleChange={() => handleCheckbox(el.id)}
              value={el.todo}
              isChecked={el.completed}
            />
            <h1
              className={`font-semibold capitalize w-[250px] line-clamp-1  ${
                el.completed && `line-through decoration-2`
              } `}
            >
              {el.todo}
            </h1>
          </section>
          <section className="flex items-center gap-x-[5px]">
            {!el.completed && (
              <RiPencilFill
                onClick={() => handleGetData(el.id, el.todo)}
                className="text-[28px] cursor-pointer"
              />
            )}
            <TbTrashXFilled
              onClick={() => handleDelete(el.id)}
              className="text-[28px] cursor-pointer"
            />
          </section>
        </section>
      ))}
    </section>
  );
};

export default ListTodo;
