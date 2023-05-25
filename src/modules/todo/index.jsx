import MainLayout from "@/components/templates/MainLayout";
import ContentLayout from "@/components/templates/ContentLayout";
import InputField from "@/components/molecules/InputField";
import Button from "@/components/atoms/Button";
import Checkbox from "@/components/atoms/Checkbox";
import { TbTrashXFilled } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";

const TodoApp = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  console.log(todos);
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
    <MainLayout>
      <ContentLayout>
        <h1 className="text-[#293845] md:text-[29px] text-[23px] font-extrabold">
          What's the plan for today?
        </h1>
        <div className="flex flex-col w-full md:gap-y-[45px] gap-y-[35px] ">
          <div className="flex flex-row w-full md:gap-x-[20px] gap-x-[10px]">
            <InputField />
          </div>
          <div className="flex flex-col w-full gap-y-[20px] ">
            <div className="flex flex-row gap-x-[20px]">
              {selectFilter.map((el, i) => (
                <Button
                  key={i}
                  text={el.filter}
                  style={`md:text-[12px] text-[11px]  font-bold py-1 px-3 rounded-full text-white ${
                    el.filter == "ALL" ? `bg-[#1BAF9F]` : `bg-[#788997]`
                  }`}
                />
              ))}
            </div>
            <div className="flex flex-col w-full h-full md:gap-y-[20px] gap-y-[10px]">
              <div className="border-2 border-[#CFD7DC] md:h-[55px] h-[50px] flex justify-between items-center px-4 text-[#4B5C6B] w-full">
                <div className="flex items-center md:gap-x-[10px] gap-x-[8px]">
                  <Checkbox />
                  {/* <h1
              className={`font-semibold capitalize md:w-[250px] w-[200px] line-clamp-1 md:text-[17px] text-[15px]  ${
                el.completed && `line-through decoration-2`
              } `}
            >
              Learn react redux
            </h1> */}
                  <h1 className="font-semibold capitalize md:w-[250px] w-[200px] line-clamp-1 md:text-[17px] text-[15px]">
                    Learn react redux
                  </h1>
                </div>
                <div className="flex flex-row items-center md:gap-x-[5px] gap-x-[3px]">
                  <RiPencilFill className="md:text-[28px] text-[23px] cursor-pointer" />
                  <TbTrashXFilled className="md:text-[28px] text-[23px] cursor-pointer" />
                </div>
              </div>
              <div className="border-2 border-[#CFD7DC] md:h-[55px] h-[50px] flex justify-between items-center px-4 text-[#4B5C6B] w-full">
                <div className="flex items-center md:gap-x-[10px] gap-x-[8px]">
                  <Checkbox isChecked={true} />
                  <h1
                    className={`font-semibold capitalize md:w-[250px] w-[200px] line-clamp-1 md:text-[17px] text-[15px]  ${`line-through decoration-2`} `}
                  >
                    Learn react redux
                  </h1>
                </div>
                <div className="flex flex-row items-center md:gap-x-[5px] gap-x-[3px]">
                  {/* <RiPencilFill
                    onClick={() => handleGetData(el.id, el.todo)}
                    className="md:text-[28px] text-[23px] cursor-pointer"
                  /> */}
                  <TbTrashXFilled className="md:text-[28px] text-[23px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentLayout>
    </MainLayout>
  );
};

export default TodoApp;
