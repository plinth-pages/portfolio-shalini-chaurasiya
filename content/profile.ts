import type { Profile } from "./types";

export const profile: Profile = {
  name: "Shalini Chaurasiya",
  title: "Student",
  headline: "Learning, building, and breaking things intentionally",
  avatarUrl: "https://avatars.githubusercontent.com/u/186699651?v=4",
  email: "",
  location: "India",
  cta: {
    label: "Contact me",
    href: "https://github.com/Shalini-chaurasiya",
  },
  about: [
    "I'm studying and spending my spare time on projects that teach me something new.",
    "I'm looking for internships and chances to learn from experienced teams.",
  ],
  stats: [
    {
      label: "Projects",
      value: "21",
    },
    {
      label: "Hackathons",
      value: "2",
    },
    {
      label: "Courses completed",
      value: "12",
    },
  ],
  socials: [
    {
      platform: "github",
      url: "https://github.com/Shalini-chaurasiya",
    },
  ],
  contactNote: "Open to internships, hackathons and study groups.",
};
