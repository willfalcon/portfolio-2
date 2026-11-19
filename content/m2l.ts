import { WorkItem } from "@/content/types";

export const m2l: WorkItem = {
  title: "M2L.tv",
  lead: "Five-minute movement videos for Mississippi classrooms. I built the whole site, a Next.js frontend over the client’s WordPress video library.",
  layers: [
    {
      id: "categories",
      title: "Category rows with hover cards",
      shortTitle: "Categories",
      description:
        "Videos sit in rows by grade. On hover a card grows in place to show its grade, length and a save button, and stays inside the screen edge.",
      image: "/work/m2l-hover.jpg",
      imageAlt:
        "The Pre-K row with the Patterns card grown over its neighbours, showing its grade, its length and a save button",
    },
    {
      id: "search",
      title: "Search as you type",
      shortTitle: "Search",
      description:
        "A debounced search against a custom WordPress endpoint puts results under the box while a teacher is still typing.",
      image: "/work/m2l-search.jpg",
      imageAlt:
        "Shapes typed into the search box, with King/Shapes and Shapes listed under it",
    },
    {
      id: "video",
      title: "A link for every video",
      shortTitle: "Links",
      description:
        "Pressing play opens the player at its own URL, like /video/shapes, so a teacher can share one link. Tags and curricula have their own too.",
      image: "/work/m2l-video.jpg",
      imageAlt:
        "A video open in the player, with its title and grade under it and a close button",
    },
    {
      id: "favorites",
      title: "Favorites for the class",
      shortTitle: "Favorites",
      description:
        "The save button on any card adds the video to a Favorites row on the home page, for the breaks a class asks for again.",
      image: "/work/m2l-favorites.jpg",
      imageAlt:
        "A Favorites row holding the Patterns video above the Pre-K row",
    },
  ],
  stack: ["Next.js", "headless WordPress"],
  year: "2022",
  link: "https://m2l.tv",
};
