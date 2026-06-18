import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import StatusBadge from "@/components/feesManagement/StatusBadge";

export default function StudentMobileCard({ data, lang, onRowAction }) {
  return (
    <div className="block md:hidden space-y-3">
      {data.map((student) => (
        <div
          key={student.id}
          className="bg-white dark:bg-card border border-neutral-200/50 dark:border-border-custom/50 rounded-xl p-4 flex flex-col gap-2 shadow-xs"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 font-bold text-xs flex items-center justify-center border border-neutral-200/40 dark:border-border-custom/30 shrink-0">
                {student.name.en.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-neutral-900 dark:text-white leading-tight">
                  {lang === "BN" ? student.name.bn : student.name.en}
                </h4>
                <span className="text-[10px] font-mono font-bold text-neutral-400 tracking-wider">
                  {student.id}
                </span>
              </div>
            </div>

            <button
              onClick={() => onRowAction?.(student)}
              className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 cursor-pointer shrink-0"
            >
              <FiMoreVertical className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500 dark:text-muted-foreground font-semibold bg-neutral-50 dark:bg-neutral-900/40 px-3 py-2 rounded-lg border border-neutral-100 dark:border-border-custom/20">
            <span className="text-neutral-800 dark:text-neutral-200">{student.class}</span>
            <span className="text-neutral-300 dark:text-border-custom">•</span>
            <span>
              {lang === "BN" ? "রোল: " : "Roll: "}
              <strong className="text-primary font-bold">{student.roll}</strong>
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 pt-1 text-sm">
            <div className="truncate">
              <span className="text-neutral-400 block text-[10px] uppercase font-bold tracking-wider mb-0.5">
                {lang === "BN" ? "অভিভাবক" : "Guardian"}
              </span>
              <span className="font-medium text-neutral-600 dark:text-neutral-300 truncate">
                {student.guardian}
              </span>
            </div>

            <StatusBadge status={student.status} size="xs" />
          </div>
        </div>
      ))}
    </div>
  );
}
