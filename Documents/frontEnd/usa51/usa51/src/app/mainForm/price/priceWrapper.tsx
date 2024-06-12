"use client";

import Image from "next/image";
import Check from "/public/check.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import PriceCard from "./priceCard";
import { useFormData } from "../FormContext";

export type CardType = {
  name: string;
  checked: boolean;
};

export default function PriceWrapper() {
  const router = useRouter();

  const { formData, setFormData } = useFormData();

  const [checkedItems, setCheckedItems] = useState<CardType[]>([
    { name: "до 9 000 $ ", checked: false },
    { name: "9 000 $ - 12 000 $", checked: false },
    { name: "12 000 $ - 15 000 $", checked: false },
    { name: "15 000 $ - 20 000 $", checked: false },
    { name: "20 000 $ - 30 000 $", checked: false },
    { name: "30 000 $ - та більше", checked: false },
  ]);

  const handleChange = (index: number) => {
    setCheckedItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const setPrice = (e: any) => {
    e.preventDefault();

    const selectedCarPrice = checkedItems
      .filter((item) => item.checked)
      .map((item) => item.name);

    setFormData({ price: selectedCarPrice });

    router.push("/mainForm/gift");
  };

  const toBackPage = (e: any) => {
    e.preventDefault();
    router.push("/mainForm/year");
  };

  const isButtonDisabled = !checkedItems.some((item) => item.checked);

  return (
    <div className="max-[675px]:max-w-[90%] flex flex-col items-center justify-center max-w-[70%] mx-auto">
      <div className="flex max-w-[45rem] justify-between w-full items-center pt-[28px] pb-[20px]">
        <h2 className="text-white text-[18px] font-bold">
          Бюджет на покупку авто:
        </h2>
        <div className="flex">
          <div className="w-[25px] h-[25px] rounded-full flex justify-center items-center font-bold text-[12px] relative z-[1] border-[3px] border-[#2A7CD9] text-[#2A7CD9] before:content-[''] before:absolute before:right-[-33px] before:w-[30px] before:h-[3px] before:z-[1] before:bg-[#2A7CD9]">
            <span>1</span>
          </div>
          <div className=" ml-[30px] w-[25px] h-[25px] rounded-full flex justify-center items-center font-bold text-[12px] relative z-[1] border-[3px] border-[#2A7CD9] text-[#2A7CD9] before:content-[''] before:absolute before:right-[-33px] before:w-[30px] before:h-[3px] before:z-[1] before:bg-[#2A7CD9]">
            <span>2</span>
          </div>
          <div className=" ml-[30px] w-[25px] h-[25px] rounded-full flex justify-center items-center font-bold text-[12px] relative z-[1] border-[3px] border-[#2A7CD9] text-[#2A7CD9] before:content-[''] before:absolute before:right-[-33px] before:w-[30px] before:h-[3px] before:z-[1] before:bg-[#2A7CD9]">
            <span>3</span>
          </div>
          <div className=" ml-[30px] w-[25px] h-[25px] rounded-full flex justify-center items-center font-bold text-[12px] relative z-[1] border-[3px] border-[#2A7CD9] text-[#2A7CD9]">
            <span>4</span>
          </div>
        </div>
      </div>
      <form className="max-[675px]:gap-3 max-[675px]:grid-cols-1 w-full max-w-[45rem] grid gap-5 grid-cols-2">
        {checkedItems.map((item, index) => {
          return (
            <PriceCard
              key={index}
              optionValue={item}
              handleChange={() => handleChange(index)}
            />
          );
        })}

        <div className="max-[675px]:mt-3 flex justify-between w-full col-span-full mt-8">
          <button
            onClick={toBackPage}
            className="max-w-[100px] py-4 transition duration-200 ease-in w-full rounded-md text-white bg-[#3e4061] hover:bg-[#525368]"
          >
            Назад
          </button>
          <button
            onClick={setPrice}
            type="submit"
            disabled={isButtonDisabled}
            className={`${
              isButtonDisabled
                ? "opacity-60 "
                : " opacity-100 hover:bg-[#545cd2] "
            }max-w-[100px] py-4 transition duration-200 ease-in w-full rounded-md text-white bg-[#3c43ab]`}
          >
            Далі
          </button>
        </div>
      </form>
    </div>
  );
}
