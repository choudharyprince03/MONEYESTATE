import { House } from "lucide-react"; // Import icons from lucide-react
import { Users } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { MapPin } from "lucide-react";
import { BarChart } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


export const navItems = [
  { label: "Features", href: "/Feature" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Premier Properties",
    image: user1,
    text: "MoneyEstates provided invaluable insights that helped us make informed decisions in our property investments. Highly recommend their services!",
  },
  {
    user: "Jane Smith",
    company: "Future Realty",
    image: user2,
    text: "The expertise and guidance from MoneyEstates were pivotal in navigating the real estate market. Their professionalism is unmatched.",
  },
  {
    user: "David Johnson",
    company: "Urban Development",
    image: user3,
    text: "MoneyEstates made our home buying process seamless and stress-free. Their team was with us every step of the way.",
  },
  {
    user: "Ronee Brown",
    company: "NextGen Realty",
    image: user4,
    text: "With MoneyEstates' advice, we secured our dream property at a great price. Their market knowledge is impressive!",
  },
  {
    user: "Michael Wilson",
    company: "Elite Estates",
    image: user5,
    text: "The analysis and reports provided by MoneyEstates helped us strategize our investments effectively. Truly a game-changer!",
  },
  {
    user: "Emily Davis",
    company: "Trustworthy Realty",
    image: user6,
    text: "We felt supported and well-informed throughout our real estate journey with MoneyEstates. They are experts in their field!",
  },
];

export const features = [
  {
    icon: <House />,
    text: "Comprehensive Market Analysis",
    description:
      "Gain insights into property values, trends, and market dynamics to make informed decisions.",
  },
  {
    icon: <Users />,
    text: "Expert Consultation",
    description:
      "Receive personalized advice from seasoned real estate professionals to meet your unique needs.",
  },
  {
    icon: <ShieldCheck />,
    text: "Secure Transactions",
    description:
      "Ensure safe and secure property transactions with our trusted advisory services.",
  },
  {
    icon: <MapPin />,
    text: "Location Insights",
    description:
      "Discover the best neighborhoods with in-depth location analysis and demographics.",
  },
  {
    icon: <BarChart />,
    text: "Investment Strategies",
    description:
      "Develop tailored investment strategies to maximize your returns in real estate.",
  },
];

export const checklistItems = [
  {
    title: "Tailored Investment Plans",
    description:
      "Receive customized plans to suit your financial goals and real estate aspirations.",
  },
  {
    title: "Property Valuation",
    description:
      "Get accurate property valuations to ensure fair pricing in your transactions.",
  },
  {
    title: "Market Trend Reports",
    description:
      "Stay updated with the latest market trends to make timely decisions.",
  },
  {
    title: "Negotiation Support",
    description:
      "Benefit from expert negotiation skills to secure the best deals.",
  },
];

export const pricingOptions = [
  {
    title: "Basic",
    price: "$0",
    features: [
      "Initial consultation",
      "Market trend report",
      "Property listings",
      "Email support",
    ],
  },
  {
    title: "Pro",
    price: "$100",
    features: [
      "Comprehensive market analysis",
      "Property valuation services",
      "Investment strategy session",
      "Priority support",
    ],
  },
  {
    title: "Premium",
    price: "$500",
    features: [
      "All Pro features",
      "Tailored investment plans",
      "Ongoing consultation",
      "24/7 support",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Guides" },
  { href: "#", text: "Case Studies" },
  { href: "#", text: "FAQs" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Client Testimonials" },
  { href: "#", text: "Success Stories" },
  { href: "#", text: "Blogs" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Webinars" },
  { href: "#", text: "Workshops" },
  { href: "#", text: "Networking" },
];
