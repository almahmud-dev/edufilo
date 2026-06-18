import React from "react";
import Footer from "@/components/layouts/Footer";
import PublicHeader from "@/components/layouts/PublicHeader";

// (dashboard) পেজ গুলো যেন এই header/footer না পায় তাই আলাদা group layout —
// আগে এটা root layout.js এ ছিল, সবগুলো route এই লোড হতো।
export default function PublicLayout({ children }) {
  return (
    <main className="flex flex-col min-h-screen">
      <PublicHeader />
      <div className="flex-1 h-full">{children}</div>
      <Footer />
    </main>
  );
}
