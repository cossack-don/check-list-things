import * as React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.label`
display:flex;
`;

const CheckboxStyled = styled.input`

`;
export default function Checkbox({ children, defaultValue, onChange }) {
  const [checked, setChecked] = React.useState(defaultValue);

  const handleOnChange = () => {
    setChecked(!checked);
    onChange?.(!checked);
  };

  return (
    <ContainerStyled>
      <CheckboxStyled
        type="checkbox"
        checked={checked}
        onChange={handleOnChange}
      />

      {children}
    </ContainerStyled>
  );
}
