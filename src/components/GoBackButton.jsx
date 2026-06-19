"use client";

import { ArrowLeft } from "lucide-react";

export default function GoBackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      aria-label="Go Back to previous page"
      className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-500/25 bg-black/20 px-7 py-3 font-medium hover:bg-emerald-500/10 transition"
    >
      <ArrowLeft size={18} />
      Go Back
    </button>
  );
}
