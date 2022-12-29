import * as React from 'react';
import { usePickActiveCardRadio } from '../hooks';
import { CardRadioButton, WrapperCardsRadioButtons } from '../../src/UI';

interface IDataCards {
  id: number;
  value: string;
  text: string;
}

interface Props {
  listData: IDataCards[];
  defaultValue: string;
}

export default function ListDays({ listData, defaultValue }: Props) {
  const [value, onChangeRadio] = usePickActiveCardRadio(defaultValue);

  const cards = listData.map((item) => {
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
