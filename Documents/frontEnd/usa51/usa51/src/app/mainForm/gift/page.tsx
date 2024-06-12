import GiftWrapper from "./giftWrapper";
import MainFormHeader from "../MainFormHeader";
import { FormProvider } from "../FormContext";

export default function Gift() {
  const headerTitle = "Пройдіть швидкий тест на вибір авто";

  return (
    <FormProvider>
      <MainFormHeader title={headerTitle} isFinal={false} />
      <GiftWrapper />
    </FormProvider>
  );
}
