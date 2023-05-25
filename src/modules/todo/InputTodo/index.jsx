import InputField from "@/components/molecules/InputField";
import { PropTypes } from "prop-types";
const InputTodo = ({ text, onClick, value, onChange }) => {
  return (
    <InputField
      text={text}
      onClick={onClick}
      value={value}
      onChange={onChange}
    />
  );
};

InputTodo.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default InputTodo;
