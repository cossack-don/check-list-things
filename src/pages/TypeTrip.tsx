import * as React from 'react';
import { Button } from '../../src/UI';

import { useDispatch } from 'react-redux';
import { changeStatusStep } from '../../src/store/features/steps/steps';

import ListCards from '../../src/components/ListCards';

const dataCards = [
  {
    id: 1,
    text: 'Пляж',
    value: 'beach',
  },
  {
    id: 2,
    text: 'Командировка',
    value: 'errand',
  },
  {
    id: 3,
    text: 'Экскурсия',
    value: 'excursion',
  },
  {
    id: 4,
    text: 'Поход с палатками',
    value: 'expedition',
  },
  {
    id: 5,
    text: 'В Краснодар',
    value: 'krasnodar',
  },
];
export default function TypeTrip() {
  const dispatch = useDispatch();

  const changeStatusSteps = () => {
    dispatch(changeStatusStep('TYPE_TRIP'));
    dispatch(changeStatusStep('LIST_THINGS'));
  };
  return (
    <div>
      <ListCards listData={dataCards} defaultValue="krasnodar" />
      <Button toUrl="/list-things" typeLink onClick={changeStatusSteps}>
        Продолжить
      </Button>
    </div>
  );
}
