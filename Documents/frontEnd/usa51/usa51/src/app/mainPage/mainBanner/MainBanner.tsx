"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AudiImg from "/public/audi.png";
import Inst from "/public/Inst.svg";
import Telegram from "/public/tg.svg";
import Facebook from "/public/fb.svg";

export default function MainBanner() {
  const router = useRouter();

  function redirectionToForm() {
    router.push(`/mainForm`);
  }

  return (
    <div
      className="
    max-[420px]:w-[300px] 
    max-[490px]:w-[400px] 
    max-[640px]:w-[480px] 
    max-[768px]:w-[570px] 
    max-[640px]:mt-[5px] 
    shadow-blur 
    bg-none z-10 
    max-w-[100%] 
    md:max-w-[80%] 
    md:mx-auto 
    border border-[#5e6fd1] 
    max-[640px]:top-[40%] 
    max-[420px]:-translate-y-1/2
    max-[640px]:-translate-y-[35%]
    max-[768px]:-translate-y-[45%]
    max-[992px]:-translate-y-[40%]
    absolute top-1/2 left-1/2 
    w-full 
    transform -translate-x-1/2 -translate-y-[40%] "
    >
      <div
        className="
      max-[640px]:pt-[15px] 
      min-[450px]:pb-[118px] 
      min-[1160px]:pb-11 
      max-[768px]:pb-[138px] 
      max-[420px]:px-[13px] 
      max-[640px]:px-[20px] 
      relative 
      py-11 
      px-6 "
      >
        <div className=" max-[640px]:translate-x-[17px] max-[640px]:translate-y-[10px] absolute flex flex-col right-0 transform translate-x-[50%] -translate-y-[30%]">
          <button className="max-[640px]:p-2 max-[640px]:w-[35px] max-[640px]:h-[35px] flex justify-center bg-[#3c43ab] transition duration-200 ease-in hover:bg-[#6d74d9] p-3 mb-2 border border-[#5e6fd1]">
            <Link href="https://www.instagram.com/usa51.logistics?igsh=MW9ibXVyNjZtZGRodA==">
              <Image src={Inst} alt="soc" />
            </Link>
          </button>
          <button className="max-[640px]:p-2 max-[640px]:w-[35px] max-[640px]:h-[35px] flex justify-center bg-[#3c43ab] transition duration-200 ease-in hover:bg-[#6d74d9] p-3 mb-2 border border-[#5e6fd1]">
            <Link href="https://t.me/usa51logistics">
              <Image src={Telegram} alt="soc" />
            </Link>
          </button>
          <button className="max-[640px]:p-2 max-[640px]:w-[35px] max-[640px]:h-[35px] flex justify-center bg-[#3c43ab] transition duration-200 ease-in hover:bg-[#6d74d9] p-3 mb-2 border border-[#5e6fd1]">
            <Link href="https://m.facebook.com/usa51.logistics/">
              <Image
                alt="soc"
                src={Facebook}
                className="max-[640px]:scale-75 max-[640px]:-translate-y-[6px]"
              />
            </Link>
          </button>
        </div>
        <div
          className="
        max-[768px]:max-w-[100%] 
        max-[992px]:max-w-[85%] 
        max-w-[80%]"
        >
          <h2 className="max-[992px]:text-[35px] max-[420px]:text-[17px] max-[640px]:mb-[10px] mb-[22px] text-[#9097ff] text-[25px] md:text-[42px] font-bold">
            Купівля і доставка авто з США, Канади та Європи
          </h2>
          <p className="text-[14px] text-white">
            Прорахуйте свій <span className="text-[#9097ff]">надійний</span> та
            <span className="text-[#9097ff]"> перевірений</span> варіант авто
          </p>
          <button
            onClick={redirectionToForm}
            className="
            max-[490px]:max-w-[100%] 
            max-[992px]:max-w-[90%] 
            max-[640px]:mt-[43px] 
            mt-14 
            min-[490px]:mt-10
            max-w-[50%] 
            transition duration-200 ease-in w-full 
            rounded-md text-white bg-[#3c43ab] hover:bg-[#545cd2] 
            px-14 py-4 "
          >
            Підібрати авто
          </button>
          <div
            className="
          max-[420px]:max-w-[100%] 
          max-[640px]:max-w-[80%] 
          max-[992px]:max-w-[60%] 
          max-[1100px]:max-w-[60%] 
          max-w-[55%]"
          >
            <p className="mt-7 text-[16px] max-[640px]:text-[14px] text-white">
              Вкажіть відповіді на 4 запитаня й отримайте КОНСУЛЬТАЦІЮ та БОНУС
              після проходження тесту
            </p>
          </div>
        </div>

        <div
          className="
      max-[640px]:w-[95%] 
      max-[992px]:w-[72%] 
      max-[420px]:translate-y-[35px] 
      max-[500px]:-translate-x-[6px]  
      max-[580px]:translate-x-[28px] 
      max-[580px]:translate-y-[45%] 
      max-[768px]:translate-x-[28px] 
      max-[992px]:translate-x-[30px] 
      max-[768px]:translate-y-[50%] 
      max-[1160px]:translate-x-[30%]
      absolute w-[80%] bottom-0 right-0 
      max-[1280px]:translate-x-[35%] translate-y-[27%]
      transform translate-x-[35%] translate-y-[27%]"
        >
          <Image src={AudiImg} alt="Audi" />
        </div>
      </div>
    </div>
  );
}
