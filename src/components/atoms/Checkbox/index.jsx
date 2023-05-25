import { PropTypes } from "prop-types";

const Checkbox = ({ value, checked, onChange }) => {
  return (
    <input
      value={value}
      checked={checked}
      onChange={onChange}
      type="checkbox"
      className="cursor-pointer md:w-7 w-5  md:h-7 h-5 focus:ring-0 accent-gray-500 "
    />
  );
};

Checkbox.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
