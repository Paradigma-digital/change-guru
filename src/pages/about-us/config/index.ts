import { PATH_PAGE } from "shared/config";

export const breadcrumbsList = [
  {
    link: PATH_PAGE.root,
    title: "Home",
  },
  {
    link: PATH_PAGE.about,
    title: "About us",
  },
];

export const sectionList = [
  {
    id: 1,
    img: "about1.png",
    title: "OUR MISSION",
    paragraphs: [
      "World of cryptocurrency exchanges. Our mission is to empower our community to make informed decisions and find the crypto exchange that suits your unique needs and preferences.",
    ],
    isLeftText: false,
  },
  {
    id: 2,
    img: "about2.png",
    title: "OUR VISION",
    paragraphs: [
      "At ChangeGuru, we understand that the cryptocurrency market can be complex and overwhelming. With countless exchanges to choose from, it can be challenging to determine which one is the right fit for you. That's where we come in. We provide a comprehensive and user-friendly directory of exchanges, coupled with powerful search and filtering options, to simplify your decision-making process.",
      "Our team consists of experts with deep knowledge and experience in both the crypto industry and traditional finance. We combine cutting-edge technology with meticulous research and analysis to bring you accurate and up-to-date information about each exchange's features, security measures, trading options, fees, and more.",
      "Our research team understands the importance of thorough testing and evaluation. We carefully assess each exchange's performance in various areas, including customer service responsiveness, user interface intuitiveness, security measures, liquidity, and more.",
    ],
    isLeftText: true,
  },
  {
    id: 3,
    img: "about3.png",
    title: "OUR GOAL ",
    paragraphs: [
      "Transparency and objectivity are at the core of our values. We strive to present you with unbiased information, allowing you to compare exchanges side by side based on your specific criteria.",
      "Our goal is to empower you to make confident decisions that align with your investment goals, trading strategies, and risk tolerance. ",
    ],
    isLeftText: false,
  },
  {
    id: 4,
    img: "about4.png",
    title: "THANKS",
    paragraphs: [
      "Thank you for choosing ChangeGuru as your trusted resource for crypto exchange evaluation.",
      "We are excited to be a part of your journey and help you find the exchange that empowers you to thrive in the world of cryptocurrencies.",
      "Happy trading!",
    ],
    isLeftText: true,
  },
];
