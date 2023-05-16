import { TbTrashXFilled } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
import Checkbox from "../../components/Checkbox";
const ListTodo = () => {
  return (
    <section className="flex flex-col w-full h-full gap-y-[20px]">
      <section className="border-2 border-[#CFD7DC] h-[55px] flex justify-between items-center px-4 text-[#4B5C6B]">
        <section className="flex items-center gap-x-[10px]">
          <Checkbox />
          <h1 className="font-semibold">Buy Milk</h1>
        </section>
        <section className="flex items-center gap-x-[5px]">
          <RiPencilFill className="text-[28px] cursor-pointer" />
          <TbTrashXFilled className="text-[28px] cursor-pointer" />
        </section>
      </section>
      <section className="border-2 border-[#CFD7DC] h-[55px] flex justify-between items-center px-4 text-[#4B5C6B]">
        <section className="flex items-center gap-x-[10px]">
          <Checkbox />
          <h1 className="font-semibold line-through decoration-2">Buy Egg</h1>
        </section>
        <section className="flex items-center gap-x-[5px]">
          {/* <RiPencilFill className="text-[28px] cursor-pointer " />
                  <TbTrashXFilled className="text-[28px] cursor-pointer" /> */}
        </section>
      </section>
      <section className="border-2 border-[#CFD7DC] h-[55px] flex justify-between items-center px-4 text-[#4B5C6B]">
        <section className="flex items-center gap-x-[10px]">
          <Checkbox />
          <h1 className="font-semibold">Buy T-Shirt</h1>
        </section>
        <section className="flex items-center gap-x-[5px]">
          <RiPencilFill className="text-[28px] cursor-pointer" />
          <TbTrashXFilled className="text-[28px] cursor-pointer" />
        </section>
      </section>
    </section>
  );
};

export default ListTodo;
