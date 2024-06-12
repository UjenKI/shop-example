import CarTypeWrapper from "./carTypeWrapper";
import MainFormHeader from "../MainFormHeader";
import { FormProvider } from "../FormContext";

export default function CarType() {
  const headerTitle = "Пройдіть швидкий тест на вибір авто";

  return (
    <FormProvider>
      <MainFormHeader title={headerTitle} isFinal={false} />
      <CarTypeWrapper />
    </FormProvider>
  );
}
