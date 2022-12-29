import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ButtonStyled = styled.button`
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

const LinkStyled = styled(Link)`
padding:5px 35px;
border-radius:var(--border-radius);
border:1px solid blue;
background:red;
color:#111111;
`;

export default function Button({ children, toUrl, typeLink, typeButton }) {
  return (
    <div>
      {typeButton && <ButtonStyled>{children}</ButtonStyled>}

      {typeLink && <LinkStyled to={toUrl}>{children}</LinkStyled>}
    </div>
  );
}
