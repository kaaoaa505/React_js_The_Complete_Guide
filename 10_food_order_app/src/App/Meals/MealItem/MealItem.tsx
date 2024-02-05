import './MealItem.scss';

const MealItem = (props: any) => {
    return (
        <div className='MealItem'>
            <h3>{props.meal.name}</h3>
            <p>{props.meal.description}</p>
            <span><b>$</b>{props.meal.price.toFixed(2)}</span>
        </div>
    )
}

export default MealItem;