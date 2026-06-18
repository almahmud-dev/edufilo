import { FiUser, FiBookOpen, FiCheckCircle } from "react-icons/fi";

// top stat card গুলোর ডেটা — আগে page এর ভেতরে useMemo এ hardcoded ছিল,
// এখন বাইরে আনলাম যাতে component re-render এ unnecessary dependency না থাকে।
export const STUDENT_STATS = [
  {
    title: { en: "Total Students", bn: "মোট শিক্ষার্থী" },
    value: "1,240",
    icon: FiUser,
    color: "text-primary bg-primary/5 border-primary/10",
  },
  {
    title: { en: "Today's Attendance", bn: "আজকের উপস্থিতি" },
    value: "94.2%",
    icon: FiCheckCircle,
    color:
      "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/10",
  },
  {
    title: { en: "Active Classes", bn: "অ্যাক্টিভ ক্লাস" },
    value: "18",
    icon: FiBookOpen,
    color:
      "text-amber-600 bg-amber-50 dark:bg-amber-500/10 border-amber-500/10",
  },
];

export const MASTER_STUDENT =[
    {
      id: "STU-001",
      name: { en: "Abdullah Al Mansur", bn: "আব্দুল্লাহ আল মনসুর" },
      class: "Class 6",
      roll: "01",
      status: "active",
      guardian: "Md. Mansur",
    },
    {
      id: "STU-002",
      name: { en: "Zayd Ibn Harith", bn: "যায়দ ইবনে হারিস" },
      class: "Class 7",
      roll: "05",
      status: "active",
      guardian: "Harith Ahmed",
    },
    {
      id: "STU-003",
      name: { en: "Fatima Tuj Zohra", bn: "ফাতিমা তুজ জোহরা" },
      class: "Class 6",
      roll: "02",
      status: "inactive",
      guardian: "Abdul Karim",
    },
    {
      id: "STU-004",
      name: { en: "Umar Farooq", bn: "উমর ফারুক" },
      class: "Class 8",
      roll: "12",
      status: "active",
      guardian: "Rafiqul Islam",
    },
    {
      id: "STU-005",
      name: { en: "Aisha Rahman", bn: "আয়েশা রহমান" },
      class: "Class 7",
      roll: "03",
      status: "active",
      guardian: "Fazlur Rahman",
    },
  ]