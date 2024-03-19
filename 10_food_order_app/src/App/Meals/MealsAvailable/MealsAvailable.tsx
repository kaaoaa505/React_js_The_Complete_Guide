import './MealsAvailable.scss';

import MealItem from "../MealItem/MealItem";
import MEALS_EXAMPLES from "../../../components/Examples/MEALS_EXAMPLES";
import Card from "../../../components/UI/Card/Card";

const MealsAvailable = () => {
    const meals_list = MEALS_EXAMPLES.map(meal =>
        <li key={meal.id}>
            <MealItem meal={meal} />
        </li>
    );

    return (
        <section className="MealsAvailable">
            <Card>
                <ul>
                    {meals_list}
                </ul>
            </Card>
        </section>
    )
}

export default MealsAvailable;