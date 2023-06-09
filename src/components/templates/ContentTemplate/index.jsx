import { PropTypes } from "prop-types";
const ContentTemplate = ({ children }) => {
  return (
    <section className=" min-h-screen md:pt-[100px] pt-[50px] md:w-[400px] w-[330px] flex flex-col md:gap-y-[90px] gap-y-[70px] items-center pb-[30px] overflow-auto">
      {children}
    </section>
  );
};

ContentTemplate.propTypes = {
  children: PropTypes.node,
};

export default ContentTemplate;
