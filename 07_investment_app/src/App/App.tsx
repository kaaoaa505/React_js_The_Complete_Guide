import './App.scss';

import { useState } from 'react';

import Header from './_components/Header/Header';
import InvestmentResultInterface from './_core/interfaces/InvestmentResultInterface';
import FormInputs from './FormInputs/FormInputs';
import ResultDisplay from './ResultDisplay/ResultDisplay';

const initial_investment_result: InvestmentResultInterface[] = [];

function App() {
  const [investment_result, $investment_result] = useState(initial_investment_result);
  const [initial_investment, $initial_investment] = useState(0);

  const calculate = (investment_data: any) => {
    let result: InvestmentResultInterface[] = [];

    let current_savings = +investment_data['current_savings'];
    $initial_investment(current_savings);
    const yearly_contribution = +investment_data['yearly_contribution'];
    const expected_return = +investment_data['expected_return'] / 100;
    const investment_duration = +investment_data['investment_duration'];

    for (let i = 0; i < investment_duration; i++) {
      const yearly_interest = current_savings * expected_return;
      current_savings += yearly_interest + yearly_contribution;

      result.push({
        year: i + 1,
        yearly_interest: yearly_interest,
        savings_end_of_year: current_savings,
        yearly_contribution: yearly_contribution,
      });
    }

    $investment_result((_previous_investment_result: any) => {
      return {
        ...result
      };
    });
  };

  return (
    <div className="App">
      <Header />

      <FormInputs onCalculate={calculate} />

      {investment_result.length === 0 && <p>No investment available.</p>}
      {investment_result.length !== 0 && <ResultDisplay investment_result={investment_result} initial_investment={initial_investment} />}

    </div>
  );
}

export default App;
