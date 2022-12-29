import * as React from 'react';
import { Button } from '../../src/UI';

import ListCards from '../../src/components/ListCards';

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
  return (
    <div>
      <ListCards listData={dataCards} defaultValue="spring" />
      <Button toUrl="/type-trip" typeLink>
        Продолжить
      </Button>
    </div>
  );
}
