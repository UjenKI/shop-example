"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Close from "/public/close.svg";
import Done from "/public/done.svg";

export default function MainFormHeader({
  title,
  isFinal,
}: {
  title: string;
  isFinal: boolean;
}) {
  const router = useRouter();

  function redirectionToMainPage() {
    router.push(`/`);
  }

  return (
    <div className="border-b-2 border-solid border-[#51599d]">
      <div className="max-[768px]:max-w-[80%] flex max-w-[45rem] mx-auto w-full justify-between max-[768px]:py-6 max-[768px]:pb-6 py-16 px-0 pb-10 space-x-2">
        <div className="flex w-[90%] items-center">
          {isFinal ? (
            <div className="w-[32px] h-[32px]">
              <Image width="32" height="32" src={Done} alt="done" />
            </div>
          ) : null}
          <h2 className="max-[768px]:text-[16px] ml-4 text-white text-2xl font-bold">
            {title}
          </h2>
        </div>
        <button onClick={redirectionToMainPage}>
          <Image src={Close} alt="close" />
        </button>
      </div>
    </div>
  );
}
