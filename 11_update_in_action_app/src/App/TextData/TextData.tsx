import { useCallback, useState } from 'react';

import Button from '../UI/Button/Button';

const TextData = (props: any) => {
    console.log('TextData is running...');

    const [show_txt, $show_txt] = useState(false);

    const showText = useCallback(() => {
      $show_txt(true);
  
      setTimeout(() => {
        $show_txt(false);
      }, 3000)
    }, []);

    return (
        <div className="TextData">
            {show_txt && <p>This is new dynamic text from TextData component</p>}
            {!show_txt && <Button onClick={showText}>Show text data</Button>}
        </div>
    );
};

export default TextData;