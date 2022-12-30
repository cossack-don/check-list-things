import * as React from 'react';
import {
  Column,
  TypographyTitle,
  Spinner,
  Stepper,
  TypographyText,
  Checkbox,
} from '../../src/UI';
export default function ListThings() {
  const [value, setValue] = React.useState([
    {
      n: false,
    },
    {
      n: true,
    },
    {
      n: true,
    },
  ]) as any;
  // React.useEffect(() => {
  //   console.log(value);
  // }, [value]);
  const handleOnChange = (e) => {
    // value.forEach((item) => {
    //   // setValue({ ...value.n, n: item.n });
    //   // console.log(item.n);

    // });

    console.log(value, 11);
    // setValue(!value);
  };
  const test = value.map((item, index) => {
    return (
      <Checkbox key={index} defaultValue={item.n} onChange={handleOnChange}>
        <TypographyText>Название вещи</TypographyText>
      </Checkbox>
    );
  });

  return (
    <div style={{ display: 'flex' }}>
      <Column>
        {test}
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
