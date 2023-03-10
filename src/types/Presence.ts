export { ActivityType, PresenceStatus } from "../../deps.ts";

export interface PresenceActivity {
  /** name of the activity you want to display */
  name: string;
  /** the type of activity you want to display */
  type: ActivityType;
  /** twitch or youtube stream url (required if the activity type is streaming */
  url?: string
}

export interface PresenceOptions {
  /** array of activity objects */
  activities: PresenceActivity[];
  /** status for presences */
  status: PresenceStatus;
};
