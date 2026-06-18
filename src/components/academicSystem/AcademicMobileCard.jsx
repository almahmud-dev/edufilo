import React from "react";
import { FiMoreVertical, FiBookmark } from "react-icons/fi";

export default function AcademicMobileCard({ data, lang, onRowAction }) {
  return (
    <div className="block md:hidden space-y-3">
      {data.map((item) => (
        <div
          key={item.id}
          className="bg-white dark:bg-card border border-neutral-200/50 dark:border-border-custom/50 rounded-xl p-4 flex flex-col gap-3 shadow-xs"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-500 flex items-center justify-center border border-neutral-200/40 dark:border-border-custom/30 shrink-0">
                <FiBookmark className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                  {lang === "BN" ? item.subject.bn : item.subject.en}
                </h4>
                <span className="text-[10px] font-mono font-bold text-neutral-400 tracking-wider">
                  {item.id}
                </span>
              </div>
            </div>

            <button
              onClick={() => onRowAction?.(item)}
              className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer shrink-0"
            >
              <FiMoreVertical className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs bg-neutral-50 dark:bg-neutral-900/40 px-3 py-2 rounded-lg border border-neutral-100 dark:border-border-custom/20">
            <span className="text-neutral-800 dark:text-neutral-200 font-bold">{item.class}</span>
            <span className="text-neutral-300 dark:text-border-custom">•</span>
            <span className="text-primary font-bold">{item.time}</span>
          </div>

          <div className="flex items-center justify-between gap-4 pt-1 text-sm">
            <div>
              <span className="text-neutral-400 block text-xs uppercase font-bold tracking-wider mb-0.5">
                {lang === "BN" ? "শিক্ষক" : "Instructor"}
              </span>
              <span className="font-semibold text-neutral-600 dark:text-neutral-300">
                {item.teacher}
              </span>
            </div>

            <div className="text-right">
              <span className="text-neutral-400 block text-xs uppercase font-bold tracking-wider mb-0.5">
                {lang === "BN" ? "স্থান" : "Location"}
              </span>
              <span className="inline-flex px-1.5 py-0.5 rounded font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
                {item.room}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
