"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import BannerImg from "@/../public/banner.png";
import BannerVideo from "../banner/BannerVideo";
import MiniFeatures from "../banner/MiniFeatures";
import { Layers , ArrowRight, Sparkles } from "lucide-react";
export default function Banner() {
  const { lang } = useLanguage();

  return (
    <section
      id="banner"
      className="relative w-full pt-12 sm:pt-24 2xl:pt-12 flex items-center overflow-hidden"
    >
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
        <div className="lg:w-6/12 flex flex-col justify-center text-left gap-y-3 sm:gap-y-5 mx-auto lg:mx-0">
          {/* badge */}
          <div className="inline-flex items-center gap-2 border border-gold/20 bg-gold/5 rounded-full px-3 py-1.5 text-xs font-semibold w-fit text-gold">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {lang === "BN"
              ? "অল-ইন-ওয়ান মাদরাসা ম্যানেজমেন্ট সিস্টেম"
              : "All-in-One Madrasha Management System"}
          </div>

          {/* headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-black leading-[1.2] font-en">
            {lang === "BN" ? (
              <>
                আপনার মাদরাসা পরিচালনা করুন,
                <br />
                <span className="italic font-medium bg-gradient-to-r from-[#FF5101] via-[#ff7a45] to-[#ffb347] bg-clip-text text-transparent">
                  জ্ঞান
                </span>
                {" ছড়িয়ে দিন।"}
              </>
            ) : (
              <>
                Manage Your Madrasha
                <br />
                {"Inspire "}
                <span className="italic font-medium bg-gradient-to-r from-[#FF5101] via-[#ff7a45] to-[#ffb347] bg-clip-text text-transparent">
                  Knowledge
                </span>
              </>
            )}
          </h1>

          {/* subheadline */}
          <p className="text-foreground/70 font-bold text-xl sm:text-2xl md:text-3xl tracking-tight font-en">
            {lang === "BN"
              ? "গড়ে তুলুন আগামী দিনের সুন্দর ভবিষ্যৎ।"
              : "Shape a Better Tomorrow"}
          </p>

          {/* description */}
          <p className="text-base sm:text-lg text-muted font-medium max-w-xl leading-relaxed">
            {lang === "BN"
              ? "EduFilos হলো ছাত্র, শিক্ষক, ফিস, পরীক্ষা ও হাজিরাসহ একটি মাদরাসার যাবতীয় প্রয়োজনীয় সবকিছু এক প্ল্যাটফর্মে সহজে ম্যানেজ করার সম্পূর্ণ সমাধান।"
              : "EduFilos is a complete solution to manage students, teachers, fees, exams, attendance and everything your madrasha needs in one powerful platform."}
          </p>

          {/* CTA */}

          <div className="flex flex-wrap gap-3 pt-1 w-full">
            {/* Primary — Dark Green */}
            <Link
              href="/register"
              className="h-12 px-6 w-full sm:w-auto rounded-xl bg-[#1a5c38] text-white font-bold text-sm shadow-lg shadow-[#1a5c38]/30 hover:bg-[#144d2f] hover:-translate-y-0.5 hover:shadow-[#1a5c38]/40 active:scale-[0.97] transition-all flex items-center justify-center gap-2.5"
            >
              <Layers  size={17} />
              {lang === "BN" ? "শুরু করুন এখন" : "Get Started Now"}
              <ArrowRight size={15} className="opacity-85" />
            </Link>

            {/* Secondary — Golden Ghost */}
            <Link
              href="/studentManagement"
              className="group h-12 px-6 w-full sm:w-auto rounded-xl border-2 border-[#c49a1a] text-[#8a6500] font-bold text-sm hover:bg-[#c49a1a]/10 active:scale-[0.97] transition-all flex items-center justify-center gap-2.5"
            >
              <Sparkles size={16} />
              {lang === "BN" ? "ফিচারসমূহ দেখুন" : "Explore Features"}
              <ArrowRight
                size={14}
                className="opacity-70 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <MiniFeatures />
        </div>

        <div className="lg:w-6/12 flex flex-col gap-y-10 items-center justify-center relative w-full aspect-square mt-8 lg:mt-0">
          <BannerVideo />
        </div>
      </Container>
    </section>
  );
}
