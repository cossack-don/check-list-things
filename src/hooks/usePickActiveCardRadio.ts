import * as React from 'react';

const usePickActiveCardRadio = (defaultValue: string) => {
  const [value, setValue] = React.useState(defaultValue);

  const onChangeRadio = (e) => {
    setValue(e.target.value);
  };
  return [value, onChangeRadio];
};

export default usePickActiveCardRadio;
