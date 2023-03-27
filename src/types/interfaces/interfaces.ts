import { SocialType } from "types/enums/enum";

export interface NavItemProps {
  name?: String,
  slug?: String,
  url?: String
}
export interface AwesomeItemProps {
  title?: string,
  description?: string,
  value?: number,
  imageUrl?: string,
  slug?: string
}
export interface ProjectItemProps {
  title?: string,
  varion?: string,
  imageUrl?: string,
  slug?: string
}
export interface SiteItemProps {
  quote?: string,
  imageUrl?: string,
  author?: string,
  major?: string,
  slug?: string
}
export interface ContactProps {
  name?: string;
  icon?: string;
  slug?: string;
  socialUrl?: string;
  target?: string;
  type?: SocialType
}

