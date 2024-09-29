import { SortBy, Platform } from "./IFilters";

export interface SortObj {
  text: string;
  sortBy: SortBy;
}

export interface PlatformObj {
  text: string;
  value: Platform;
}
