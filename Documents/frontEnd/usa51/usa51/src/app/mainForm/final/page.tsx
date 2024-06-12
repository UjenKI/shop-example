import FinalFormWrapper from "./FinalFormWrapper";
import MainFormHeader from "../MainFormHeader";
import { FormProvider } from "../FormContext";

export default function FinalForm() {
  const headerTitle = "Дякуємо за відповіді на запитання !";

  return (
    <FormProvider>
      <MainFormHeader title={headerTitle} isFinal={true} />
      <FinalFormWrapper />
    </FormProvider>
  );
}
