interface INav {
  href: string;
  label: string;
}

export interface INavItems {
  href: string;
  label: string;
  subItems?: {
    href: string;
    label: string;
  }[];
}

export const navItems: INavItems[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/services",
    label: "Services",
    subItems: [
      // { href: "/services/injectables", label: "Injectables" },
      // { href: "/services/daxxify", label: "Daxxify" },
      // { href: "/services/ageject", label: "Ageject" },
      // {
      //   href: "/services/hyper-dilute-radiesse",
      //   label: "Hyper-Dilute Radiesse",
      // },
      { href: "/services/facial-services", label: "Facial Services" },
      { href: "/services/energy-devices", label: "Energy Devices" },
      {
        href: "/services/injectable-treatments",
        label: "Injectable Treatments",
      },

      {
        href: "/services/weight-loss",
        label: "Wellness & Weight Loss",
      },
      {
        href: "/services/body-treatments",
        label: "Body Treatments",
      },

      {
        href: "/services/sexual-wellness",
        label: "Sexual Wellness",
      },
      { href: "/services/medical-services", label: "Medical Services" },
      { href: "/services/skincare-products", label: "Skin Care Products" },
      { href: "/services/memberships", label: "Memberships" },
    ],
  },
  { href: "/blog", label: "Blog" },
  { href: "/schedule-online", label: "Book Now" },
  // {
  //   href: "/shop",
  //   label: "Shop",
  //   subItems: [
  //     { href: "/services/zo-skin", label: "ZO Skin" },
  //     { href: "/services/skin-medica", label: "SkinMedica" },
  //     { href: "/services/exosomes", label: "Exosomes - (Plated)" },
  //   ],
  // },
  // {
  //   href: "/shop",
  //   label: "Shop",
  //   subItems: [
  //     { href: "/services/zo-skin", label: "ZO Skin" },
  //     { href: "/services/skin-medica", label: "SkinMedica" },
  //     { href: "/services/exosomes", label: "Exosomes - (Plated)" },
  //   ],
  // },
];
