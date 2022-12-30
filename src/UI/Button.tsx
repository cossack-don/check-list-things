import * as React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const baseStyle = css`
padding:5px 35px;
border-radius:var(--border-radius);
border:1px solid blue;
background:red;
color:#111111;

&:hover{
  cursor:pointer;
  transition:0.5s;
  border:1px solid red;
  background:blue;
}
`;

const ButtonStyled = styled.button`
  ${baseStyle}
`;

const LinkStyled = styled(Link)`
  ${baseStyle}
`;

interface Props {
  children?: string;
  toUrl?: string;
  typeLink?: boolean;
  typeButton?: boolean;
  onClick?: (payload: string) => void;
}

export default function Button({
  children,
  toUrl,
  typeLink,
  typeButton,
  onClick,
}: Props) {
  return (
    <div>
      {typeButton && <ButtonStyled onClick={onClick}>{children}</ButtonStyled>}

      {typeLink && (
        <LinkStyled to={toUrl} onClick={onClick}>
          {children}
        </LinkStyled>
      )}
    </div>
  );
}
