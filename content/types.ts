export interface WorkLayer {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface WorkItem {
  title: string;
  lead: string;
  stack: string[];
  year: string;
  link: string;
  layers: WorkLayer[];
}
