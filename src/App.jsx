import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import { TbTrashXFilled } from "react-icons/tb";
import { RiPencilFill } from "react-icons/ri";
const App = () => {
  return (
    <MainLayout>
      <ContentLayout>
        <h1 className="text-[#293845] text-[29px] font-extrabold">
          What's the plan for today ?
        </h1>
        <section className="flex flex-col w-full gap-y-[45px] ">
          <section className="flex flex-row w-full gap-x-[20px]">
            <input
              className=" text-[#293845] capitalize w-4/5 border-2 border-[#CFD7DC] rounded p-2 placeholder:font-bold placeholder:text-[#c6d0d6]  focus:outline-none focus:ring-0"
              placeholder="What to do"
              type="text"
            />

            <button className="w-1/5 bg-[#6459F5] hover:bg-[#4134f8]   rounded text-white font-bold p-2">
              Add
            </button>
          </section>
          <section className="flex flex-col w-full gap-y-[20px] ">
            <section className="flex flex-row gap-x-[20px]">
              <button className="text-xs font-bold py-1 px-3 bg-[#1BAF9F] rounded-full text-white">
                ALL
              </button>
              <button className="text-xs font-bold py-1 px-2 bg-[#788997] rounded-full text-white">
                ACTIVE
              </button>
              <button className="text-xs font-bold py-1 px-2 bg-[#788997] rounded-full text-white">
                COMPLETED
              </button>
            </section>
            <section className="flex flex-col w-full ">
              <section className="border-2 border-[#CFD7DC] h-[55px] flex justify-between items-center px-4 text-[#4B5C6B]">
                <section className="flex items-center gap-x-[10px]">
                  <input
                    type="checkbox"
                    class="cursor-pointer w-7 h-7 focus:ring-0 accent-gray-500 "
                  />
                  <h1 className="font-semibold">Buy Milk</h1>
                </section>
                <section className="flex items-center gap-x-[5px]">
                  <RiPencilFill className="text-[28px] cursor-pointer" />
                  <TbTrashXFilled className="text-[28px] cursor-pointer" />
                </section>
              </section>
              <section className="border-2 border-[#CFD7DC] h-[55px] flex justify-between items-center px-4 text-[#4B5C6B]">
                <section className="flex items-center gap-x-[10px]">
                  <input
                    checked
                    type="checkbox"
                    class="cursor-pointer w-7 h-7 focus:ring-0 accent-gray-500"
                  />
                  <h1 className="font-semibold line-through decoration-2">
                    Buy Egg
                  </h1>
                </section>
                <section className="flex items-center gap-x-[5px]">
                  {/* <RiPencilFill className="text-[28px] cursor-pointer " />
                  <TbTrashXFilled className="text-[28px] cursor-pointer" /> */}
                </section>
              </section>
              <section className="border-2 border-[#CFD7DC] h-[55px] flex justify-between items-center px-4 text-[#4B5C6B]">
                <section className="flex items-center gap-x-[10px]">
                  <input
                    type="checkbox"
                    class="cursor-pointer w-7 h-7 focus:ring-0 accent-gray-500"
                  />
                  <h1 className="font-semibold">Buy T-Shirt</h1>
                </section>
                <section className="flex items-center gap-x-[5px]">
                  <RiPencilFill className="text-[28px] cursor-pointer" />
                  <TbTrashXFilled className="text-[28px] cursor-pointer" />
                </section>
              </section>
            </section>
          </section>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};

export default App;
