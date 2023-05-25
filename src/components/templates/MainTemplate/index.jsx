import { PropTypes } from "prop-types";
const MainTemplate = ({ children }) => {
  return (
    <main className="flex flex-col font-sora items-center w-full h-full ">
      {children}
    </main>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node,
};

export default MainTemplate;
