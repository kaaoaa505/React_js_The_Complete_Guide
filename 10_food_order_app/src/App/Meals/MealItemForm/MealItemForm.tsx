import Input from '../../../components/UI/Input/Input';
import './MealItemForm.scss';

const MealItemForm = () => {
    return (
        <form className='MealItemForm'>
            <Input label='Amount' attr={
                {
                    id: 'amount',
                    type: 'number',
                    min: 1,
                    max: 5,
                    step: 1,
                    defaultValue: 1
                }
            } />
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm;