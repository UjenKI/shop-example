"use client";

import { useState } from "react";
import Header from "./header/Header";
import ModalContainer from "./modal/ModalContainer";
import MainBanner from "./mainBanner/MainBanner";
import { useClickOutside } from "../../util/useClickOutside";

export default function MainContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full h-dvh relative">
      {isModalOpen ? (
        <ModalContainer closeModal={closeModal} elemRef={null} />
      ) : null}
      <Header openModal={openModal} />
      <MainBanner />
    </div>
  );
}
