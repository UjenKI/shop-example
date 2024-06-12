import { CardType } from "../carType/carTypeWrapper";
import Image from "next/image";
import Check from "/public/check.svg";

interface TypeCardProps {
  optionValue: any;
  handleChange: () => void;
  isLastItem: boolean;
}

export default function TypeFuelCard({
  optionValue,
  handleChange,
  isLastItem,
}: TypeCardProps) {
  return (
    <div
      className={`p-[11px_8px_10px] max-h-[150px] ${
        optionValue.checked ? "bg-[#2c425b]" : "bg-[#1c2a3b]"
      } ${
        isLastItem ? "max-[992px]:col-span-2" : "max-[992px]:col-span-1"
      } rounded-lg relative transition ease-in delay-150`}
    >
      <label className="w-full h-full inline-flex items-center">
        <div className="w-full flex items-start justify-between h-full flex-col cursor-pointer transition-all duration-500 relative outline-none ">
          <div className="max-[475px]:mb-0 mb-2 flex items-start justify-between">
            <input
              type="checkbox"
              name={optionValue.name}
              checked={optionValue.checked ?? false}
              onChange={handleChange}
              className="form-checkbox hidden h-5 w-5 text-blue-600"
            />
            <div
              className={`max-[475px]:w-[20px] max-[475px]:h-[20px] w-[26px] h-[26px] border-2 border-[#405165] p-[3px] rounded-[4px] flex justify-center items-center cursor-pointer`}
            >
              <Image
                className={`${
                  optionValue.checked ? "scale-100" : "scale-0"
                } transition ease-in delay-150 `}
                src={Check}
                alt="check"
              />
            </div>
            <p className="max-[475px]:text-[14px] ml-2 text-white">
              {optionValue.name}
            </p>
          </div>
          <div className="flex justify-center w-full">
            <Image src={optionValue.fuelImg} height={65} alt="fuel" />
          </div>
        </div>
      </label>
    </div>
  );
}
