import React from "react";
import DataTable from "@/components/common/DataTable";
import StatusBadge from "@/components/feesManagement/StatusBadge";

export default function FeesTable({ data, lang, onRowAction }) {
  const columns = [
    {
      key: "id",
      header: { en: "Invoice ID", bn: "ইনভয়েস আইডি" },
      cellClassName: "text-xs font-mono font-bold text-neutral-500 dark:text-muted-foreground",
      render: (f) => f.id,
    },
    {
      key: "name",
      header: { en: "Student Name", bn: "শিক্ষার্থীর নাম" },
      cellClassName: "text-sm font-bold text-neutral-900 dark:text-white",
      render: (f) => (lang === "BN" ? f.name.bn : f.name.en),
    },
    {
      key: "type",
      header: { en: "Fee Type", bn: "ফির ধরন" },
      cellClassName: "text-xs font-semibold text-neutral-600 dark:text-neutral-300",
      render: (f) => (lang === "BN" ? f.type.bn : f.type.en),
    },
    {
      key: "date",
      header: { en: "Date", bn: "তারিখ" },
      cellClassName: "text-xs font-medium text-neutral-500 dark:text-muted-foreground",
      render: (f) => f.date,
    },
    {
      key: "amount",
      header: { en: "Amount", bn: "পরিমাণ" },
      cellClassName: "text-sm font-black text-neutral-900 dark:text-white",
      render: (f) => f.amount,
    },
    {
      key: "status",
      header: { en: "Status", bn: "স্ট্যাটাস" },
      render: (f) => <StatusBadge status={f.status} />,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      getRowKey={(f) => f.id}
      lang={lang}
      onRowAction={onRowAction}
    />
  );
}
