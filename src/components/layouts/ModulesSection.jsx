"use client";

import React from "react";
import Container from "../ui/Container";
import { useLanguage } from "@/context/LanguageContext";
import { modules, modulesSection } from "@/helper/moduleSection";
import SectionHeader from "../common/SectionHeader";

export default function ModulesSection() {
  const { lang } = useLanguage();

  return (
    <section
      id="modules"
      className="py-10 sm:py-24 bg-background border-t border-border-custom/30"
    >
      <Container>
        <div className="flex flex-col items-center text-center space-y-3 mb-14">
          <SectionHeader
            label={
              lang === "BN" ? modulesSection.labelBn : modulesSection.labelEn
            }
            text={
              lang === "BN" ? modulesSection.titleBn : modulesSection.titleEn
            }
            colorWord={
              lang === "BN"
                ? modulesSection.highlightBn
                : modulesSection.highlightEn
            }
          />
          <div className="w-70 h-1 bg-linear-to-r from-transparent via-gold to-transparent rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3  xl:grid-cols-6 gap-4 lg:gap-5">
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-1 sm:p4 md:p-6 bg-card  rounded-2xl shadow-sm hover:shadow-md shadow-gold/60 hover:border-gold/30 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-14 h-14 my-4 rounded-full bg-background flex items-center justify-center text-gold shadow-inner border border-gold/10 group-hover:bg-gold group-hover:text-background transition-all duration-300 mb-5 shrink-0">
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>

                <h3 className="text-base font-bold text-foreground/90 tracking-wide leading-snug mb-2 font-roboto min-h-10 flex items-center justify-center">
                  {lang === "BN" ? mod.bn : mod.en}
                </h3>

                <p className="text-xs text-muted font-medium leading-relaxed max-w-50">
                  {lang === "BN" ? mod.descBn : mod.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
