import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  gap:40px;
  display:flex;
  flex-wrap:wrap;
`;
export default function WrapperCardsRadioButtons({ children }) {
  return <Container>{children}</Container>;
}
