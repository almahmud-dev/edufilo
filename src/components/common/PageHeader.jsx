import React from "react";

// ৩টা dashboard page (student, fees, academic) এই একই header pattern রিপিট হচ্ছিলো —
// title + subtitle + একটা action button। তাই এখানে আলাদা করে দিলাম।
export default function PageHeader({
  lang,
  title,
  subtitle,
  actionLabel,
  actionIcon: ActionIcon,
  onAction,
}) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-neutral-200/60 dark:border-border-custom/50 pb-5">
      <div>
        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-900 dark:text-white">
          {lang === "BN" ? title.bn : title.en}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-muted-foreground font-medium mt-0.5">
          {lang === "BN" ? subtitle.bn : subtitle.en}
        </p>
      </div>

      <button
        onClick={onAction}
        className="w-full sm:w-auto h-11 px-5 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs hover:brightness-105 transition-all cursor-pointer"
      >
        {ActionIcon && <ActionIcon className="w-4 h-4" />}
        <span>{lang === "BN" ? actionLabel.bn : actionLabel.en}</span>
      </button>
    </div>
  );
}
