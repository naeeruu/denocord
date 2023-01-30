import { ActivityType, PresenceStatus } from "../deps.ts";

export interface Activity {
  name: string;
  /** name of the activity you want to display */
  type: ActivityType;
  /** the type of activity you want to display */
  url?: string
  /** twitch or youtube stream url (required if the activity type is streaming */
}

export interface PresenceOptions {
  activities: Activity[];
  /** array of activity objects */
  status: PresenceStatus;
  /** status for presences */
};
