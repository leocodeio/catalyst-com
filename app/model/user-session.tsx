import { UserData } from "./user-data";

export interface UserSession {
  data: UserData | { id: "" };
  lightOrDarkMode: "light" | "dark";
  language: string;
  CSRFToken: string;
  metrics: {
    lastLogin: Date;
    loginCount: number;
    [key: string]: any;
  };
  impersonatingFromUserId?: string;
}
