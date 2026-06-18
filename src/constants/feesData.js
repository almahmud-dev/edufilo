import { FiDollarSign, FiClock, FiPieChart } from "react-icons/fi";

export const FEES_STATS = [
  {
    title: { en: "Total Collected", bn: "মোট সংগ্রহ" },
    value: "৳৪,৫০,০০০",
    icon: FiDollarSign,
    color:
      "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 border-emerald-500/10",
  },
  {
    title: { en: "Pending Dues", bn: "বকেয়া ফি" },
    value: "৳৭৫,২০০",
    icon: FiClock,
    color: "text-rose-600 bg-rose-50 dark:bg-rose-500/10 border-rose-500/10",
  },
  {
    title: { en: "Invoices (Month)", bn: "মোট ইনভয়েস (চলতি মাস)" },
    value: "৩২০",
    icon: FiPieChart,
    color: "text-primary bg-primary/5 border-primary/10",
  },
];

export const MASTER_FEES = [
      {
        id: "INV-2026-001",
        name: { en: "Abdullah Al Mansur", bn: "আব্দুল্লাহ আল মনসুর" },
        type: { en: "Tuition Fee", bn: "টিউশন ফি" },
        amount: "৳১,৫০০",
        date: "১০ জুন, ২০২৬",
        status: "paid",
      },
      {
        id: "INV-2026-002",
        name: { en: "Zayd Ibn Harith", bn: "যায়দ ইবনে হারিস" },
        type: { en: "Exam Fee", bn: "পরীক্ষার ফি" },
        amount: "৳৫০০",
        date: "১২ জুন, ২০২৬",
        status: "unpaid",
      },
      {
        id: "INV-2026-003",
        name: { en: "Fatima Tuj Zohra", bn: "ফাতিমা তুজ জোহরা" },
        type: { en: "Tuition Fee", bn: "টিউশন ফি" },
        amount: "৳১,৫০০",
        date: "০৮ জুন, ২০২৬",
        status: "paid",
      },
      {
        id: "INV-2026-004",
        name: { en: "Umar Farooq", bn: "উমর ফারুক" },
        type: { en: "Session Fee", bn: "সেশন ফি" },
        amount: "৳৩,০০০",
        date: "১৫ জুন, ২০২৬",
        status: "unpaid",
      },
      {
        id: "INV-2026-005",
        name: { en: "Aisha Rahman", bn: "আয়েশা রহমান" },
        type: { en: "Admission Fee", bn: "ভর্তি ফি" },
        amount: "৳৫,০০০",
        date: "০১ জুন, ۲۰২৬",
        status: "paid",
      },
    ]