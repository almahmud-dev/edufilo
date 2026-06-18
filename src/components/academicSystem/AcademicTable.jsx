import React from "react";
import DataTable from "@/components/common/DataTable";

export default function AcademicTable({ data, lang, onRowAction }) {
  const columns = [
    {
      key: "id",
      header: { en: "Code", bn: "কোড" },
      cellClassName: "text-xs font-mono font-bold text-neutral-500 dark:text-muted-foreground",
      render: (a) => a.id,
    },
    {
      key: "subject",
      header: { en: "Subject Name", bn: "বিষয়ের নাম" },
      cellClassName: "text-sm font-bold text-neutral-900 dark:text-white",
      render: (a) => (lang === "BN" ? a.subject.bn : a.subject.en),
    },
    {
      key: "class",
      header: { en: "Class", bn: "ক্লাস" },
      cellClassName: "text-xs font-semibold text-neutral-600 dark:text-neutral-300",
      render: (a) => a.class,
    },
    {
      key: "time",
      header: { en: "Schedule Time", bn: "সময়সূচী" },
      cellClassName: "text-xs font-bold text-primary",
      render: (a) => a.time,
    },
    {
      key: "teacher",
      header: { en: "Instructor", bn: "শিক্ষক" },
      cellClassName: "text-xs font-medium text-neutral-700 dark:text-neutral-300",
      render: (a) => a.teacher,
    },
    {
      key: "room",
      header: { en: "Room", bn: "রুম নং" },
      cellClassName: "text-xs font-bold text-neutral-500 dark:text-muted-foreground",
      render: (a) => a.room,
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={data}
      getRowKey={(a) => a.id}
      lang={lang}
      onRowAction={onRowAction}
    />
  );
}
