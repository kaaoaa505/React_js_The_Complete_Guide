import './Button.scss';

import React from 'react';

const Button = (props: any) => {
  console.log('Button is running...');

  return (
    <button
      type={props.type || 'button'}
      className={`Button ${props.className ? props.className : ''}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
