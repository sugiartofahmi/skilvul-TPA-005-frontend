import { PropTypes } from "prop-types";

const TextField = ({ placeholder, onChange, value }) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className=" text-[#293845] placeholder:md:text-[18px] placeholder:text-[15px] capitalize w-4/5 border-2 border-[#CFD7DC] rounded p-2 placeholder:font-bold placeholder:text-[#c6d0d6]  focus:outline-none focus:ring-0"
      placeholder={placeholder}
      type="text"
    />
  );
};

TextField.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextField;
