import './Card.scss';

const Card = (props: any) => {
    return (
        <div className="Card">
            {props.children}
        </div>
    )
}

export default Card;