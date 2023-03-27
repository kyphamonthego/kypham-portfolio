import { SocialType } from "types/enums/enum";

export const SocialsModel = [
  {
    name: "Facebook",
    icon: "facebook.svg",
    slug: "facebook-social",
    socialUrl: "https://fb.com/kyphamonthego",
    target: "_blank",
    type: SocialType.URL
  },
  {
    name: "Instagram",
    icon: "instagram.svg",
    slug: "instagram-social",
    socialUrl: "kyphamonthego",
    target: "_blank",
    type: SocialType.INSTAGRAM
  },
  {
    name: "LinkedIn",
    icon: "linkedin.svg",
    slug: "linkedin-social",
    socialUrl: "kyphamonthego/",
    target: "_blank",
    type: SocialType.LINKED_IN
  },
  {
    name: "Slack",
    icon: "slack.svg",
    slug: "slack-social",
    socialUrl: "kyphamonthego",
    target: "_blank",
    type: SocialType.SLACK
  },
  {
    name: "Gmail",
    icon: "gmail.svg",
    slug: "gmail-social",
    socialUrl: "kyphamonthego@gmail.com",
    target: "_blank",
    type: SocialType.MAIL
  }
]