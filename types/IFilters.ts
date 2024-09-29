export interface IFilters {
  platform?: Platform | "";
  query: string;
  startDate?: string;
  endDate?: string;
  sortBy?: SortBy | "";
}

export enum Platform {
  ALL = "",
  TWITTER = "Twitter",
  LINKEDIN = "Linkedin",
}

export enum SortBy {
  NEWEST = "newest",
  OLDEST = "oldest",
  INTERACTIONPOINT = "interactionPoint",
}
