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

const data = {
  step_1: {
    woman: [1, 2, 3, 4],
    man: [1, 2, 3, 4, 33333],
  },
};

export default function ListThings() {
  const [value, setValue] = React.useState<IListCheckboxs[]>(listDataCheckboxs);
  // const count = useSelector((state: RootState) => state.steps);
  const handleOnChange = (e, index) => {
    value[index].checked = e;
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
      <Column>{listCheckboxs}</Column>
      <Column>{listCheckboxs}</Column>
      <Column>{listCheckboxs}</Column>
    </div>
  );
}
