"use client";

import { useState, useRef } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";
import { useLanguage } from "@/context/LanguageContext";
import { faqItems, faqSection, faqLeftContent } from "@/helper/faq";
import Link from "next/link";

function FaqItem({ faq, isOpen, onToggle }) {
  const contentRef = useRef(null);

  return (
    <div className="rounded-2xl border border-gold/20 bg-card overflow-hidden transition-all duration-300 hover:border-gold/40 hover:shadow-lg">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left cursor-pointer"
      >
        <h3 className="text-base lg:text-lg font-semibold text-foreground">
          {faq.question}
        </h3>
        <span className="shrink-0 w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold">
          {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>

      <div
        style={{
          height: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
          overflow: "hidden",
          transition: "height 350ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={contentRef}>
          <p className="px-5 pb-5 text-muted leading-relaxed">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const { lang } = useLanguage();
  const langKey = lang === "BN" ? "bn" : "en";
  const currentFaqs = faqItems[langKey];
  const content = faqLeftContent[langKey];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 lg:py-20 overflow-hidden">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-14">
          <SectionHeader
            label={faqSection.label[langKey]}
            text={faqSection.title[langKey]}
            colorWord={faqSection.highlight[langKey]}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-start">
          {/* Left Side */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">
                EduFilos
              </p>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground leading-snug mb-4">
                {content.tagline}
              </h2>
              <p className="text-muted leading-relaxed">
                {content.description}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {content.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gold/20 bg-card px-4 py-5 text-center"
                >
                  <p className="text-2xl font-bold text-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-gold/20 bg-card px-6 py-6 flex flex-col gap-3">
              <p className="text-base font-semibold text-foreground">
                {content.cta.text}
              </p>
              <p className="text-sm text-muted">{content.cta.sub}</p>
              <Link href="/demo"
              className="self-start mt-1 px-5 py-2.5 rounded-xl bg-gold text-white text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer">
                {content.cta.btn}
              </Link>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            {currentFaqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={activeIndex === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
