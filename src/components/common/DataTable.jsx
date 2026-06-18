import React from "react";
import { FiMoreVertical } from "react-icons/fi";

// desktop টেবিলের শেল — thead/tbody/border সব জায়গায় same ছিল, কেবল
// columns আলাদা (StudentTable, FeesTable, AcademicTable নিজেদের columns দিচ্ছে)।
// মোবাইল কার্ড এখানে নেই, কারণ ৩টা পেজেই মোবাইল লেআউট নিজস্ব — আলাদা কম্পোনেন্টে আছে।
export default function DataTable({ columns, data, getRowKey, lang, onRowAction }) {
  return (
    <div className="hidden md:block bg-white dark:bg-card border border-neutral-200/60 dark:border-border-custom/60 rounded-2xl overflow-hidden shadow-2xs">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-neutral-50 dark:bg-neutral-900/40 border-b border-neutral-200/60 dark:border-border-custom/50">
            {columns.map((col) => (
              <th
                key={col.key}
                className="p-4 text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground"
              >
                {lang === "BN" ? col.header.bn : col.header.en}
              </th>
            ))}
            {onRowAction && (
              <th className="p-4 text-right text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-muted-foreground" />
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-100 dark:divide-border-custom/40">
          {data.map((row) => (
            <tr
              key={getRowKey(row)}
              className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/20 transition-colors"
            >
              {columns.map((col) => (
                <td key={col.key} className={`p-4 ${col.cellClassName || ""}`}>
                  {col.render(row)}
                </td>
              ))}
              {onRowAction && (
                <td className="p-4 text-right">
                  <button
                    onClick={() => onRowAction(row)}
                    className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-all cursor-pointer"
                  >
                    <FiMoreVertical className="w-4 h-4" />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
