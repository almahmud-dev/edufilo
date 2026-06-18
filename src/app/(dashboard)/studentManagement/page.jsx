"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import Container from "@/components/ui/Container";
import { FiUserPlus } from "react-icons/fi";

import PageHeader from "@/components/common/PageHeader";
import StatsCard from "@/components/common/StatsCard";
import SearchFilterBar from "@/components/common/SearchFilterBar";
import EmptyState from "@/components/common/EmptyState";
import StudentTable from "@/components/studentManagement/StudentTable";
import StudentMobileCard from "@/components/studentManagement/StudentMobileCard";

import { MASTER_STUDENT, STUDENT_STATS } from "@/constants/studentData";

const CLASS_FILTERS = [
  { value: "all", label: { en: "All Classes", bn: "সকল ক্লাস" } },
  { value: "Class 6", label: { en: "Class 6", bn: "ক্লাস ৬" } },
  { value: "Class 7", label: { en: "Class 7", bn: "ক্লাস ৭" } },
  { value: "Class 8", label: { en: "Class 8", bn: "ক্লাস ৮" } },
];

function StudentManagementContent() {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");

  const filteredStudents = useMemo(() => {
    return MASTER_STUDENT.filter((student) => {
      const matchesClass =
        selectedClass === "all" || student.class === selectedClass;
      const nameText = lang === "BN" ? student.name.bn : student.name.en;
      const matchesSearch =
        nameText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.id.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesClass && matchesSearch;
    });
  }, [searchQuery, selectedClass, lang]);

  return (
    <div className="min-h-screen bg-bg-background text-neutral-800 dark:text-foreground pt-6 pb-24">
      <Container className="px-4 max-w-7xl mx-auto space-y-6">
        <PageHeader
          lang={lang}
          title={{ en: "Student Management", bn: "শিক্ষার্থী ব্যবস্থাপনা" }}
          subtitle={{
            en: "Manage profiles, class rosters, rolls, and institutional records.",
            bn: "শিক্ষার্থীদের প্রোফাইল, রোল এবং ক্লাসভিত্তিক ডাটাবেজ।",
          }}
          actionLabel={{ en: "Add New Student", bn: "নতুন শিক্ষার্থী যুক্ত করুন" }}
          actionIcon={FiUserPlus}
        />

        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
          {STUDENT_STATS.map((stat) => (
            <StatsCard key={stat.title.en} {...stat} lang={lang} />
          ))}
        </div>

        <SearchFilterBar
          lang={lang}
          searchValue={searchQuery}
          onSearchChange={setSearchQuery}
          searchPlaceholder={{
            en: "Search by student name or ID...",
            bn: "নাম বা আইডি দিয়ে খুঁজুন...",
          }}
          filterValue={selectedClass}
          onFilterChange={setSelectedClass}
          filterOptions={CLASS_FILTERS}
        />

        {filteredStudents.length > 0 ? (
          <>
            <StudentTable data={filteredStudents} lang={lang} />
            <StudentMobileCard data={filteredStudents} lang={lang} />
          </>
        ) : (
          <EmptyState
            title={{ en: "No Student Records Found", bn: "কোনো শিক্ষার্থীর রেকর্ড মেলেনি" }}
            message={{
              en: "Try adjusting your search queries or change the selected class parameter.",
              bn: "অনুগ্রহ করে অন্য কোনো নাম, আইডি অথবা ক্লাস ফিল্টার সিলেক্ট করে ট্রাই করুন।",
            }}
            lang={lang}
          />
        )}
      </Container>
    </div>
  );
}

export default function StudentManagement() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#faf8f5] dark:bg-background flex items-center justify-center text-xs font-bold text-neutral-400 tracking-widest">
          INITIALIZING STUDENT DATABASE...
        </div>
      }
    >
      <StudentManagementContent />
    </Suspense>
  );
}
