import YearBornWrapper from "./yearBornWrapper";
import MainFormHeader from "../MainFormHeader";
import { FormProvider } from "../FormContext";

export default function YearBorn() {
  const headerTitle = "Пройдіть швидкий тест на вибір авто";

  return (
    <FormProvider>
      <MainFormHeader title={headerTitle} isFinal={false} />
      <YearBornWrapper />
    </FormProvider>
  );
}
