import * as React from 'react';

const useActiveStep = (steps: any, defaultValue: number) => {
  let [step, setStep] = React.useState(defaultValue);

  const nextStep = () => {
    if (steps.length - 1 === step) return;
    setStep((step += 1));
  };
  return [step, nextStep];
};

export default useActiveStep;
