import './Card.scss';

const Card = (props: any) => {
  return (
    <div className={`Card ${props.className}`}>{props.children}</div>
  );
};

export default Card;
