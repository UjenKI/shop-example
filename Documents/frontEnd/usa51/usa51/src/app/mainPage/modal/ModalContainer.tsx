import CallBackModal from "./modalContent/CallBackModal";
import Image from "next/image";
import Close from "/public/close.svg";

export default function ModalContainer({
  closeModal,
  elemRef,
}: {
  closeModal: () => void;
  elemRef: any;
}) {
  return (
    <div className="absolute left-0 top-0 z-50 h-dvh w-[110%] bg-black bg-opacity-70 backdrop-blur-2 transform -translate-x-[3%]">
      <div className="relative h-full">
        <div
          className="absolute left-2/4 top-[40%] w-[480px] max-w-[80%] -translate-x-1/2 -translate-y-[150px] transform rounded-lg bg-[#13181d]"
          ref={elemRef}
        >
          <div className="px-[40px] py-[42px] relative">
            <button onClick={closeModal} className="absolute right-5 top-5">
              <Image src={Close} alt="close" />
            </button>
            <CallBackModal />
          </div>
        </div>
      </div>
    </div>
  );
}
