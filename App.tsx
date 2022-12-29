import * as React from 'react';
import './style.css';
import styled from 'styled-components';
import { Counter } from './src/store/features/counter/Counter';

import Header from './Header';
import Footer from './Footer';
import Routers from './src/routers';
import { Column, TypographyTitle, Spinner } from './src/UI';
const TestStyledComponent = styled.div`
  background:red;
  color:var(--text)
`;

export default function App() {
  return (
    <div>
      {/* <TestStyledComponent>22</TestStyledComponent> */}
      {/* example styled-components */}
      {/* <Counter /> */}
      {/* example store - Counter */}
      {/* <Spinner /> */}
      {/* UIKIT */}
      {/* <Column>
        <TypographyTitle text="2" />
        checkbox
      </Column> */}
      <Header />
      <Routers />
      <Footer />
    </div>
  );
}
