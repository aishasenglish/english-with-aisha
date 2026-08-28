export type Course = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  whoFor: string[];
  modules: string[];
  includes: string[];
  price: number;
  /** Optional limited-time discount shown on the pricing card in place of the plain price. */
  discount?: {
    badgeLabel: string;
    originalPrice: string;
    discountedPrice: string;
    subtitle: string;
    /** Optional secondary-currency line shown below the primary price (e.g. local PKR alongside USD). */
    secondary?: {
      originalPrice: string;
      discountedPrice: string;
    };
  };
};

export const courses: Course[] = [
  {
    slug: "ielts",
    name: "IELTS Preparation",
    // Not publication-authoritative for /courses/ielts (IELTS Step 10) — this "Band 7 and
    // beyond" / "Band 7+" language was never owner-confirmed and must never appear in
    // search-facing metadata, structured data or internal-link anchor text. Confirmed unreachable
    // by that route: IELTS has its own dedicated components/ielts/IELTSHero.tsx (reading from
    // content/ielts.ts's `hero`), unlike components/CourseHero.tsx (used only by the PTE, TOEFL,
    // Spoken English and Writing pages), which is the only component that renders `tagline`.
    // Homepage and Courses-hub cards read content/coursePresentation.ts's already-clean IELTS
    // copy instead of this field. Left in place only because the shared Course type requires it.
    tagline: "IELTS Preparation — target Band 7 and beyond.",
    summary:
      "Target Band 7+ for study, work, or migration abroad. Academic and General Training both covered.",
    whoFor: [
      "Students and professionals preparing for study abroad",
      "Those applying for work visas or skilled migration",
      "Anyone who needs Academic or General Training IELTS",
    ],
    modules: [
      "Listening strategies",
      "Reading speed & accuracy",
      "Writing task structure, development and response quality",
      "Speaking practice with feedback on fluency, clarity and response development",
      "Understanding the band descriptors",
      "Time management under pressure",
    ],
    // Not publication-authoritative for /courses/ielts (IELTS Step 5) — every claim here is
    // still "Needs owner confirmation" per docs/ielts-offer-verification.md. The IELTS page no
    // longer renders this field (see components/ielts/IELTSLearningFormat.tsx for its verified
    // replacement); it's left in place only because the shared Course type and other pages'
    // <IncludedList> still depend on every course record having an `includes` array.
    includes: [
      "Live Zoom classes (recorded)",
      "Weekly practice tests",
      "Full-length mock exams",
      "Personal feedback on writing & speaking",
      "1-on-1 consultation option",
    ],
    // Not publication-authoritative for /courses/ielts (IELTS Step 6) — this figure was never
    // verified and must never be rendered on that page. The old `discount` object that
    // contradicted it ("LIMITED TIME: 40% OFF" from $75/PKR 20,000 down to $45/PKR 12,000, which
    // didn't even match this base price) has been removed entirely rather than left dormant.
    // content/ieltsPricing.ts is the only source /courses/ielts is allowed to read a fee from —
    // see components/ielts/IELTSPricing.tsx. This field is left in place only because the
    // shared Course type requires every record to have one and this page no longer imports
    // <PricingCard>, which is the only component that would otherwise render it.
    price: 10000,
  },
  {
    slug: "pte",
    name: "PTE Academic",
    // Not publication-authoritative for /courses/pte (PTE Step 1) — this "score high" tagline
    // and summary are confirmed unreachable by that route: PTE has its own dedicated
    // components/pte/PTEHero.tsx (reading from content/pte.ts's `hero`), unlike
    // components/CourseHero.tsx (used only by the TOEFL, Spoken English and Writing pages),
    // which is the only component that renders `tagline`/`whoFor`. Left in place only because
    // the shared Course type requires every record to have these fields.
    tagline: "PTE Academic — score high with smart strategies.",
    summary:
      "Score high with smart, template-driven strategies for the computer-based PTE Academic exam.",
    whoFor: [
      "Anyone needing PTE Academic for university or migration",
      "Those who want a faster, computer-based alternative to IELTS",
      "Professionals seeking a quicker pathway to results",
    ],
    // Not publication-authoritative for /courses/pte (PTE Step 2) — the corrected labels below
    // were a temporary Step 1 measure while components/CourseModules.tsx rendered them; that
    // render has been removed entirely now that components/pte/PTETaskCurriculum.tsx provides
    // the real, officially-verified four-skill curriculum (see content/pte.ts's `curriculum` and
    // docs/pte-content-sources.md). Left in place, still corrected (not reverted to the old
    // AI-scoring/templates wording), only because the shared Course type requires this field.
    modules: [
      "Understanding the published PTE Academic scoring information",
      "Response planning for Speaking and Writing tasks",
      "Familiarity with the current PTE Academic task types",
      "Speaking clarity, pronunciation and oral fluency",
      "Timing, pacing and computer-test routines",
    ],
    // Not publication-authoritative for /courses/pte (PTE Step 1) — every claim here is
    // "Needs owner confirmation" per docs/pte-offer-verification.md. The IncludedList render was
    // removed from that page entirely; left in place only because the shared Course type and
    // other pages' <IncludedList> still depend on every course record having an `includes` array.
    includes: [
      "Live Zoom classes (recorded)",
      "Weekly practice tests",
      "Full-length mock exams",
      "Personal feedback on writing & speaking",
      "1-on-1 consultation option",
    ],
    // Not publication-authoritative for /courses/pte (PTE Step 6) — this figure was never
    // verified and must never be rendered on that page. content/ptePricing.ts is the only source
    // /courses/pte is allowed to read a fee from (components/pte/PTEPricing.tsx). The
    // <PricingCard> render was removed from that page entirely; left in place only because the
    // shared Course type requires every record to have a price and this page no longer imports
    // the only component that would otherwise render it.
    price: 10000,
  },
  {
    slug: "toefl",
    name: "TOEFL iBT",
    // Not publication-authoritative for /courses/toefl (TOEFL Step 1) — "universities worldwide"
    // is an overly broad acceptance claim, never owner-confirmed. TOEFL has its own dedicated
    // components/toefl/TOEFLHero.tsx (reading from content/toefl.ts's `hero`), unlike
    // components/CourseHero.tsx (used only by Spoken English and Writing), which is the only
    // component that renders `tagline`/`whoFor`. Left in place only because the shared Course
    // type requires every record to have these fields.
    tagline: "TOEFL iBT — get ready for universities worldwide.",
    summary:
      "Comprehensive TOEFL iBT prep for students applying to universities that require the test.",
    whoFor: [
      "Students applying to universities in the US and worldwide",
      "Those whose universities require TOEFL iBT specifically",
      "Anyone preparing for graduate or undergraduate admissions",
    ],
    // Not publication-authoritative for /courses/toefl (TOEFL Step 1) — this pre-2026 structure
    // ("Integrated and independent Writing tasks", "Speaking responses that score") does not
    // describe the TOEFL iBT test introduced 21 January 2026. The CourseModules render was
    // removed from that page entirely; see components/toefl/TOEFLTaskCurriculum.tsx (TOEFL
    // Step 2) and content/toefl.ts's `curriculum` for the real, officially-verified four-skill
    // curriculum (docs/toefl-content-sources.md has the full ETS source mapping). Left in place,
    // uncorrected, only because the shared Course type requires this field.
    modules: [
      "Reading & Listening for academic content",
      "Integrated and independent Writing tasks",
      "Speaking responses that score",
      "Note-taking systems",
      "Academic vocabulary",
    ],
    // Not publication-authoritative for /courses/toefl (TOEFL Step 1) — every claim here is
    // "Needs owner confirmation" per docs/toefl-offer-verification.md. The IncludedList render
    // was removed from that page entirely; left in place only because the shared Course type and
    // other pages' <IncludedList> still depend on every course record having an `includes` array.
    includes: [
      "Live Zoom classes (recorded)",
      "Weekly practice tests",
      "Full-length mock exams",
      "Personal feedback on writing & speaking",
      "1-on-1 consultation option",
    ],
    // Not publication-authoritative for /courses/toefl (TOEFL Step 1) — this figure was never
    // verified and must never be rendered on that page. The <PricingCard> render was removed
    // from that page entirely; left in place only because the shared Course type requires every
    // record to have a price and this page no longer imports the only component that would
    // otherwise render it. content/toeflPricing.ts (TOEFL Step 6) is the only
    // publication-authoritative TOEFL pricing source — see docs/toefl-offer-verification.md.
    price: 10000,
  },
  {
    slug: "english-writing",
    // English Writing Step 1: aligned from the legacy "English Writing Mastery" (a promised-
    // outcome framing the dedicated page no longer makes) to the shorter nav/card label the
    // implementing prompt recommends. This field IS safely consumed site-wide (Footer,
    // CourseExplorer, DiagnosticForm's generic programme dropdown) -- unlike tagline/summary/
    // whoFor/modules/includes/price below, which are confirmed unreachable by the dedicated
    // /courses/english-writing route (it no longer imports CourseHero/CourseModules/IncludedList/
    // PricingCard -- see app/courses/english-writing/page.tsx) and remain non-authoritative.
    name: "English Writing",
    // Not publication-authoritative for /courses/english-writing (English Writing Step 1) --
    // "write clearly, correctly, confidently" presents an absolute outcome as assured. The
    // dedicated components/english-writing/EnglishWritingHero.tsx (reading from
    // content/englishWriting.ts's `hero`) is the only H1/hero this route renders now; CourseHero
    // (still used by O/A Level) is the only consumer of `tagline`/`whoFor`, and no longer applies
    // to this route. Left in place only because the shared Course type requires every record to
    // have these fields.
    tagline: "English Writing Mastery — write clearly, correctly, confidently.",
    summary:
      "Write polished English for academics, work, or everyday life with expert guidance and feedback.",
    // "expert guidance and feedback" and "clarity and confidence" as a promised end state are not
    // verified -- see docs/english-writing-offer-verification.md.
    whoFor: [
      "Students writing essays and academic assignments",
      "Professionals who write emails and reports in English",
      "Anyone who wants to write with clarity and confidence",
    ],
    // Not publication-authoritative for /courses/english-writing (English Writing Step 1) -- a
    // fixed six-module sequence is not confirmed. The CourseModules render was removed from that
    // page entirely; see components/english-writing/EnglishWritingPrioritiesPreview.tsx for the
    // current temporary preview (a full verified curriculum is a later step). Left in place,
    // uncorrected, only because the shared Course type requires this field.
    modules: [
      "Grammar that actually matters",
      "Sentence structure & punctuation",
      "Building strong paragraphs",
      "Essays, emails & professional writing",
      "Editing your own work",
      "Style and clarity",
    ],
    // Not publication-authoritative for /courses/english-writing (English Writing Step 1) -- every
    // claim here is "Unverified — do not publish" per docs/english-writing-offer-verification.md.
    // The IncludedList render was removed from that page entirely; left in place only because the
    // shared Course type and other pages' <IncludedList> still depend on every course record
    // having an `includes` array.
    includes: [
      "Live Zoom classes (recorded)",
      "Writing assignments with detailed feedback",
      "Regular tests",
      "1-on-1 review option",
    ],
    // Not publication-authoritative for /courses/english-writing (English Writing Step 1) -- this
    // figure was never verified and must never be rendered on that page. The <PricingCard> render
    // was removed from that page entirely; left in place only because the shared Course type
    // requires every record to have a price and this page no longer imports the only component
    // that would otherwise render it.
    price: 10000,
  },
  {
    slug: "o-a-level-english",
    name: "O & A Level English",
    tagline: "O & A Level English — taught the way examiners actually mark it.",
    summary:
      "Specialist Cambridge & Edexcel English coaching, from O Level and IGCSE through to AS and A2.",
    whoFor: [
      "O Level, IGCSE, AS and A Level students sitting Cambridge or Edexcel English",
      "Bright students who speak English well but keep landing on a B",
      "Parents who want an honest, evidenced picture of where their child actually stands",
      "Retakers who need a genuinely different approach this session",
    ],
    modules: [
      "Directed Writing & composition",
      "Comprehension and summary technique",
      "Literature set texts & essay structure",
      "Unseen text analysis",
      "Language analysis (9093) & General Paper (8021)",
      "Comparative and directed response",
    ],
    includes: [
      "Live small-group classes on Zoom",
      "Maximum 8 students per batch, so every script gets read",
      "Every class recorded and available to rewatch",
      "Complete syllabus coverage for the chosen paper and board",
      "Weekly written work, marked with examiner-style annotations",
      "Past-paper practice — by question type first, then full papers",
      "Two full mock exams per session, graded and returned with feedback",
      "A written progress report to parents each cycle",
      "WhatsApp access for questions between classes",
      "Guidance on the university applications where the English grade matters",
    ],
    price: 0,
  },
  {
    slug: "spoken-english",
    // Spoken English Step 10: aligned from the legacy "Spoken English & Fluency" (a promised-
    // outcome framing) to match the dedicated page's absolute title, breadcrumb and locked
    // form-variant label. This field IS safely consumed site-wide (Footer, CourseExplorer,
    // DiagnosticForm's generic programme dropdown) -- unlike tagline/summary/whoFor/modules/
    // includes/price below, which remain non-authoritative and unchanged.
    name: "Spoken English Coaching",
    // Not publication-authoritative for /courses/spoken-english (Spoken English Step 1) --
    // "speak without hesitation" presents hesitation-removal as a promised outcome, and "real
    // speaking fluency" is undefined. Spoken English has its own dedicated
    // components/spoken-english/SpokenEnglishHero.tsx (reading from content/spokenEnglish.ts's
    // `hero`), unlike components/CourseHero.tsx (used only by English Writing and O/A Level),
    // which is the only component that renders `tagline`/`whoFor`. Left in place only because the
    // shared Course type requires every record to have these fields.
    tagline: "Spoken English & Fluency — speak without hesitation.",
    summary:
      "Build real speaking fluency for interviews, work, study, or daily confidence.",
    // "freezes when speaking" is ableist/shaming framing; "confidence" is presented as something
    // the course delivers rather than a possible result of supported practice. See
    // docs/spoken-english-offer-verification.md.
    whoFor: [
      "Anyone who understands English but freezes when speaking",
      "Professionals preparing for interviews or presentations",
      "Students who need confidence in academic settings",
    ],
    // Not publication-authoritative for /courses/spoken-english (Spoken English Step 1) --
    // "Thinking in English" is not a definable or teachable module, "Confidence" is not a
    // curriculum domain, and "reducing hesitation" is undefined/unmeasured. The CourseModules
    // render was removed from that page entirely; see
    // components/spoken-english/SpokenEnglishPrioritiesPreview.tsx for the current temporary
    // preview (a full communication-needs curriculum is a later step). Left in place, uncorrected,
    // only because the shared Course type requires this field.
    modules: [
      "Pronunciation & clarity",
      "Building fluency and reducing hesitation",
      "Everyday and professional conversation",
      "Thinking in English",
      "Confidence for interviews & presentations",
    ],
    // Not publication-authoritative for /courses/spoken-english (Spoken English Step 1) -- every
    // claim here is "Needs owner confirmation" per docs/spoken-english-offer-verification.md. The
    // IncludedList render was removed from that page entirely; left in place only because the
    // shared Course type and other pages' <IncludedList> still depend on every course record
    // having an `includes` array.
    includes: [
      "Live Zoom classes (recorded)",
      "Regular speaking practice sessions",
      "Personal feedback",
      "Individual practice session option",
    ],
    // Not publication-authoritative for /courses/spoken-english (Spoken English Step 1) -- this
    // figure was never verified and must never be rendered on that page. The <PricingCard> render
    // was removed from that page entirely; left in place only because the shared Course type
    // requires every record to have a price and this page no longer imports the only component
    // that would otherwise render it.
    price: 10000,
  },
];
