import {
  BadgeCheck,
  ChartColumnBig,
  ClipboardPen,
  FileCheck,
  Folders,
  LockOpen,
  ScrollText,
  Search,
  Users2,
} from "lucide-react";
export const menuGroups = [
  {
    name: "Menu Principale",
    menuItems: [
      {
        icon: <Users2 />,
        label: "Réferentiel Tiers",
        route: "#",
        children: [
          { label: "Personne Physique", route: "/" },
          { label: "Personne Morale", route: "/a" },
          { label: "Fiche Tiers", route: "/b" },
        ],
      },

      {
        icon: <Folders />,
        label: "Gestion Dossiers",
        route: "#",
      },

      {
        icon: <ClipboardPen />,
        label: "Gestion Acte",
        route: "#",
      },

      {
        icon: <ScrollText />,
        label: "Gestion Contrats",
        route: "#",
      },

      {
        icon: <BadgeCheck />,
        label: "Gestion Garanties",
        route: "#",
      },

      {
        icon: <Search />,
        label: "Gestion Expertises",
        route: "#",
      },

      {
        icon: <LockOpen />,
        label: "Gestion Mainlevées",
        route: "#",
      },

      {
        icon: <ChartColumnBig />,
        label: "Consulter Etats",
        route: "#",
      },

      {
        icon: <FileCheck />,
        label: "Editer Fiche Garantie",
        route: "#",
      },
    ],
  },
  // {
  //   name: "Menu Secondaire",
  //   menuItems: [
  //     {
  //       icon: <UserRound />,
  //       label: "Charts",
  //       route: "#",
  //       children: [{ label: "Basic Chart", route: "/charts/basic-chart" }],
  //     },
  //     {
  //       icon: <UserRound />,
  //       label: "UI Elements",
  //       route: "#",
  //       children: [
  //         { label: "Alerts", route: "/ui-elements/alerts" },
  //         { label: "Buttons", route: "/ui-elements/buttons" },
  //       ],
  //     },
  //     {
  //       icon: <UserRound />,
  //       label: "Authentication",
  //       route: "#",
  //       children: [{ label: "Sign In", route: "/auth/signin" }],
  //     },
  //   ],
  // },
];
