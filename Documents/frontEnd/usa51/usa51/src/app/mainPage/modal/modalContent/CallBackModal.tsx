"use client";

import { useState, useEffect } from "react";
import Logo from "/public/logo.png";
import Image from "next/image";
import { sendEmail } from "../../../../util/send-email";
import PhoneInput from "../../../../components/inputNumber";

export default function CallBackModal() {
  const [finalData, setFinalData] = useState({
    name: "",
    phone: "",
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const apiEndpoint = process.env.NEXT_PUBLIC_FAST_API_ENDPOINT;

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
    e.preventDefault();
    sendEmail({ name: finalData.name, number: finalData.phone }, apiEndpoint);
  };

  return (
    <div>
      <div className="w-full flex justify-center mb-10">
        <Image src={Logo} width={180} alt="logo" />
      </div>
      <form className="mt-5" action="">
        <div>
          <input
            className="w-full bg-inherit text-white bg-none border-[#c9c9c9] border-[1px] outline-none rounded-md h-[60px] px-5 text-base"
            type="text"
            placeholder="Введіть ваше імя"
            name="name"
            onChange={handleInputChange}
            value={finalData.name}
          />
        </div>
        <PhoneInput handleFunc={handlePhoneNumber} />
        <button
          onClick={handleSubmit}
          disabled={isButtonDisabled}
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
      <p className="mt-4 text-[12px] text-white text-center">
        Ваші данні конфіденційні!
      </p>
    </div>
  );
}
