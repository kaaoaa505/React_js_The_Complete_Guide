import React from 'react';

const TextStaticMemo = (props: any) => {
    console.log('TextStaticMemo is running...');

    return (
        <div className="TextStaticMemo">
            <p>This is new static text from TextStaticMemo component</p>
        </div>
    );
};

export default React.memo(TextStaticMemo);