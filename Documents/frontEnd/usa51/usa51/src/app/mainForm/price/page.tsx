import PriceWrapper from "./priceWrapper";
import MainFormHeader from "../MainFormHeader";
import { FormProvider } from "../FormContext";

export default function Price() {
  const headerTitle = "Пройдіть швидкий тест на вибір авто";

  return (
    <FormProvider>
      <MainFormHeader title={headerTitle} isFinal={false} />
      <PriceWrapper />
    </FormProvider>
  );
}
