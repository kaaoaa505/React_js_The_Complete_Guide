import MEALS_EXAMPLES from "../../../components/Examples/MEALS_EXAMPLES/MEALS_EXAMPLES";

const MealsAvailable = () => {
    const meals_list = MEALS_EXAMPLES.map(meal =>
        <li>{meal.name}</li>
    )
    return (
        <section className="MealsAvailable">
            <ul>
                {meals_list}
            </ul>
        </section>
    )
}

export default MealsAvailable;