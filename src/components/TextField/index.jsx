import { PropTypes } from "prop-types";

const TextField = ({ text, handleChange, name }) => {
  return (
    <input
      onChange={handleChange}
      className=" text-[#293845] capitalize w-4/5 border-2 border-[#CFD7DC] rounded p-2 placeholder:font-bold placeholder:text-[#c6d0d6]  focus:outline-none focus:ring-0"
      placeholder={text}
      type="text"
      name={name}
    />
  );
};

TextField.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextField;
