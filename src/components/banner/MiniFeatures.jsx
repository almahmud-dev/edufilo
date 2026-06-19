"use client";

import { FEATURES } from "@/helper/banner";
import { useLanguage } from "@/context/LanguageContext";

export default function MiniFeatures() {
  const { lang } = useLanguage();

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-6 pt-8 border-t border-border-custom/50">
      {FEATURES.map((feat) => {
        const Icon = feat.icon;
        return (
          <div
            key={feat.en}
            className="group flex flex-col items-center text-center space-y-3 cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center text-gold transition-all duration-200 group-hover:bg-gold/15 group-hover:scale-110 group-hover:shadow-sm group-hover:shadow-gold/20">
              <Icon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-foreground/70 transition-colors duration-200 group-hover:text-gold">
              {lang === "BN" ? feat.bn : feat.en}
            </span>
          </div>
        );
      })}
    </div>
  );
}
