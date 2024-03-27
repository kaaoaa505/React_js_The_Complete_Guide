import React, { useMemo } from 'react';

import './ListData.scss';

const ListData = (props: any) => {
    console.log('ListData is running...');

    const items = props.items;

    const sortedList = useMemo(() => {
        console.log('ListData items sorted.');
        return items.sort((a: number, b: number) => a - b);
    }, [items]);

    return (
        <div className='ListData'>
            <h2>{props.list_title}</h2>
            <ul>
                {sortedList.map((item: any) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(ListData);