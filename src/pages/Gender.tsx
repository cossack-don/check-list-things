import * as React from 'react';
import { Button } from '../../src/UI';

import { useDispatch } from 'react-redux';
import { changeStatusStep } from '../../src/store/features/steps/steps';

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
  return (
    <div>
      <ListCards
        setActiveValue={setActiveValue}
        listData={dataCards}
        defaultValue="man"
      />
      {isActiveValue}
      {/* выводит man/woman падает ошибка в list card - править */}
      <Button
        toUrl="/period"
        typeLink
        onClick={() => dispatch(changeStatusStep('GENDER'))}
      >
        Продолжить
      </Button>
    </div>
  );
}
