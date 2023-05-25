import { PropTypes } from "prop-types";
const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col font-sora items-center w-full h-full ">
      {children}
    </main>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
