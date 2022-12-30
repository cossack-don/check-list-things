import * as React from 'react';
import './style.css';
import styled from 'styled-components';
import { Counter } from './src/store/features/counter/Counter';

import Header from './Header';
import Footer from './Footer';
import Routers from './src/routers';
import { Column, TypographyTitle, Spinner, Stepper } from './src/UI';
const TestStyledComponent = styled.div`
  background:red;
  color:var(--text)
`;
import { StepsApp } from './src/UI/Stepper';
import { useActiveStep } from './src/hooks';
export default function App() {
  const [step, nextStep] = useActiveStep(StepsApp, 0) as any;
  const titles = StepsApp.map((item, index) => {
    return <div key={index}>{index === step && item.title}</div>;
  });
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
      {titles} надо чтобы общий стор был со степпером, а не локальный
      <Header />
      <Routers />
      <Stepper />
      <Footer />
    </div>
  );
}
