import { useRouter } from "next/router";
const TITLE_WITH_TRANSLATIONS = {
  "en-US": "Becoming a Backend Pro: A Guide to Server-side Development",
  "es-ES": "ব্যাকএন্ড প্রো হওয়া: সার্ভার-সাইড ডেভেলপমেন্টের জন্য একটি গাইড",
};
const FEEDBACK_LINK_WITH_TRANSLATIONS = {
  "en-US": "Question? Give us feedback →",
  "es-ES": "প্রশ্ন? আমাদের মতামত দিন →",
};

const HEADING_WITH_TRANSLATIONS = {
  "en-US": "Backend Handbook",
  "es-ES": "ব্যাকএন্ড হ্যান্ডবুক",
};
export default {
  projectLink: "https://github.com/jobayer977/backendhandbook",
  docsRepositoryBase: "https://github.com/jobayer977/backendhandbook",
  titleSuffix: " – BackendHandbook",
  search: true,
  unstable_flexsearch: true,
  floatTOC: true,
  feedbackLink: () => {
    const { locale } = useRouter();
    return (
      FEEDBACK_LINK_WITH_TRANSLATIONS[locale] ||
      FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]
    );
  },
  feedbackLabels: "feedback",
  logo: () => {
    const { locale } = useRouter();
    return (
      <>
        <img className="h-5 w-5 " src="/logo.svg" alt="" />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title={"BackendHandbook: " + (TITLE_WITH_TRANSLATIONS[locale] || "")}
        >
          {HEADING_WITH_TRANSLATIONS[locale] || "BackendHandbook"}
        </span>
      </>
    );
  },
  head: ({ title, meta }) => {
    const { route } = useRouter();
    const ogImage =
      meta.image ||
      `https://backendhandbook.org${
        /\/index\.+/.test(route) ? "" : "?title=" + encodeURIComponent(title)
      }`;
    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content={
            meta.description ||
            "Learn the ins and outs of backend development with our comprehensive handbook. From the basics to advanced techniques, our guide covers everything you need to know to become a proficient backend developer. From server-side languages and frameworks to building scalable systems, we've got you covered. Start your journey to becoming a backend pro today!."
          }
        />
        <meta
          name="og:description"
          content={
            meta.description ||
            "BackendHandbook - Learn the ins and outs of backend development with our comprehensive handbook. From the basics to advanced techniques, our guide covers everything you need to know to become a proficient backend developer. From server-side languages and frameworks to building scalable systems, we've got you covered. Start your journey to becoming a backend pro today!."
          }
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@vercel" />
        <meta name="twitter:image" content={ogImage} />
        <meta
          name="og:title"
          content={
            title
              ? title + " – BackendHandbook"
              : "Becoming a Backend Pro: A Guide to Server-side Development"
          }
        />
        <meta name="og:image" content={ogImage} />
        <meta name="apple-mobile-web-app-title" content="BackendHandbook" />
        <script
          lang="javascript"
          dangerouslySetInnerHTML={{
            __html: `if (!window.localStorage.getItem("theme_default")) {
      window.localStorage.setItem("theme", "dark");
      window.localStorage.setItem("theme_default", "dark");
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }`,
          }}
        />
        ;
      </>
    );
  },
  footerEditLink: ({ locale }) => {
    switch (locale) {
      case "es-ES":
        return "GitHub → এই পৃষ্ঠাটি সম্পাদনা করুন →";
      default:
        return "Edit this page on GitHub →";
    }
  },
  footerText: ({ locale }) => {
    switch (locale) {
      case "es-ES":
        return (
          <a
            href="https://twitter.com/jobayerdev"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">দ্বারা চালিত - জো</span>
          </a>
        );
      default:
        return (
          <a
            href="https://twitter.com/jobayerdev"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-1">Powered by - Jo</span>
          </a>
        );
    }
  },
  // i18n: [
  //   { locale: "en-US", text: "English" },
  //   { locale: "es-ES", text: "Español" },
  // ],
};
