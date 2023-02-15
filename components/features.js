import styles from "./features.module.css";
import { useRouter } from "next/router";
const Feature = ({ text, icon }) => (
  <div className={styles.feature}>
    {icon}
    <h4>{text}</h4>
  </div>
);
const TITLE_WITH_TRANSLATIONS = {
  "en-US": "Becoming a Backend Pro: A Guide to Server-side Development",
  "es-ES": "ব্যাকএন্ড প্রো হওয়া: সার্ভার-সাইড ডেভেলপমেন্টের জন্য একটি গাইড",
};
// Transaltions for Features
const FEATURES_WITH_TRANSLATIONS = {
  "en-US": {
    detailedExplanation: "Detailed explanation",
    realWorldExamples: "Real-world examples",
    suspense: "Suspense",
    comprehensiveReference: "Comprehensive Reference",
  },
  "es-ES": {
    detailedExplanation: "Detailed explanation",
    realWorldExamples: "Real-world examples",
    suspense: "Suspense",
    comprehensiveReference: "Comprehensive Reference",
  },
};
export default () => {
  const { locale, defaultLocale } = useRouter();
  const featureText = (key) =>
    FEATURES_WITH_TRANSLATIONS[locale]?.[key] ??
    FEATURES_WITH_TRANSLATIONS[defaultLocale][key]; // Fallback for missing translations
  return (
    <div className="mx-auto max-w-full w-[880px] text-center px-4 mb-10">
      <p className="text-lg mb-2 text-gray-600 md:!text-2xl">
        {TITLE_WITH_TRANSLATIONS[locale]}
      </p>
      <div className={styles.features}>
        <Feature
          text={featureText("detailedExplanation")}
          icon={
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          }
        />
        <Feature
          text={featureText("realWorldExamples")}
          icon={
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              shapeRendering="geometricPrecision"
              viewBox="0 0 24 24"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
          }
        />
        <Feature
          text={featureText("suspense")}
          icon={
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="10" y1="15" x2="10" y2="9"></line>
              <line x1="14" y1="15" x2="14" y2="9"></line>
            </svg>
          }
        />
        <Feature
          text={featureText("comprehensiveReference")}
          icon={
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="12" cy="5" r="1"></circle>
              <circle cx="12" cy="19" r="1"></circle>
            </svg>
          }
        />
      </div>
    </div>
  );
};
