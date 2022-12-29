import * as React from 'react';
import { Button } from '../../src/UI';

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
  return (
    <div>
      <ListCards listData={dataCards} defaultValue="man" />
      <Button toUrl="/period" typeLink>
        Продолжить
      </Button>
    </div>
  );
}
