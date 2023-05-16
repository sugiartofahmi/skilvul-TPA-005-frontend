import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import InputTodo from "./modules/InputTodo";
import FilterTodo from "./modules/FilterTodo";
import ListTodo from "./modules/ListTodo";
import { useState } from "react";

const App = () => {
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const getTodo = (id, todo, isUpdate) => {
    setId(id);
    setTodo(todo);
    setIsUpdate(isUpdate);
  };

  const updateDone = (update) => {
    setIsUpdate(update);
  };

  return (
    <MainLayout>
      <ContentLayout>
        <h1 className="text-[#293845] text-[29px] font-extrabold">
          What's the plan for today ?
        </h1>
        <section className="flex flex-col w-full gap-y-[45px] ">
          <InputTodo
            id={id}
            todoUpdate={todo}
            isUpdate={isUpdate}
            done={updateDone}
          />
          <section className="flex flex-col w-full gap-y-[20px] ">
            <FilterTodo />
            <ListTodo getTodo={getTodo} />
          </section>
        </section>
      </ContentLayout>
    </MainLayout>
  );
};

export default App;
