"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import MacImg from "@/../public/mac.png";
import PhoneImg from "@/../public/phone.png";
import Placeholder from "@/../public/wall.jpg";
import { QURAN_QUOTE } from "@/helper/banner";

const VIDEO_ID = "AjeBOZXOrgs";

/* ---------------- Lite YouTube (lazy load) ------------ */
function LiteYoutube({ videoId }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title="YouTube video"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setActive(true)}
      className="relative w-full h-full cursor-pointer"
    >
      {/* thumbnail (FIXED: use img instead of next/image for external URL) */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />

      {/* overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/25">
        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-xl">
          ▶
        </div>
      </div>
    </button>
  );
}

/* ------------- Main Component ------------ */
export default function BannerVideo() {
  const { lang } = useLanguage();

  return (
    <>
      {/* ----------- QUOTE SECTION -------------- */}
      <div className="flex flex-col space-y-2 mt-4 text-center gap-3">
        {/* Arabic */}
        <h3 className="text-2xl md:text-5xl font-arabic text-gold">
          {QURAN_QUOTE.ar}
        </h3>

        {/* English / Bangla switch */}
        <p className="text-xs sm:text-sm text-muted italic max-w-md mx-auto">
          {lang === "BN"
            ? `${QURAN_QUOTE.bn} ${QURAN_QUOTE.refBn}`
            : `${QURAN_QUOTE.en} ${QURAN_QUOTE.refEn}`}
        </p>
      </div>

      {/* ------------ MAC VIDEO WRAPPER --------- */}
      <div className="relative w-full sm:w-[85%] aspect-5/3 z-10 rounded-xl overflow-hidden">
        <Image
          src={MacImg}
          alt="Mac mockup"
          fill
          priority
          sizes="(max-width: 640px) 0px, (max-width: 1024px) 80vw, 42vw"
          className="absolute z-20 pointer-events-none"
        />

        <div className="absolute inset-0 z-10">
          <LiteYoutube videoId={VIDEO_ID} />
        </div>
      </div>

      {/* ------------- PHONE MOCK --------- */}
      <div className="absolute right-[2%] bottom-[5%] w-1/3 sm:w-[25%] aspect-3/6 z-20 overflow-hidden">
        <Image
          src={PhoneImg}
          alt="Phone mockup"
          fill
          sizes="(max-width: 640px) 20vw, (max-width: 1024px) 25vw, 12vw"
          className="z-40 pointer-events-none"
        />

        <Image
          src={Placeholder}
          alt=""
          fill
          priority={false}
          sizes="100vw"
          className="object-cover z-30"
        />
      </div>
    </>
  );
}
