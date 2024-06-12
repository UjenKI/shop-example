import Image from "next/image";
import Logo from "/public/logo.png";

export default function Header({ openModal }: { openModal: () => void }) {
  return (
    <div className="flex mx-auto max-w-[1440px] justify-between items-center py-4">
      <div className="w-[120px] md:w-[200px]">
        <Image src={Logo} alt="logo" />
      </div>
      <div className="w-[150px] flex-col ml-[60px]">
        <p className="text-[13px] md:text-base text-white font-semibold">
          +380685755151
        </p>
        <p className="text-[13px] md:text-base text-white font-semibold">
          +380732235151
        </p>
        <button
          className="bg-none text-[13px] md:text-base text-[#9097ff] underline pointer transition duration-300 ease-in hover:text-[#bec4ea]"
          onClick={openModal}
        >
          Замовити дзвінок
        </button>
      </div>
    </div>
  );
}
