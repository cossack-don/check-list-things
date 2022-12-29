import * as React from 'react';
import { Button } from '../../src/UI';

import ListGenders from '../../src/modules/gender/components/ListGenders';
export default function Gender() {
  return (
    <div>
      <ListGenders />
      <Button toUrl="/period" typeLink>
        Продолжить
      </Button>
    </div>
  );
}
