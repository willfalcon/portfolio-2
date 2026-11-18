import { WorkItem } from "@/content/types";

export const skwahdle: WorkItem = {
  title: "Skwahdle",
  lead: "A daily five-letter word game I built for my family. They passed it around until it ran its course; I brought it back online as a work sample.",
  stack: ["React", "Airtable API"],
  year: "2021",
  link: "https://skwahdle.willhawks.com",
  layers: [
    {
      id: "daily",
      title: "Daily word from Airtable",
      shortTitle: "API",
      description:
        "Words are scheduled in a spreadsheet, so a new one needs no deploy.",
      image: "/work/skwahdle-dark.jpg",
      imageAlt:
        "A solved Skwahdle board: crane, pilot, then world in green, in the dark theme",
    },
    {
      id: "server",
      title: "Guesses checked on the server",
      shortTitle: "Server function",
      description:
        "A Netlify Function checks each guess against 5,756 words, so the list never reaches the browser. A made-up word gets a dry reply.",
      image: "/work/skwahdle-invalid.jpg",
      imageAlt:
        "Skwahdle rejecting the guess QZXVJ with the message: Do you need this? www.dictionary.com",
    },
    {
      id: "stats",
      title: "Stats kept through a rewrite",
      shortTitle: "State management",
      description:
        "Moving to Redux Toolkit changed the saved format, so a migration carries old streaks into the new store.",
      image: "/work/skwahdle-stats.jpg",
      imageAlt:
        "The stats screen after a win in three guesses: one played, 100 percent won, a streak of one and the guess distribution",
    },
    {
      id: "themes",
      title: "Four colour themes",
      shortTitle: "UI",
      description:
        "Settings switch the board between four colour themes, a dark one among them.",
      image: "/work/skwahdle-settings.jpg",
      imageAlt:
        "The settings screen with four theme colours: light grey, black, blue and orange",
    },
  ],
};
