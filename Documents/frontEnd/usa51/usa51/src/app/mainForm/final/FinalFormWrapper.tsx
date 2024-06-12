"use client";

import { useState, useEffect } from "react";
import { useFormData } from "../FormContext";
import { sendEmail } from "../../../util/send-email";
import PhoneInput from "../../../components/inputNumber";

export default function FinalFormWrapper() {
  const { formData, setFormData } = useFormData();

  const [finalData, setFinalData] = useState({
    name: "",
    phone: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

  useEffect(() => {
    console.log(finalData);
    const { name, phone } = finalData;
    setIsButtonDisabled(!name || !phone);
  }, [finalData]);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFinalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhoneNumber = (name: string, value: string) => {
    setFinalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    console.log(finalData);
    e.preventDefault();
    setFormData({ name: finalData.name, number: finalData.phone });
    sendEmail(
      { ...formData, name: finalData.name, number: finalData.phone },
      apiEndpoint
    );
  };

  return (
    <div className="max-[768px]:max-w-[80%] mt-8 flex flex-col items-center justify-center max-w-[50%] mx-auto">
      <h2 className="max-[475px]:text-[16px] text-white text-[18px] font-bold">
        Залиште Ваші контактні дані, щоб отримати перевірені варіанти авто
      </h2>
      <form className="mt-5 w-full" action="">
        <div>
          <input
            className="w-full bg-inherit text-white bg-none border-[#c9c9c9] border-[1px] outline-none rounded-md h-[60px] px-5 text-base"
            type="text"
            name="name"
            placeholder="Введіть ваше імя"
            onChange={handleInputChange}
            value={finalData.name}
          />
        </div>
        <div>
          <PhoneInput handleFunc={handlePhoneNumber} />
        </div>
        <button
          disabled={isButtonDisabled}
          onClick={handleSubmit}
          className={`max-[475px]:my-4 
          max-[475px]:py-6 
          max-[475px]:px-8 
          my-8 transition 
          duration-200 
          ease-in w-full 
          rounded-md text-white 
          ${
            isButtonDisabled
              ? "bg-[#171836] text-[#939191] cursor-not-allowed"
              : "bg-[#3c43ab] hover:bg-[#545cd2] text-white"
          }
           px-14 py-4`}
        >
          Отримати підбір авто
        </button>
      </form>
    </div>
  );
}
