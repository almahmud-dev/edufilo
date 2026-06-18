"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import { FiCalendar } from "react-icons/fi";

import PageHeader from "@/components/common/PageHeader";
import StatsCard from "@/components/common/StatsCard";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import EmptyState from "@/components/common/EmptyState";
import AcademicTable from "@/components/academicSystem/AcademicTable";
import AcademicMobileCard from "@/components/academicSystem/AcademicMobileCard";

import { MASTER_ACADEMIC, ACADEMIC_STATS } from "@/constants/academicData";

const CLASS_FILTERS = [
  { value: "all", label: { en: "All Classes", bn: "সকল ক্লাস" } },
  { value: "Class 6", label: { en: "Class 6", bn: "ক্লাস ৬" } },
  { value: "Class 7", label: { en: "Class 7", bn: "ক্লাস ৭" } },
  { value: "Class 8", label: { en: "Class 8", bn: "ক্লাস ৮" } },
];

function AcademicSystemContent() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  const filteredAcademic = useMemo(() => {
    return MASTER_ACADEMIC.filter((item) => {
      const matchesClass =
        selectedClass === "all" || item.class === selectedClass;
      const subjectText = lang === "BN" ? item.subject.bn : item.subject.en;
      const matchesSearch =
        subjectText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.teacher.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesClass && matchesSearch;
    });
  }, [searchQuery, selectedClass, lang]);

  return (
    <div className="min-h-screen bg-background text-foreground pt-6 pb-24">
      <Container className="space-y-6">
        <PageHeader
          lang={lang}
          title={{ en: "Academic System", bn: "একাডেমিক সিস্টেম" }}
          subtitle={{
            en: "Manage class routines, subject schedules, rooms, and teacher assignments.",
            bn: "শ্রেণি রুটিন, সময়সূচী এবং শিক্ষক বন্টন ব্যবস্থাপনা।",
          }}
          actionLabel={{ en: "Add New Period", bn: "নতুন পিরিয়ড যুক্ত করুন" }}
          actionIcon={FiCalendar}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {ACADEMIC_STATS.map((stat, idx) => (
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
            en: "Search by subject or teacher name...",
            bn: "বিষয় বা শিক্ষকের নাম দিয়ে খুঁজুন...",
          }}
          filterValue={selectedClass}
          onFilterChange={setSelectedClass}
          filterOptions={CLASS_FILTERS}
        />

        {filteredAcademic.length > 0 ? (
          <>
            <AcademicTable data={filteredAcademic} lang={lang} />
            <AcademicMobileCard data={filteredAcademic} lang={lang} />
          </>
        ) : (
          <EmptyState
            title={{ en: "No Academic Records Found", bn: "কোনো একাডেমিক রেকর্ড মেলেনি" }}
            message={{
              en: "Try adjusting your search queries or change the selected class parameter.",
              bn: "অনুগ্রহ করে অন্য কোনো বিষয়ের নাম বা ক্লাস সিলেক্ট করে চেষ্টা করুন।",
            }}
            lang={lang}
          />
        )}
      </Container>
    </div>
  );
}

export default function AcademicSystem() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center text-xs font-bold text-neutral-400 tracking-widest">
          SYNCING ACADEMIC SCHEDULES...
        </div>
      }
    >
      <AcademicSystemContent />
    </Suspense>
  );
}
