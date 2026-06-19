import Link from "next/link";
import { Home } from "lucide-react";
import { IoBookSharp } from "react-icons/io5";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import GoBackButton from "@/components/GoBackButton";

export default function Error404() {
  return (
    <main className="relative h-screen overflow-hidden bg-[#03120f] text-white flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f3b2d_0%,#03120f_70%)]" />

      <Image
        src="/404/islamic-frame.webp"
        alt=""
        aria-hidden="true"
        fill
        priority
        className="absolute inset-0 object-cover pointer-events-none select-none opacity-90"
      />

      <section className="relative z-10 w-full max-w-6xl text-center">
        <p className="text-xs sm:text-sm lg:text-4xl text-emerald-200/80">
          إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
        </p>

        <Image
          src="/404/arabic-calligraphy.webp"
          alt="Arabic calligraphy depicting Quranic verse about trust in Allah"
          width={0}
          height={0}
          sizes="(max-width: 768px) 90vw, 350px"
          priority
          className="mx-auto mb-4 w-auto h-auto max-w-[350px]"
        />

        <div className="flex items-center justify-center gap-3">
          <span className="flex items-center gap-1 text-emerald-500/60">
            <span className="w-8 h-px bg-emerald-500/60"></span>
            <MdKeyboardArrowLeft className="text-xl" />
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white -mt-3">
            Page Not Found
          </h2>
          <span className="flex items-center gap-1 text-emerald-500/60">
            <MdKeyboardArrowRight className="text-xl" />
            <span className="w-8 h-px bg-emerald-500/60"></span>
          </span>
        </div>

        <p className="mx-auto mt-5 max-w-xl text-sm md:text-base text-white/65">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            aria-label="Back to homepage"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-7 py-3 font-medium transition"
          >
            <Home size={18} />
            Back to Home
          </Link>
          <GoBackButton />
        </div>

        <div className="mt-8 mx-auto max-w-2xl rounded-2xl border border-emerald-500/20 bg-black/25 backdrop-blur-md p-5">
          <div className="flex items-center gap-4">
            <IoBookSharp className="text-emerald-400 text-5xl shrink-0" />
            <div>
              <p className="text-white/80 text-sm md:text-base">
                "And whoever puts their trust in Allah, then He is sufficient
                for them."
              </p>
              <p className="mt-2 text-emerald-400 text-sm">
                — Surah At-Talaq (65:3)
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
