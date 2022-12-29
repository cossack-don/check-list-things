import * as React from 'react';
import styled from 'styled-components';

const ContainerCardRadioButton = styled.label<{ activeButton: boolean }>`
  width:100px;
  height:100px;
  border:${(props) =>
    props.activeButton ? 'solid 3px blue' : 'solid 3px red'};
  border-radius var( --border-radius);
  padding:15px;
  
  display: flex;
    justify-content: center;
    align-items: center;
  
  transition:0.5s;

  &:hover {
    cursor:pointer;
  }
`;

interface Props {
  defaultValue: string;
  isActive: string;
  onChange: any;
  children: any;
}

export default function CardRadioButton({
  children,
  defaultValue,
  isActive,
  onChange,
}: Props) {
  return (
    <ContainerCardRadioButton activeButton={defaultValue === isActive}>
      {children}

      <input
        type="radio"
        onChange={onChange}
        value={defaultValue}
        checked={defaultValue === isActive}
      />
    </ContainerCardRadioButton>
  );
}
