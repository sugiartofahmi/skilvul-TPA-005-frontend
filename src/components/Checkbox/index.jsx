import { PropTypes } from "prop-types";

const Checkbox = ({ value, isChecked, handleChange }) => {
  return (
    <input
      value={value}
      checked={isChecked}
      onChange={handleChange}
      type="checkbox"
      className="cursor-pointer md:w-7 w-5  md:h-7 h-5 focus:ring-0 accent-gray-500 "
    />
  );
};

Checkbox.propTypes = {
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default Checkbox;
