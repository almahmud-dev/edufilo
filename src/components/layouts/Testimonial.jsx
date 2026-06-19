"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import placeholder from "@/../public/texture.webp";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { ChevronsLeftRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { testimonials, testimonialsSection } from "@/helper/testimonials";
import SectionHeader from "../common/SectionHeader";

export default function Testimonial() {
  const { lang } = useLanguage();
  const swiperRef = useRef(null);

  useEffect(() => {
    import("swiper/css");
    import("swiper/css/navigation");
    import("swiper/css/pagination");
  }, []);

  return (
    <section className="bg-background select-none relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-16 relative">
          <ChevronsLeftRight
            className="w-10 h-10 text-gold mb-3 opacity-80"
            strokeWidth={1}
          />
          <SectionHeader
            label={testimonialsSection.label[lang === "BN" ? "bn" : "en"]}
            text={testimonialsSection.title[lang === "BN" ? "bn" : "en"]}
            colorWord={
              testimonialsSection.highlight[lang === "BN" ? "bn" : "en"]
            }
          />
        </div>

        <div className="absolute top-[65%] left-4 md:left-3 2xl:left-10 -translate-y-1/2 z-20 hidden md:block">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
            className="w-12 h-12 rounded-full bg-card/60 backdrop-blur-sm border border-border-custom flex items-center justify-center text-gold shadow-md hover:bg-card hover:scale-105 active:scale-95 transition-all"
          >
            <FiChevronLeft className="w-7 h-7" />
          </button>
        </div>

        <div className="absolute top-[65%] right-4 md:right-3 2xl:right-10 -translate-y-1/2 z-20 hidden md:block">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
            className="w-12 h-12 rounded-full bg-card/60 backdrop-blur-sm border border-border-custom flex items-center justify-center text-gold shadow-md hover:bg-card hover:scale-105 active:scale-95 transition-all"
          >
            <FiChevronRight className="w-7 h-7" />
          </button>
        </div>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          breakpoints={{
            768: { slidesPerView: 2, spaceBetween: 30 },
            1280: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="pb-16"
          style={{
            "--swiper-pagination-color": "var(--gold, #d4af37)",
            "--swiper-pagination-bullet-inactive-color": "#9ca3af",
            "--swiper-pagination-bullet-inactive-opacity": "0.4",
            "--swiper-pagination-bullet-size": "10px",
          }}
        >
          {testimonials.map((feat) => (
            <SwiperSlide key={feat.id} className="h-auto flex">
              <div className="flex flex-col gap-y-7 bg-card border border-border-custom p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex flex-col gap-y-4 flex-1">
                  <FaQuoteLeft className="w-8 h-8 text-gold/30" />
                  <p className="text-sm md:text-base text-muted dark:text-muted-foreground leading-relaxed font-medium">
                    {lang === "BN" ? feat.quote.bn : feat.quote.en}
                  </p>
                </div>

                <div className="flex flex-col gap-y-5 pt-6 border-t border-border-custom/50 mt-auto">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden border-2 border-border-custom bg-muted shadow-xs">
                      <Image
                        src={placeholder}
                        alt={feat.name.en}
                        fill
                        sizes="56px"
                        className="object-cover saturate-50"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-base font-bold text-foreground">
                        {lang === "BN" ? feat.name.bn : feat.name.en}
                      </p>

                      <p className="text-[11px] font-bold text-gold uppercase tracking-wider mt-0.5">
                        {lang === "BN" ? feat.title.bn : feat.title.en}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`w-4 h-4 ${
                          i < feat.rating
                            ? "text-gold"
                            : "text-neutral-300 dark:text-border-custom"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
