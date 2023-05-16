import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import InputTodo from "./modules/InputTodo";
import FilterTodo from "./modules/FilterTodo";
import ListTodo from "./modules/ListTodo";
const App = () => {
  return (
    <MainLayout>
      <ContentLayout>
        <h1 className="text-[#293845] text-[29px] font-extrabold">
          What's the plan for today ?
        </h1>
        <section className="flex flex-col w-full gap-y-[45px] ">
          <InputTodo />
          <section className="flex flex-col w-full gap-y-[20px] ">
            <FilterTodo />
            <ListTodo />
          </section>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};

export default App;
