import WelcomeStep from "../components/steps/WelcomeStep";
import TwitterStep from "../components/steps/TwitterStep";
import EnterNameStep from "../components/steps/EnterNameStep";
import EnterPhotoStep from "../components/steps/EnterPhotoStep";
import EnterPhoneStep from "../components/EnterPhoneStep";
import EnterCodeStep from "../components/EnterCodeStep";
import Loading from "../components/Loading";
import { createContext, useState } from "react";

const StepsComponent = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: EnterPhotoStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
  6: Loading,
};
type MainContextType = {
  step: number;
  onNextStep: () => void;
};
export const MainContext = createContext<MainContextType>(
  {} as MainContextType
);

export default function Home() {
  const [step, setStep] = useState<number>(0);
  const Step = StepsComponent[step];

  const onNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  return (
    <MainContext.Provider value={{ step, onNextStep }}>
      <Step />
    </MainContext.Provider>
  );
}
