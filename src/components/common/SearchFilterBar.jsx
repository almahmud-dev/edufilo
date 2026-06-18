import React from "react";
import { FiSearch, FiSliders } from "react-icons/fi";

// search input + একটা dropdown filter — student/fees/academic পেজে structure
// সেইম, শুধু placeholder আর filter options ভিন্ন। props দিয়ে কন্ট্রোল করছি।
export default function SearchFilterBar({
  lang,
  searchValue,
  onSearchChange,
  searchPlaceholder,
  filterValue,
  onFilterChange,
  filterOptions,
}) {
  return (
    <div className="bg-card border border-border-custom/60 rounded-2xl p-3 flex flex-col md:flex-row gap-3 justify-between items-center shadow-2xs">
      <div className="relative w-full md:max-w-md">
        <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 w-4 h-4" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full h-11 pl-11 pr-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-border-custom rounded-xl text-sm font-medium outline-none focus:border-primary/30 transition-all"
          placeholder={lang === "BN" ? searchPlaceholder.bn : searchPlaceholder.en}
        />
      </div>

      <div className="w-full md:w-auto flex items-center gap-2 self-stretch md:self-auto">
        <div className="relative w-full md:w-48">
          <select
            value={filterValue}
            onChange={(e) => onFilterChange(e.target.value)}
            className="w-full h-11 px-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/60 dark:border-border-custom rounded-xl text-xs font-bold text-neutral-600 dark:text-muted-foreground outline-none appearance-none cursor-pointer"
          >
            {filterOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {lang === "BN" ? opt.label.bn : opt.label.en}
              </option>
            ))}
          </select>
          <FiSliders className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
