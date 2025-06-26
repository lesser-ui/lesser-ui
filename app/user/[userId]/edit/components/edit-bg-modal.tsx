"use client";

import useSlideBoxes from "@/lib/hooks/gsap/use-slide-boxes";
import useStopScoll from "@/lib/hooks/use-stop-scroll";
import { userBackground } from "@/lib/constants";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function EditBackgroundModal({
  selectBackground,
  toggleBgModal,
}: {
  selectBackground: (selectedBg: string) => void;
  toggleBgModal: () => void;
}) {
  useStopScoll();
  const { containerRef, backdropRef } = useSlideBoxes();

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 bg-black/80 w-full h-screen py-20 px-25 z-10000"
      onClick={toggleBgModal}
    >
      <div
        ref={containerRef}
        className="bg-neutral-900 rounded-2xl w-full h-full overflow-auto"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 방지
      >
        <header className="sticky top-0 left-0 w-full z-1 bg-neutral-900/80 backdrop-blur py-3 px-8 flex justify-between items-center">
          <p id="modal-title" className="text-lg font-semibold">
            보유한 배경
          </p>
          <button
            onClick={toggleBgModal}
            className="cursor-pointer transition-transform hover:scale-90"
            aria-label="배경 선택 닫기"
            title="닫기"
          >
            <FontAwesomeIcon icon={faX} className="text-lg" />
          </button>
        </header>
        <section className="grid grid-cols-3 gap-5 p-8">
          {userBackground.map((data) => (
            <BackgroundCard
              key={data.name}
              {...data}
              selectBackground={selectBackground}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

interface BackgroundCardProps {
  name: string;
  label: string;
  description: string;
  tags: string[];
  selectBackground: (selectedBg: string) => void;
}

function BackgroundCard({
  name,
  label,
  description,
  tags,
  selectBackground,
}: BackgroundCardProps) {
  return (
    <div
      className="rounded-2xl cursor-pointer hover:scale-95 transition-transform shadow"
      onClick={() => selectBackground(name)}
    >
      <div className="rounded-2xl overflow-hidden">
        {/* image */}
        <div className="relative w-full h-35">
          <Image
            src={`/background/${name}.webp`}
            alt={name}
            fill
            className="object-cover"
            sizes="1400px"
          />
        </div>
        {/* content */}
        <div className="p-3 bg-neutral-800 min-h-20 space-y-2">
          <p>{label}</p>
          <p className="text-sm text-neutral-400">{description}</p>
          <div className="flex gap-1 items-center flex-wrap">
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
      </div>
    </div>
  );
}
