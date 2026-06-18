"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import BannerImg from "@/../public/banner.png";
import BannerVideo from "../banner/BannerVideo";
import MiniFeatures from "../banner/MiniFeatures";
export default function Banner() {
  const { lang } = useLanguage();

  return (
    <section
      id="banner"
      className="relative w-full pt-12 sm:pt-24 2xl:pt-12 flex items-center overflow-hidden"
    >
      {/* background texture (same as before) */}
      <div className="absolute inset-0 z-0 saturate-50 opacity-20 pointer-events-none dark:opacity-10 dark:saturate-0">
        <Image
          src={BannerImg}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-right"
        />
      </div>

      <Container className="px-2 sm:px-4 relative z-10 flex flex-col lg:flex-row gap-4 lg:gap-8 items-center py-4 sm:py-12">
        {/* LEFT SIDE (UNCHANGED ORDER) */}
        <div className="lg:w-6/12 flex flex-col justify-center text-left gap-y-2 sm:gap-y-4 mx-auto lg:mx-0">
          {/* badge */}
          <div className="inline-flex items-center gap-2 border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold w-fit">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {lang === "BN"
              ? "অল-ইন-ওয়ান মাদরাসা ম্যানেজমেন্ট সিস্টেম"
              : "All-in-One Madrasha Management System"}
          </div>

          {/* headline (same structure) */}
          <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black leading-[1.2] font-en">
            {lang === "BN" ? (
              <>
                আপনার মাদরাসা পরিচালনা করুন,
                <br />
                <span className="italic font-medium text-gold">জ্ঞান</span>
                {" ছড়িয়ে দিন।"}
              </>
            ) : (
              <>
                Manage Your Madrasha.
                <br />
                {"Inspire "}
                <span className="italic font-medium text-gold">Knowledge</span>
                {"."}
              </>
            )}
          </h1>

          {/* subheadline */}
          <p className="text-primary font-bold text-xl sm:text-2xl md:text-3xl 2xl:text-5xl tracking-tight font-en">
            {lang === "BN"
              ? "গড়ে তুলুন আগামী দিনের সুন্দর ভবিষ্যৎ।"
              : "Shape a Better Tomorrow."}
          </p>

          {/* description */}
          <p className="text-base sm:text-lg text-muted font-medium max-w-xl leading-relaxed mt-5 md:mt-10">
            {lang === "BN"
              ? "EduFilos হলো ছাত্র, শিক্ষক, ফিস, পরীক্ষা ও হাজিরাসহ একটি মাদরাসার যাবতীয় প্রয়োজনীয় সবকিছু এক প্ল্যাটফর্মে সহজে ম্যানেজ করার সম্পূর্ণ সমাধান।"
              : "EduFilos is a complete solution to manage students, teachers, fees, exams, attendance and everything your madrasha needs — in one powerful and easy-to-use platform."}
          </p>

          {/* CTA (same) */}
          <div className="grid grid-cols-2 gap-3 sm:flex sm:items-center sm:justify-start sm:gap-4 pt-2 w-full">
            <Link
              href="/register"
              className="h-12 px-3 sm:px-6 w-full sm:w-auto rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-md hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              {lang === "BN" ? "শুরু করুন এখন →" : "Get Started Now →"}
            </Link>

            <Link
              href="#features"
              className="h-12 px-3 sm:px-6 w-full sm:w-auto rounded-xl bg-card border border-border-custom text-foreground font-bold text-sm shadow-sm hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              {lang === "BN" ? "ফিচারসমূহ দেখুন ➔" : "Explore Features ➔"}
            </Link>
          </div>

          {/* mini features (same position) */}
          <MiniFeatures />
        </div>

        {/* RIGHT SIDE (UNCHANGED POSITION WRAPPER) */}
        <div className="lg:w-6/12 flex flex-col gap-y-10 items-center justify-center relative w-full aspect-square mt-8 lg:mt-0">
          <BannerVideo />
        </div>
      </Container>
    </section>
  );
}
