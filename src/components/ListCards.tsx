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

  setActiveValue: any;
}

export default function ListCards({
  listData,
  defaultValue,

  setActiveValue,
}: Props) {
  const [value, onChangeRadio] = usePickActiveCardRadio(defaultValue);

  React.useEffect(() => {
    setActiveValue(value);
  }, [value]);

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
