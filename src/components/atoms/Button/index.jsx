import { PropTypes } from "prop-types";
const Button = ({ text, handleClick, style }) => {
  return (
    <button onClick={handleClick} className={style}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
