import React from "react";

// fees এর paid/unpaid আর student এর active/inactive — দুটোই একই দেখতে pill
// badge, কেবল color map আলাদা। দুই জায়গা থেকেই এটা import হবে।
const STATUS_STYLES = {
  paid: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  active:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20",
  unpaid:
    "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20",
  inactive:
    "bg-neutral-100 text-neutral-600 border-neutral-200 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-700",
};

export default function StatusBadge({ status, size = "sm" }) {
  const style = STATUS_STYLES[status] || STATUS_STYLES.inactive;
  const sizeClass =
    size === "xs" ? "text-[9px] px-2 py-0.5" : "text-[10px] px-2 py-0.5";

  return (
    <span
      className={`inline-flex items-center rounded font-bold uppercase tracking-wide border ${sizeClass} ${style}`}
    >
      {status}
    </span>
  );
}
