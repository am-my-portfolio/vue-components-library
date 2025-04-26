export interface IFooterProps {
  copyright_year: string;
  colors?: {
    border?: string;
    text?: string;
    txt_hover?: string;
  };
  socials: {
    name: string;
    href: string;
    icon: string;
    hidden?: boolean;
  }[];
  policies?: {
    text: string;
    href: string;
  }[]
}

// Example
// https://fontawesome.com/search
export const socials = [
  {
    name: "website",
    href: "https://afshan-martin.pages.dev",
    icon: "fa-solid fa-globe",
  },
  {
    name: "GitHub",
    href: "https://github.com/afshanaman81",
    icon: "fa-brands fa-github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/afshan-aman",
    icon: "fa-brands fa-linkedin",
  },
  {
    name: "X",
    href: "https://x.com/XXXXX",
    icon: "fa-brands fa-twitter",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/XXXXX",
    icon: "fa-brands fa-instagram",
  },
  {
    name: "facebook",
    href: "https://discord.gg/XXXXXX",
    icon: "fa-brands fa-facebook",
  },
  {
    name: "Discord",
    href: "https://discord.gg/XXXXXX",
    icon: "fa-brands fa-discord",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/XXXXX",
    icon: "fa-brands fa-youtube",
  },
];
