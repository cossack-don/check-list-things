import * as React from 'react';

export const StepsApp = [
  {
    title: 'GENDER',
  },
  {
    title: 'PERIOD',
  },
  {
    title: 'SEASON',
  },
  {
    title: 'TYPE_TRIP',
  },
  {
    title: 'LIST_THINGS',
  },
];
import styled from 'styled-components';
const StepStyled = styled.div<{ activeStep: boolean }>`
 width:30px;
 height:30px;
 
 background:${(props) => (props.activeStep ? 'blue' : 'red')};

`;
import { increment } from '../../src/store/features/counter/counterSlice';
import { useActiveStep } from '../hooks';
import type { RootState } from '../../src/store/store';
import { useDispatch, useSelector } from 'react-redux';
export default function Stepper() {
  // let [step, setStep] = React.useState(0);

  const dispatch = useDispatch();
  const [isActiveValue, setActiveValue] = React.useState('man');
  const count = useSelector((state: RootState) => state.counter.value);

  // const next = () => {
  //   if (StepsApp.length - 1 === step) return;
  //   setStep((step += 1));
  // };

  const steps = StepsApp.map((item, index) => {
    return (
      <div key={index}>
        <StepStyled activeStep={index <= count}>1</StepStyled>
      </div>
    );
  });

  return (
    <div>
      {steps}

      {/* active step --{titles} */}
      <button onClick={() => dispatch(increment())}>click</button>
    </div>
  );
}
