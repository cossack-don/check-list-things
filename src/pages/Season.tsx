import * as React from 'react';
import { Button } from '../../src/UI';

import ListCards from '../../src/components/ListCards';

import { increment } from '../../src/store/features/counter/counterSlice';
import { useDispatch } from 'react-redux';
import { changeStatusStep } from '../../src/store/features/steps/steps';

const dataCards = [
  {
    id: 1,
    text: 'Весна',
    value: 'spring',
  },
  {
    id: 2,
    text: 'Лето',
    value: 'summer',
  },
  {
    id: 3,
    text: 'Осень',
    value: 'autumn',
  },
  {
    id: 4,
    text: 'Зима',
    value: 'winter',
  },
];
export default function Season() {
  const dispatch = useDispatch();
  const [isActiveValue, setActiveValue] = React.useState('spring');

  const handleStep = () => {
    dispatch(increment());
    dispatch(changeStatusStep('SEASON'));
  };
  return (
    <div>
      <ListCards
        setActiveValue={setActiveValue}
        listData={dataCards}
        defaultValue={isActiveValue}
      />
      {isActiveValue}
      <Button toUrl="/type-trip" typeLink onClick={handleStep}>
        Продолжить
      </Button>
    </div>
  );
}
