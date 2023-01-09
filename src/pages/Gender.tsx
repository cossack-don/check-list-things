import * as React from 'react';
import { Button } from '../../src/UI';

import type { RootState } from '../../src/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { changeStatusStep } from '../../src/store/features/steps/steps';
import { increment } from '../../src/store/features/counter/counterSlice';
import ListCards from '../../src/components/ListCards';

const dataCards = [
  {
    id: 1,
    value: 'man',
    text: 'Мужчина',
  },
  {
    id: 2,
    value: 'woman',
    text: 'Женщина',
  },
];

export default function Gender() {
  const dispatch = useDispatch();
  const [isActiveValue, setActiveValue] = React.useState('man');
  const count = useSelector((state: RootState) => state.counter.value);

  const handleStep = () => {
    dispatch(increment());
    dispatch(changeStatusStep('GENDER'));
  };
  return (
    <div>
      <ListCards
        setActiveValue={setActiveValue}
        listData={dataCards}
        defaultValue={isActiveValue}
      />
      {isActiveValue}
      {count}
      {/* выводит man/woman падает ошибка в list card - править */}
      <Button toUrl="/period" typeLink onClick={handleStep}>
        Продолжить
      </Button>
    </div>
  );
}
