import React from "react";
import DataTable from "@/components/common/DataTable";
import StatusBadge from "@/components/feesManagement/StatusBadge";

export default function StudentTable({ data, lang, onRowAction }) {
  const columns = [
    {
      key: "id",
      header: { en: "ID", bn: "আইডি" },
      cellClassName: "text-xs font-mono font-bold text-neutral-500 dark:text-muted-foreground",
      render: (s) => s.id,
    },
    {
      key: "name",
      header: { en: "Student Name", bn: "শিক্ষার্থীর নাম" },
      cellClassName: "text-sm font-bold text-neutral-900 dark:text-white",
      render: (s) => (lang === "BN" ? s.name.bn : s.name.en),
    },
    {
      key: "class",
      header: { en: "Class", bn: "ক্লাস" },
      cellClassName: "text-xs font-semibold text-neutral-600 dark:text-neutral-300",
      render: (s) => s.class,
    },
    {
      key: "roll",
      header: { en: "Roll", bn: "রোল" },
      cellClassName: "text-xs font-bold text-primary",
      render: (s) => s.roll,
    },
    {
      key: "guardian",
      header: { en: "Guardian", bn: "অভিভাবক" },
      cellClassName: "text-xs font-medium text-neutral-500 dark:text-muted-foreground",
      render: (s) => s.guardian,
    },
    {
      key: "status",
      header: { en: "Status", bn: "স্ট্যাটাস" },
      render: (s) => <StatusBadge status={s.status} />,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      getRowKey={(s) => s.id}
      lang={lang}
      onRowAction={onRowAction}
    />
  );
}
