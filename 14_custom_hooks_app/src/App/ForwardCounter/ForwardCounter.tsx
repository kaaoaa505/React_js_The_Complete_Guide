import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import useCounterHook from '../../hooks/useCounterHook';

const ForwardCounter = () => {
  return <Card>{useCounterHook(2)}</Card>;
};

export default ForwardCounter;