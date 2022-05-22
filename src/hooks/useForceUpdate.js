import React from 'react';

//create your forceUpdate hook: https://stackoverflow.com/a/53837442
export function useForceUpdate() {
  const [value, setValue] = React.useState(0); // integer state
  return () => setValue(pre => pre + 1); // update the state to force render
}
