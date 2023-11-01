import './ResultDisplay.scss';

import InvestmentResultInterface from '../_core/interfaces/InvestmentResultInterface';

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const ResultDisplay = (props: any) => {
    let results: InvestmentResultInterface[] = props.investment_result ? props.investment_result : [];
    let total = 0;

    const formatNumber2dCommaSep = (n: number) => {
        return formatter.format(n);
    };

    return (
        <div className='ResultDisplay'>
            <table className="result">
                <thead>
                    <tr>
                        <th>Years</th>
                        <th>Total Savings</th>
                        <th>Interest per Year</th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(results).map((result: any, index: number) => (
                        <tr key={index}>
                            <td>{Number(results[result].year)}</td>
                            <td>{formatNumber2dCommaSep(results[result].savings_end_of_year)}</td>
                            <td>{formatNumber2dCommaSep(results[result].yearly_interest)}</td>
                            <td>{formatNumber2dCommaSep(results[result].savings_end_of_year - props.initial_investment - results[result].yearly_contribution * results[result].year)}</td>
                            <td>{formatNumber2dCommaSep(props.initial_investment + results[result].yearly_contribution * results[result].year)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default ResultDisplay;