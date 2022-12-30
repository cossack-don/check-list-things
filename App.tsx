import * as React from 'react';
import './style.css';
import styled from 'styled-components';
import { Counter } from './src/store/features/counter/Counter';

import type { RootState } from './src/store/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeStatusStep } from './src/store/features/steps/steps';

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

  //
  const count = useSelector((state: RootState) => state.steps);
  
  console.log(count);

  const stateSteps = count;
  return (
    <div>
      {count['GENDER'].name} - {count['GENDER'].status ? 'true' : 'false'}
      <br />
      {count['PERIOD'].name} - {count['PERIOD'].status ? 'true' : 'false'}
      <br />
      {count['SEASON'].name} - {count['SEASON'].status ? 'true' : 'false'}
      <br />
      {count['TYPE_TRIP'].name} - {count['TYPE_TRIP'].status ? 'true' : 'false'}
      <br />
      {count['LIST_THINGS'].name} -
      {count['LIST_THINGS'].status ? 'true' : 'false'}
      <br />
      {/* <button onClick={() => dispatch(changeStatusStep('PERIOD'))}>+sss</button>
      <button onClick={() => dispatch(changeStatusStep('LIST_THINGS'))}>
        +sss
      </button> */}
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
