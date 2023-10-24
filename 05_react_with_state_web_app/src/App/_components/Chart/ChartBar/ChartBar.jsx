import './ChartBar.css';

const ChartBar = (props) => {
    let height_fill = 0;

    if (props.max > 0) {
        height_fill = Math.round((props.point.value / props.max) * 100);
    }

    const fillStyle = {
        height: `${height_fill}%`,
        backgroundColor: 'green'
    };

    return (
        <div className="ChartBar">
            <div className='inner'>
                <div className='fill' style={fillStyle}>
                    {height_fill}%
                </div>
            </div>

            <div className='label'>
                {props.point.label}
                <br />
                    {props.point.value}

            </div>
        </div>
    )
}

export default ChartBar;