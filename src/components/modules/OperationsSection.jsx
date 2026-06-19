"use client";

import { useLanguage } from "@/context/LanguageContext";
import Container from "../ui/Container";
import { data } from "@/helper/module/operationsSection";
import { PiDiamondsFourFill } from "react-icons/pi";

export default function OperationsSection() {
  const { lang } = useLanguage();

  const content = data[lang];

  return (
    <section className="bg-background">
      <Container>
        <div className="flex items-center gap-5 mb-14">
          <div className="flex-1 h-[1px] bg-gold/40" />

          <div className="flex items-center justify-center gap-3">
            <PiDiamondsFourFill className="text-gold text-lg md:text-xl shrink-0" />

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground text-center leading-tight">
              {content.heading}
            </h2>

            <PiDiamondsFourFill className="text-gold text-lg md:text-xl shrink-0" />
          </div>

          <div className="flex-1 h-[1px] bg-gold/40" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
          {content.items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-center"
            >
              {index !== content.items.length - 1 && (
                <div className="hidden xl:block absolute top-9 left-[72%] w-full border-t border-dashed border-gold/40" />
              )}

              <div
                className={`w-20 h-20 rounded-full border-2 bg-card flex items-center justify-center text-3xl transition duration-300 hover:-translate-y-2 hover:shadow-xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-5 font-semibold text-foreground text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted max-w-[150px] leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
