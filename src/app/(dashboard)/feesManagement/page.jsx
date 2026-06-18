"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import { FiPlusCircle } from "react-icons/fi";

import PageHeader from "@/components/common/PageHeader";
import StatsCard from "@/components/common/StatsCard";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import EmptyState from "@/components/common/EmptyState";
import FeesTable from "@/components/feesManagement/FeesTable";
import FeesMobileCard from "@/components/feesManagement/FeesMobileCard";

import { MASTER_FEES, FEES_STATS } from "@/constants/feesData";

const STATUS_FILTERS = [
  { value: "all", label: { en: "All Status", bn: "সকল স্ট্যাটাস" } },
  { value: "paid", label: { en: "Paid", bn: "পরিশোধিত (Paid)" } },
  { value: "unpaid", label: { en: "Unpaid", bn: "বকেয়া (Unpaid)" } },
];

function FeesManagementContent() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredFees = useMemo(() => {
    return MASTER_FEES.filter((fee) => {
      const matchesStatus =
        statusFilter === "all" || fee.status === statusFilter;
      const nameText = lang === "BN" ? fee.name.bn : fee.name.en;
      const matchesSearch =
        nameText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fee.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [searchQuery, statusFilter, lang]);

  return (
    <div className="min-h-screen bg-background text-foreground pt-6 pb-24">
      <Container className="space-y-6">
        <PageHeader
          lang={lang}
          title={{ en: "Fees Management", bn: "ফি ও তহবিল ব্যবস্থাপনা" }}
          subtitle={{
            en: "Track tuition, admission forms, monthly collections, and dues.",
            bn: "শিক্ষার্থীদের বেতন, পরীক্ষার ফি এবং পেমেন্ট ইনভয়েস ট্র্যাকিং।",
          }}
          actionLabel={{ en: "Create Invoice", bn: "নতুন ইনভয়েস তৈরি" }}
          actionIcon={FiPlusCircle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {FEES_STATS.map((stat, idx) => (
            <StatsCard
              key={stat.title.en}
              {...stat}
              lang={lang}
              className={idx === 2 ? "sm:col-span-2 lg:col-span-1" : ""}
            />
          ))}
        </div>

        <SearchFilterBar
          lang={lang}
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          searchPlaceholder={{
            en: "Search by student name or Invoice ID...",
            bn: "শিক্ষার্থীর নাম বা ইনভয়েস আইডি...",
          }}
          filterValue={statusFilter}
          onFilterChange={setStatusFilter}
          filterOptions={STATUS_FILTERS}
        />

        {filteredFees.length > 0 ? (
          <>
            <FeesTable data={filteredFees} lang={lang} />
            <FeesMobileCard data={filteredFees} lang={lang} />
          </>
        ) : (
          <EmptyState
            title={{ en: "No Invoice Records Found", bn: "কোনো ইনভয়েস রেকর্ড মেলেনি" }}
            message={{
              en: "Try adjusting your search queries or change the selected payment status parameter.",
              bn: "অনুগ্রহ করে অন্য কোনো নাম বা সঠিক ফিল্টার সিলেক্ট করে চেষ্টা করুন।",
            }}
            lang={lang}
          />
        )}
      </Container>
    </div>
  );
}

export default function FeesManagementPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] dark:bg-background flex items-center justify-center text-xs font-bold text-neutral-400 tracking-widest">
          INITIALIZING SECURE FINANCES...
        </div>
      }
    >
      <FeesManagementContent />
    </Suspense>
  );
}
