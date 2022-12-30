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
import { useActiveStep } from '../hooks';

export default function Stepper() {
  // let [step, setStep] = React.useState(0);

  // const next = () => {
  //   if (StepsApp.length - 1 === step) return;
  //   setStep((step += 1));
  // };
  const [step, nextStep] = useActiveStep(StepsApp, 0) as any;
  const steps = StepsApp.map((item, index) => {
    return (
      <div key={index}>
        <StepStyled activeStep={index <= step}>1</StepStyled>
      </div>
    );
  });

  return (
    <div>
      {steps}
      {step}
      {/* active step --{titles} */}
      <button onClick={nextStep}>click</button>
    </div>
  );
}
