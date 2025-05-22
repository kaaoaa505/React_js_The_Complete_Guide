import './Section.scss';

const Section = (props: any) => {
  return <section className="Section">{props.children}</section>;
};

export default Section;