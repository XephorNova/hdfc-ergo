import { useState } from 'react';

const useControlWebView = () => {
  const [view, setView] = useState<boolean | undefined>(false);
  function setShowView() {
    console.log(view);
    setView(!view);
  }
  return { view, setShowView };
};

export default useControlWebView;
