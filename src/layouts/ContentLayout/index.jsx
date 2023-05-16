import { PropTypes } from "prop-types";
const ContentLayout = ({ children }) => {
  return (
    <section className=" min-h-screen pt-[100px] w-[400px] flex flex-col gap-y-[90px] items-center">
      {children}
    </section>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node,
};

export default ContentLayout;
