"use client";

import useSlideBoxes from "@/lib/hooks/gsap/use-slide-boxes";
import useStopScoll from "@/lib/hooks/use-stop-scroll";
import { userBackground } from "@/lib/constants";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import PortalWrapper from "@/components/portal-wrapper";

export default function BackgrounWithModal({
  background,
}: {
  background: string;
}) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal((prev) => !prev);
  const bgData = userBackground.find(({ name }) => name === background);

  return (
    <>
      {showModal && bgData && (
        <PortalWrapper>
          <BgExplainModal {...bgData} toggleModal={toggleModal} />
        </PortalWrapper>
      )}
      <section
        className="relative w-full h-96 overflow-hidden  cursor-pointer"
        onClick={toggleModal}
      >
        <Image
          src={`/background/${background}.webp`}
          alt="bg"
          fill
          className="object-cover object-center"
          draggable={false}
          priority
        />
      </section>
    </>
  );
}

interface BgExplainModalProps {
  name: string;
  label: string;
  description: string;
  tags: string[];
  toggleModal: () => void;
}

function BgExplainModal({
  name,
  label,
  description,
  tags,
  toggleModal,
}: BgExplainModalProps) {
  const { containerRef, backdropRef } = useSlideBoxes();
  useStopScoll();

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 w-full h-screen bg-black/80 px-25 py-20 z-10000"
      onClick={toggleModal}
    >
      <div
        ref={containerRef}
        className="w-full h-full rounded-2xl bg-neutral-900 overflow-auto"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 방지
      >
        <header className="sticky top-0 left-0 w-full z-1 bg-neutral-900/80 backdrop-blur py-3 px-8 flex justify-between items-center">
          <p id="modal-title" className="text-lg font-semibold">
            배경 정보
          </p>
          <button
            onClick={toggleModal}
            className="cursor-pointer transition-transform hover:scale-90"
            aria-label="배경 선택 닫기"
            title="닫기"
          >
            <FontAwesomeIcon icon={faX} className="text-lg" />
          </button>
        </header>
        <section className="p-8">
          <div className="w-full h-84 relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={`/background/${name}.webp`}
              alt={name}
              fill
              className="object-cover object-center"
              draggable={false}
              priority
            />
          </div>
          <div className="mt-5 space-y-5 text-center">
            <p className="text-xl font-extrabold">{label}</p>
            <p>{description}</p>
            <div className="flex gap-1 justify-center items-center flex-wrap">
              {tags.map((tag) => (
                <span
                  className="px-2 py-1 rounded-full bg-green-500 text-white text-xs"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
