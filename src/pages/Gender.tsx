import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Column,
  TypographyTitle,
  Spinner,
  CardRadioButton,
  WrapperCardsRadioButtons,
  Button,
} from '../../src/UI';
export default function Gender() {
  const [value, setValue] = React.useState('red');
  const onRadioChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Button toUrl="/period" typeLink>
        s{/* <Link to="/period">На сколько дней</Link> */}
      </Button>
      Gender 1. шаг М-Ж 2. Сколько дней
      <WrapperCardsRadioButtons>
        <CardRadioButton
          onChange={onRadioChange}
          defaultValue="red"
          isActive={value}
        >
          Man
        </CardRadioButton>
        <CardRadioButton
          onChange={onRadioChange}
          defaultValue="blue"
          isActive={value}
        >
          Woman
        </CardRadioButton>
      </WrapperCardsRadioButtons>
    </div>
  );
}
