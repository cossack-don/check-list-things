import * as React from 'react';
import { Column, TypographyText, Checkbox } from '../../src/UI';

interface IListCheckboxs {
  id: number;
  checked: boolean;
  text: string;
}

const listDataCheckboxs = [
  { id: 1, checked: false, text: 'first' },
  {
    id: 2,
    checked: true,
    text: 'second',
  },
  { id: 3, checked: true, text: 'thid' },
];

export default function ListThings() {
  const [value, setValue] = React.useState<IListCheckboxs[]>(listDataCheckboxs);

  const handleOnChange = (e, index) => {
    value[index].checked = e;
    console.log(value);
  };
  const listCheckboxs = value.map((item, index) => {
    return (
      <Checkbox
        key={item.id}
        defaultValue={item.checked}
        onChange={(e) => handleOnChange(e, index)}
      >
        <TypographyText>{item.text}</TypographyText>
      </Checkbox>
    );
  });

  return (
    <div style={{ display: 'flex' }}>
      <Column>
        {listCheckboxs}
        {/* <Checkbox defaultValue={value[0].n} onChange={handleOnChange}>
          <TypographyText>Название вещи</TypographyText>
        </Checkbox>

        <Checkbox defaultValue={value[1].n} onChange={handleOnChange}>
          <TypographyText>Название вещи</TypographyText>
        </Checkbox> */}
        {/* 
        <Checkbox>
          <TypographyText>Название вещи</TypographyText>
        </Checkbox>

        <Checkbox>
          <TypographyText>Название вещи</TypographyText>
        </Checkbox>
      </Column>
      <Column>
        <Checkbox>
          <TypographyText>Название вещи</TypographyText>
        </Checkbox>

        <Checkbox>
          <TypographyText>Название вещи</TypographyText>
        </Checkbox>

        <Checkbox>
          <TypographyText>Название вещи</TypographyText>
        </Checkbox>

        <Checkbox>
          <TypographyText>Название вещи</TypographyText>
        </Checkbox> */}
      </Column>
    </div>
  );
}
