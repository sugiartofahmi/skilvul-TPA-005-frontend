import { Fragment } from "react";
import TextField from "@/components/atoms/TextField";
import Button from "@/components/atoms/Button";

const InputField = () => {
  return (
    <Fragment>
      <TextField name="inputTodo" placeholder="What to do" />
      <Button
        text="Add"
        style="w-1/5 bg-[#6459F5] hover:bg-[#4134f8] md:text-[18px] text-[15px] focus:outline-none   rounded text-white font-bold p-2 "
      />
    </Fragment>
  );
};

export default InputField;
