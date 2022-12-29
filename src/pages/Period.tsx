import * as React from 'react';
import { Button } from '../../src/UI';
import ListDays from '../../src/modules/period/components/ListDays';

export default function Period() {
  return (
    <div>
      <ListDays />

      <Button toUrl="/season" typeLink>
        Продолжить
      </Button>
    </div>
  );
}
