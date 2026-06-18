import React from "react";
import { FiAlertCircle } from "react-icons/fi";

// খোঁজার রিজাল্ট খালি হলে এই ব্লকটা দেখানো হয় — তিন পেজেই layout same,
// শুধু icon, title আর message বদলায়।
export default function EmptyState({
  icon: Icon = FiAlertCircle,
  title,
  message,
  lang,
}) {
  return (
    <div className="bg-white dark:bg-card border border-dashed border-neutral-200 dark:border-border-custom/80 rounded-2xl p-12 text-center">
      <Icon className="w-8 h-8 text-neutral-300 dark:text-neutral-700 mx-auto mb-3" />
      <h3 className="text-sm font-bold text-neutral-700 dark:text-neutral-300">
        {lang === "BN" ? title.bn : title.en}
      </h3>
      <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
        {lang === "BN" ? message.bn : message.en}
      </p>
    </div>
  );
}
