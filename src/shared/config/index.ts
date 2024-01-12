import { PATH_PAGE } from "shared/config";

export const API_URL = "https://api.changeguru.io";
export const countryList = [
  {
    label: "Russia",
    value: "russia",
  },
  {
    label: "USA",
    value: "usa",
  },
  {
    label: "England",
    value: "england",
  },
];
export const genderList = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

export const navigationList = [
  {
    title: "Home",
    link: PATH_PAGE.root,
  },
  {
    title: "About us",
    link: PATH_PAGE.about,
  },
  {
    title: "FAQ",
    link: PATH_PAGE.faq,
  },
];

export const kycList = [
  {
    value: "NO",
    label: "NO",
  },
  {
    value: "Low",
    label: "Low (ID / Passport)",
  },
  {
    value: "High",
    label: "High (Submit ID/Passport + proof of address)",
  },
];
export const resptimeList = [
  {
    value: "<1 hour",
    label: "< 1 hour",
  },
  {
    value: "<3 hours",
    label: "< 3 hours",
  },
  {
    value: "<8 hours",
    label: "< 8 hours",
  },
  {
    value: "<24 hours",
    label: "< 24 hours",
  },
  {
    value: ">24 hours",
    label: "> 24 hours",
  },
];
export const liquidityList = [
  {
    value: "<100M",
    label: "< 100M",
  },
  {
    value: "<500M",
    label: "< 500M",
  },
  {
    value: ">500M",
    label: "> 500M",
  },
];

export * from "./routes";
export * from "./constants";
