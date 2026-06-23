export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Courses",
    href: "/courses",
    children: [
      { label: "IELTS Preparation", href: "/courses/ielts" },
      { label: "PTE Academic", href: "/courses/pte" },
      { label: "TOEFL iBT", href: "/courses/toefl" },
      { label: "English Writing", href: "/courses/english-writing" },
      { label: "Spoken English", href: "/courses/spoken-english" },
    ],
  },
  { label: "Batches", href: "/batches" },
  { label: "Free Test", href: "/free-diagnostic-test" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
];
