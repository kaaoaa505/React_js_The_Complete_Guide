import './FormInputs.scss';

import { useState } from 'react';

import InvestmentDataInterface from '../_core/interfaces/InvestmentDataInterface';

const initial_investment_data: InvestmentDataInterface = {
    current_savings: 10000,
    yearly_contribution: 1200,
    expected_return: 7,
    investment_duration: 10,
};

const FormInputs = (props: any) => {
    const [investment_data, $investment_data] = useState({
        ...initial_investment_data
    });

    const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onCalculate(investment_data);
    };

    const formReset = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        $investment_data((_previous_data: InvestmentDataInterface) => {
            return {
                ...initial_investment_data
            };
        });
    };

    const inputChange = (input: string, value: number) => {
        $investment_data((previous_data: InvestmentDataInterface) => {
            return {
                ...previous_data,
                [input]: value
            };
        });
    };

    return (
        <div className='FormInputs'>
            <form onSubmit={formSubmit} onReset={formReset} className="form">
                <div className="input-group">
                    <p>
                        <label htmlFor="current_savings">Current Savings <br /> ($)</label>
                        <input onChange={
                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                inputChange('current_savings', Number(event.target.value))
                            }
                        } type="number" placeholder='0' id="current_savings" value={investment_data.current_savings} />
                    </p>
                    <p>
                        <label htmlFor="yearly_contribution">Yearly Savings <br /> ($)</label>
                        <input onChange={
                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                inputChange('yearly_contribution', Number(event.target.value))
                            }
                        } type="number" placeholder='0' id="yearly_contribution" value={investment_data.yearly_contribution} />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected_return">
                            Expected Interest <br /> (% per year)
                        </label>
                        <input onChange={
                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                inputChange('expected_return', Number(event.target.value))
                            }
                        } type="number" placeholder='0' min={0} max={100} step={0.01} id="expected_return" value={investment_data.expected_return} />
                    </p>
                    <p>
                        <label htmlFor="investment_duration">Investment Duration <br /> (years)</label>
                        <input onChange={
                            (event: React.ChangeEvent<HTMLInputElement>) => {
                                inputChange('investment_duration', Number(event.target.value))
                            }
                        } type="number" placeholder='0' id="investment_duration" value={investment_data.investment_duration} />
                    </p>
                </div>
                <p className="actions">
                    <button type="reset" className="button-alt">
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    )
};

export default FormInputs;