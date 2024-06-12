"use client";

import Image from "next/image";
import Check from "/public/check.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import GiftCard from "./giftCard";
import { useFormData } from "../FormContext";

export type CardType = {
  name: string;
  checked: boolean;
};

export default function GiftWrapper() {
  const router = useRouter();

  const { formData, setFormData } = useFormData();

  const [checkedItems, setCheckedItems] = useState<CardType[]>([
    { name: "Хімчистка салону", checked: false },
    { name: "Полірування кузова", checked: false },
    { name: "Заміна фільтрів та рідин", checked: false },
    { name: "Новий акумулятор", checked: false },
  ]);

  const handleChange = (index: number) => {
    setCheckedItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? { ...item, checked: !item.checked }
          : { ...item, checked: false }
      )
    );
  };

  //

  const toBackPage = (e: any) => {
    e.preventDefault();

    router.push("/mainForm/price");
  };

  const setGift = (e: any) => {
    e.preventDefault();

    const selectedGift = checkedItems
      .filter((item) => item.checked)
      .map((item) => item.name);

    setFormData({ gift: selectedGift });

    router.push("/mainForm/final");
  };

  const isButtonDisabled = !checkedItems.some((item) => item.checked);

  return (
    <div className="max-[675px]:max-w-[90%] flex flex-col items-center justify-center max-w-[70%] mx-auto">
      <div className="max-w-[45rem] flex justify-between w-full items-center pt-[28px] pb-[20px]">
        <h2 className="text-white text-[18px] font-bold">Оберіть подарунок:</h2>
      </div>
      <form className="max-[675px]:gap-3 max-[675px]:grid-cols-1 w-full max-w-[45rem] grid gap-5 grid-cols-2">
        {checkedItems.map((item, index) => {
          return (
            <GiftCard
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
            type="submit"
            onClick={setGift}
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
