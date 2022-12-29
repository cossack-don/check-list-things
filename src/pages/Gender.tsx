import * as React from 'react';
import {
  CardRadioButton,
  WrapperCardsRadioButtons,
  Button,
} from '../../src/UI';
import { usePickActiveCardRadio } from '../hooks';

export default function Gender() {
  const [value, onChangeRadio] = usePickActiveCardRadio('red');

  return (
    <div>
      Gender 1. шаг М-Ж 2. Сколько дней
      <WrapperCardsRadioButtons>
        <CardRadioButton
          onChange={onChangeRadio}
          defaultValue="red"
          isActive={value}
        >
          Man
        </CardRadioButton>
        <CardRadioButton
          onChange={onChangeRadio}
          defaultValue="blue"
          isActive={value}
        >
          Woman
        </CardRadioButton>
      </WrapperCardsRadioButtons>
      <Button toUrl="/period" typeLink>
        Продолжить
      </Button>
    </div>
  );
}
