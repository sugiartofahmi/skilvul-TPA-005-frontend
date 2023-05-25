import { Fragment } from "react";
import TextField from "@/components/atoms/TextField";
import Button from "@/components/atoms/Button";
import { PropTypes } from "prop-types";

const InputField = ({ onChange, onClick, value, text }) => {
  return (
    <Fragment>
      <TextField
        value={value}
        onChange={onChange}
        name="inputTodo"
        placeholder="What to do"
      />
      <Button
        onClick={onClick}
        text={text}
        className="w-1/5 flex items-center justify-center bg-[#6459F5] hover:bg-[#4134f8] md:text-[18px] text-[14px] focus:outline-none   rounded text-white font-bold p-2 "
      />
    </Fragment>
  );
};

InputField.propTypes = {
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  text: PropTypes.string,
};

export default InputField;
