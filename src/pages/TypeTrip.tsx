import * as React from 'react';
import { Button } from '../../src/UI';

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
    id: 4,
    text: 'В Краснодар',
    value: 'krasnodar',
  },
];
export default function TypeTrip() {
  return (
    <div>
      <ListCards listData={dataCards} defaultValue="krasnodar" />
      <Button toUrl="/list-things" typeLink>
        Продолжить
      </Button>
    </div>
  );
}
