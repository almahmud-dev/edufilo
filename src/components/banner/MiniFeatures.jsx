"use client";

import { FEATURES } from "@/helper/banner";

export default function MiniFeatures() {
  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-6 pt-8 border-t border-border-custom/50">
      {FEATURES.map((feat) => {
        const Icon = feat.icon;

        return (
          <div
            key={feat.en}
            className="flex flex-col items-center text-center space-y-3"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/5 flex items-center justify-center text-gold">
              <Icon className="w-6 h-6" />
            </div>

            <span className="text-xs sm:text-sm font-bold">{feat.en}</span>
          </div>
        );
      })}
    </div>
  );
}
