import Features from "./features";
import Link from "next/link";
import styles from "./features.module.css";
import { useRouter } from "next/router";
// Transaltions for Features
const FEATURES_WITH_TRANSLATIONS = {
  "en-US": {
    title: "Backend Handbook",
    description: `Learn the ins and outs of backend development with our comprehensive handbook. From the basics to advanced techniques, our guide covers everything you need to know to become a proficient backend developer. From server-side languages and frameworks to building scalable systems, we've got you covered. Start your journey to becoming a backend pro today!.
    `,
  },
  "es-ES": {
    title: "ব্যাকএন্ড হ্যান্ডবুক",
    description: `বেসিক থেকে অ্যাডভান্সড টেকনিকগুলি পর্যন্ত, এই গাইড আপনাকে একজন প্রফেশনাল ব্যাকএন্ড ডেভেলপার হতে পারার সব জিনিস শেখাবে। সার্ভার-সাইড ভাষা এবং ফ্রেমওয়ার্ক থেকে স্কেল করা সিস্টেমগুলি তৈরি করার পর্যন্ত`,
  },
};
export default () => {
  const { locale, defaultLocale } = useRouter();
  const featureText = (key) =>
    FEATURES_WITH_TRANSLATIONS[locale]?.[key] ??
    FEATURES_WITH_TRANSLATIONS[defaultLocale][key]; // Fallback for missing translations
  return (
    <>
      <div className="flex justify-center lg:pb-10">
        <img src="/logo.svg" alt="SWR Logo" width="150" height="150" />
      </div>
      <h1 className="text-center font-extrabold md:text-5xl mt-8 mb-5">
        {featureText("title")}
      </h1>
      <Features />
      <div className="text-center opacity-75">{featureText("description")}</div>
      <div className="text-center mt-10">
        <Link href={"/docs/lets-start"}>
          <div className="bg-primary inline-block cursor-pointer text-white px-12 py-3 rounded-full">
            Start Reading
          </div>
        </Link>
      </div>
    </>
  );
};
