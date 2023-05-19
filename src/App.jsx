import MainLayout from "./layouts/MainLayout";
import ContentLayout from "./layouts/ContentLayout";
import InputTodo from "./modules/InputTodo";
import ListTodo from "./modules/ListTodo";
import { useState } from "react";

const App = () => {
  const [id, setId] = useState(0);
  const [todo, setTodo] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const getTodo = (id, todo) => {
    setId(id);
    setTodo(todo);
    setIsUpdate(true);
  };

  const updateDone = () => setIsUpdate(false);

  return (
    <MainLayout>
      <ContentLayout>
        <h1 className="text-[#293845] md:text-[29px] text-[23px] font-extrabold">
          What's the plan for today ?
        </h1>
        <section className="flex flex-col w-full md:gap-y-[45px] gap-y-[35px] ">
          <InputTodo
            id={id}
            todoUpdate={todo}
            isUpdate={isUpdate}
            done={updateDone}
          />

          <ListTodo getTodo={getTodo} />
        </section>
      </ContentLayout>
    </MainLayout>
  );
};

export default App;
