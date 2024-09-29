import type { IUser } from "./IUser";
import type { IPlatform } from "./IPlatform";

export interface IPost {
  tweet_id: string;
  creation_date: string;
  text: string | null;
  media_url: string | null;
  video_url: string | null;
  user: IUser;
  language: string;
  favorite_count: number;
  retweet_count: number;
  reply_count: number;
  quote_count: number;
  retweet: boolean;
  views: string | null;
  timestamp: number;
  video_view_count: string | null;
  in_reply_to_status_id: string | null;
  quoted_status_id: string | null;
  binding_values: string | null;
  expanded_url: string;
  platform: IPlatform;
}
