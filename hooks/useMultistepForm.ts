import React, { useState } from "react";

type UseMultistepFormReturn = {
  step: number;
  component: React.ReactElement;

  next: () => void;
  prev: () => void;
  goto: (i: number) => void;
};

export const useMultistepForm = (
  components: React.ReactElement[]
): UseMultistepFormReturn => {
  const [step, setStep] = useState<number>(0);

  const next = () => {
    setStep((i) => {
      if (i >= components.length - 1) {
        return i;
      }

      return i + 1;
    });
  };

  const prev = () => {
    setStep((i) => {
      if (i <= 0) {
        return i;
      }

      return i - 1;
    });
  };

  const goto = (i: number) => {
    setStep(i);
  };

  return {
    step: step,
    component: components[step],

    goto: goto,
    next: next,
    prev: prev,
  };
};
