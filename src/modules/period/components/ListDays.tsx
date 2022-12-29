import * as React from 'react';
import { usePickActiveCardRadio } from '../../../hooks';
import { CardRadioButton, WrapperCardsRadioButtons } from '../../../../src/UI';

interface IDataCards {
  id: number;
  value: string;
  text: string;
}

const dataCards: IDataCards[] = [
  {
    id: 1,
    value: '1 day',
    text: '1 день',
  },
  {
    id: 2,
    value: '3 day',
    text: '3 дня',
  },

  {
    id: 3,
    value: '7 days',
    text: '7 дней',
  },

  {
    id: 4,
    value: '14 days',
    text: '14 дней',
  },

  {
    id: 5,
    value: '30 days',
    text: '30 дней',
  },
];

export default function ListDays() {
  const [value, onChangeRadio] = usePickActiveCardRadio('1 day');

  const cards = dataCards.map((item) => {
    return (
      <CardRadioButton
        onChange={onChangeRadio}
        defaultValue={item.value}
        isActive={value}
      >
        {item.text}
      </CardRadioButton>
    );
  });

  return <WrapperCardsRadioButtons>{cards}</WrapperCardsRadioButtons>;
}
