import * as React from 'react';
import { Button } from '../../src/UI';

import { useDispatch } from 'react-redux';
import { changeStatusStep } from '../../src/store/features/steps/steps';

import ListCards from '../../src/components/ListCards';
const dataCards = [
  {
    id: 1,
    value: '1 day',
    text: '1 день',
  },
  {
    id: 2,
    value: '3 day',
    text: '3 дня',
  },

  {
    id: 3,
    value: '7 days',
    text: '7 дней',
  },

  {
    id: 4,
    value: '14 days',
    text: '14 дней',
  },

  {
    id: 5,
    value: '30 days',
    text: '30 дней',
  },
];
export default function Period() {
  const [isActiveValue, setActiveValue] = React.useState('1 day');
  const dispatch = useDispatch();

  return (
    <div>
      <ListCards
        setActiveValue={setActiveValue}
        listData={dataCards}
        defaultValue={isActiveValue}
      />
      {isActiveValue}
      <Button
        toUrl="/season"
        typeLink
        onClick={() => dispatch(changeStatusStep('PERIOD'))}
      >
        Продолжить
      </Button>
    </div>
  );
}
