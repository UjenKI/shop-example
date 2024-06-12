import FuelTypeWrapper from "./fuelTypeWrapper";
import MainFormHeader from "../MainFormHeader";
import { FormProvider } from "../FormContext";

export default function FuelType() {
  const headerTitle = "Пройдіть швидкий тест на вибір авто";

  return (
    <FormProvider>
      <MainFormHeader title={headerTitle} isFinal={false} />
      <FuelTypeWrapper />
    </FormProvider>
  );
}
