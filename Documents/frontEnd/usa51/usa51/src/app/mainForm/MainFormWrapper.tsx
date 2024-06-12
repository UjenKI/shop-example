"use client";
import { useState } from "react";
import { FormProvider } from "./FormContext";
import CarType from "./carType/page";

export default function MainFormWrapper() {
  // const [formData, setFormData] = useState({
  //   carType: "",
  //   fuelType: "",
  //   year: "",
  //   price: "",
  //   gift: "",
  //   name: "",
  //   number: "",
  // });

  // const saveFormData = (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >
  // ) => {
  //   console.log("ITS WORK");
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  return (
    <FormProvider>
      <CarType />
    </FormProvider>
  );
}
