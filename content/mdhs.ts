import { WorkItem } from "@/content/types";

export const mdhs: WorkItem = {
  title: "MS Department of Human Services",
  lead: "The state agency’s public site, with about 10 divisions and more than 100,000 visitors a month. I led development and built the theme and block library from scratch, checked against WCAG 2.2 AA.",
  layers: [
    {
      id: "blocks",
      title: "25+ custom Gutenberg blocks",
      shortTitle: "Custom Blocks",
      description:
        "Editors build pages from blocks that only allow the design system’s options, so new pages stay on brand without a developer.",
      image: "/work/mdhs-blocks.jpg",
      imageAlt:
        "The MDHS contact page: quick help buttons, phone numbers and a list of program accordions",
    },
    {
      id: "help",
      title: "Help topics on the homepage",
      shortTitle: "Help Topics",
      description:
        "The main way into services: a carousel of topics on a desktop that turns into a stacked list on a phone, edited by staff in WordPress.",
      image: "/work/mdhs-help.jpg",
      imageAlt:
        "The MDHS homepage’s I need help with topics, Food, Getting a Job and Child Care, above the site search",
    },
    {
      id: "county",
      title: "County office location search",
      shortTitle: "Preact Block",
      description:
        "A Preact block searches MDHS’s Smartsheet data through a WordPress REST endpoint and saves a county’s contacts as a PDF.",
      image: "/work/mdhs-county.jpg",
      imageAlt:
        "The Find help now panel with Hinds typed into the county search and Hinds offered below it",
    },
    {
      id: "procurement",
      title: "Procurement tables from SharePoint",
      shortTitle: "SharePoint API",
      description:
        "Sortable, exportable tables pulled server-side from the agency’s SharePoint lists.",
      image: "/work/mdhs-procurement.jpg",
      imageAlt:
        "The Open Procurements page with a sortable table of titles, statuses and procurement numbers",
    },
  ],
  stack: ["Custom Wordpress"],
  year: "2023",
  link: "https://www.mdhs.ms.gov/",
};
