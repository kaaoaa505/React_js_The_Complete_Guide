import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import useCounterHook from '../../hooks/useCounterHook';


const BackwardCounter = () => {
  return <Card>{useCounterHook(-1)}</Card>;
};

export default BackwardCounter;
