import './Meals.scss';

import MealsAvailable from "./MealsAvailable/MealsAvailable";
import MealsSummary from './MealsSummary/MealsSummary';

const Meals = () => {
    return (
        <section className="Meals">
            <MealsSummary />
            <MealsAvailable />
        </section>
    )
}

export default Meals;