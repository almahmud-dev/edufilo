import React from "react";
import { FiMoreVertical, FiFileText } from "react-icons/fi";
import StatusBadge from "@/components/feesManagement/StatusBadge";

export default function FeesMobileCard({ data, lang, onRowAction }) {
  return (
    <div className="block md:hidden space-y-3">
      {data.map((fee) => (
        <div
          key={fee.id}
          className="bg-card border border-neutral-200/50 dark:border-border-custom/50 rounded-xl p-4 flex flex-col gap-2 shadow-xs"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-500 flex items-center justify-center border border-neutral-200/40 dark:border-border-custom/30 shrink-0">
                <FiFileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                  {lang === "BN" ? fee.name.bn : fee.name.en}
                </h4>
                <span className="text-[10px] font-mono font-bold text-neutral-400 tracking-wider">
                  {fee.id}
                </span>
              </div>
            </div>

            <button
              onClick={() => onRowAction?.(fee)}
              className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer shrink-0"
            >
              <FiMoreVertical className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-sm bg-neutral-50 dark:bg-neutral-900/40 px-3 py-2 rounded-lg border border-neutral-100 dark:border-border-custom/20">
            <span className="text-neutral-700 dark:text-neutral-300 font-bold">
              {lang === "BN" ? fee.type.bn : fee.type.en}
            </span>
            <span className="text-sm font-black text-neutral-900 dark:text-white">
              {fee.amount}
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 pt-1 text-sm">
            <div>
              <span className="text-neutral-400 block text-xs uppercase font-bold tracking-wider mb-0.5">
                {lang === "BN" ? "তারিখ" : "Issue Date"}
              </span>
              <span className="font-semibold text-neutral-500 dark:text-neutral-400">
                {fee.date}
              </span>
            </div>

            <StatusBadge status={fee.status} size="xs" />
          </div>
        </div>
      ))}
    </div>
  );
}
