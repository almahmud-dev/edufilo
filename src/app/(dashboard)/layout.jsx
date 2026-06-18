import React from "react";

// স্টুডেন্ট/ফি/অ্যাকাডেমিক — এই তিনটা পেজ ড্যাশবোর্ড সেকশনের অংশ, marketing
// header/footer এদের লাগে না। সাইডবার বা টপবার ভবিষ্যতে এখানে যুক্ত হবে।
export default function DashboardLayout({ children }) {
  return <section className="w-full min-h-screen antialiased">{children}</section>;
}
