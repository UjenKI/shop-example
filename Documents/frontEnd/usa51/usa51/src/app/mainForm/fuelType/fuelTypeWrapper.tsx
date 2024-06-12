"use client";

import Image from "next/image";
import Check from "../../../../public/check.svg";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import TypeFuelCard from "./typeFuelCard";
import Fuel from "/public/fuel.svg";
import Gas from "/public/gas.svg";
import Hybrid from "/public/hybrid.svg";
import Diesel from "/public/dieselType.png";
import Electro from "/public/electroCar.png";
import { useFormData } from "../FormContext";

export type CardType = {
  fuelImg: StaticImageData;
  name: string;
  checked: boolean;
};

export default function FuelTypeWrapper() {
  const router = useRouter();

  const { formData, setFormData } = useFormData();

  const [checkedItems, setCheckedItems] = useState<CardType[]>([
    { fuelImg: Fuel, name: "Бензин", checked: false },
    { fuelImg: Diesel, name: "Дизель", checked: false },
    { fuelImg: Gas, name: "Газ", checked: false },
    { fuelImg: Hybrid, name: "Гібрид", checked: false },
    { fuelImg: Electro, name: "Електро", checked: false },
  ]);

  const [defaultValue, setDefaultValue] = useState(false);

  const checkDefaultValue = () => {
    if (!defaultValue) {
      setDefaultValue(true);
      setCheckedItems((prevItems) =>
        prevItems.map((item) => ({ ...item, checked: false }))
      );
    } else {
      setDefaultValue(false);
    }
  };

  const handleChange = (index: number) => {
    setDefaultValue(false);
    setCheckedItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const setFuelType = (e: any) => {
    e.preventDefault();

    if (!defaultValue) {
      const selectedFuelTypes = checkedItems
        .filter((item) => item.checked)
        .map((item) => item.name);

      setFormData({ fuelType: selectedFuelTypes });
    } else {
      setFormData({ fuelType: ["клієнт не визначився"] });
    }
    router.push("/mainForm/year");
  };

  const toBackPage = (e: any) => {
    e.preventDefault();
    router.push("/mainForm");
  };

  const isButtonDisabled =
    !defaultValue && !checkedItems.some((item) => item.checked);

  return (
    <div className="max-[675px]:max-w-[90%] flex flex-col items-center justify-center max-w-[70%] mx-auto">
      <div className="max-w-[45rem] flex justify-between w-full items-center pt-[28px] pb-[20px]">
        <h2 className="text-white text-[18px] font-bold">
          Оберіть тип палива:
        </h2>
        <div className="flex">
          <div className="w-[25px] h-[25px] rounded-full flex justify-center items-center font-bold text-[12px] relative z-[1] border-[3px] border-[#2A7CD9] text-[#2A7CD9] before:content-[''] before:absolute before:right-[-33px] before:w-[30px] before:h-[3px] before:z-[1] before:bg-[#2A7CD9]">
            <span>1</span>
          </div>
          <div className=" ml-[30px] w-[25px] h-[25px] rounded-full flex justify-center items-center font-bold text-[12px] relative z-[1] border-[3px] border-[#2A7CD9] text-[#2A7CD9] before:content-[''] before:absolute before:right-[-33px] before:w-[30px] before:h-[3px] before:z-[1] before:bg-[#888888]">
            <span>2</span>
          </div>
          <div className=" ml-[30px] w-[25px] h-[25px] rounded-full flex justify-center items-center font-bold text-[12px] relative z-[1] border-[3px] border-[#888888] text-[#888888] before:content-[''] before:absolute before:right-[-33px] before:w-[30px] before:h-[3px] before:z-[1] before:bg-[#888888]">
            <span>3</span>
          </div>
          <div className=" ml-[30px] w-[25px] h-[25px] rounded-full flex justify-center items-center font-bold text-[12px] relative z-[1] border-[3px] border-[#888888] text-[#888888]">
            <span>4</span>
          </div>
        </div>
      </div>
      <form className="max-[992px]:grid-cols-2 max-[675px]:gap-3 w-full max-w-[45rem] grid gap-5 grid-cols-5">
        {checkedItems.map((item, index) => {
          const isLastItem = index === checkedItems.length - 1;
          return (
            <TypeFuelCard
              isLastItem={isLastItem}
              key={index}
              optionValue={item}
              handleChange={() => handleChange(index)}
            />
          );
        })}

        <div
          className={`p-[11px_8px_5px] max-h-[150px] ${
            defaultValue ? "bg-[#2c425b]" : "bg-[#1c2a3b]"
          } rounded-lg relative col-span-full transition ease-in w-full cursor-pointer delay-150`}
        >
          <label className="w-full h-full inline-flex items-center">
            <div className="flex items-start justify-between h-full flex-col cursor-pointer transition-all duration-500 relative outline-none ">
              <div className="mb-2 flex items-start justify-between">
                <input
                  type="checkbox"
                  name="default"
                  checked={defaultValue ?? false}
                  onChange={checkDefaultValue}
                  className="form-checkbox hidden h-5 w-5 text-blue-600"
                />
                <div
                  className={`max-[475px]:w-[20px] max-[475px]:h-[20px] w-[26px] h-[26px] border-2 border-[#405165] p-[3px] rounded-[4px] flex justify-center items-center cursor-pointer`}
                >
                  <Image
                    className={`${
                      defaultValue ? "scale-100" : "scale-0"
                    } transition ease-in delay-150 `}
                    src={Check}
                    alt="check"
                  />
                </div>
                <p className="max-[475px]:text-[14px] ml-2 text-white">
                  Поки не визначився (-лась)
                </p>
              </div>
            </div>
          </label>
        </div>
        <div className="max-[675px]:mt-3 flex justify-between w-full col-span-full mt-8">
          <button
            onClick={toBackPage}
            className="max-w-[100px] py-4 transition duration-200 ease-in w-full rounded-md text-white bg-[#3e4061] hover:bg-[#525368]"
          >
            Назад
          </button>
          <button
            onClick={setFuelType}
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
