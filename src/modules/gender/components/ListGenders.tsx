import * as React from 'react';
import { CardRadioButton, WrapperCardsRadioButtons } from '../../../../src/UI';
import { usePickActiveCardRadio } from '../../../hooks';

interface IDataCards {
  id: number;
  value: string;
  text: string;
}

const dataCards: IDataCards[] = [
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
export default function ListGenders() {
  const [value, onChangeRadio] = usePickActiveCardRadio('man');

  const cards = dataCards.map((item) => {
    return (
      <CardRadioButton
        key={item.id}
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
