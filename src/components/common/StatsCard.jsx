import React from "react";

// stat box গুলো student/fees/academic — তিন পেজেই এক্কেবারে একই গঠন, শুধু
// icon, value আর color আলাদা। তাই props দিয়ে generic বানানো।
export default function StatsCard({
  icon: Icon,
  title,
  value,
  color,
  lang,
  className = "",
}) {
  return (
    <div
      className={`bg-white dark:bg-card border rounded-2xl p-4 sm:p-5 flex items-center gap-4 ${color} ${className}`}
    >
      <div className="w-10 sm:w-12 aspect-square rounded-xl flex items-center justify-center text-xl shrink-0 border bg-current/5">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <span className="text-[11px] font-bold text-neutral-400 dark:text-muted-foreground uppercase block tracking-wider">
          {lang === "BN" ? title.bn : title.en}
        </span>
        <span className="text-lg sm:text-2xl font-black text-neutral-900 dark:text-white leading-none mt-1 block">
          {value}
        </span>
      </div>
    </div>
  );
}
