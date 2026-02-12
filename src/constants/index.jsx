import { House } from "lucide-react";
import { Users } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { MapPin } from "lucide-react";
import { BarChart } from "lucide-react";
import { Building } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";


// ================= NAVIGATION =================

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Listings", href: "/listings" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];


// ================= TESTIMONIALS =================

export const testimonials = [
  {
    user: "Rohit Mehra",
    company: "DLF Phase 2, Gurugram",
    image: user1,
    text: "MoneyEstate helped us find the perfect investment property in Gurugram. Their local knowledge and transparent process made everything smooth.",
  },
  {
    user: "Anjali Verma",
    company: "Sector 56, Gurugram",
    image: user2,
    text: "Vikas Singh personally guided us through every step. The consultation was honest and data-driven. Highly recommended!",
  },
  {
    user: "Sandeep Arora",
    company: "Golf Course Road",
    image: user3,
    text: "From property visits to negotiation, MoneyEstate handled everything professionally. Excellent service.",
  },
  {
    user: "Neha Kapoor",
    company: "Sohna Road",
    image: user4,
    text: "Their inventory options in Gurugram are impressive. We secured a great deal thanks to their negotiation support.",
  },
  {
    user: "Amit Bansal",
    company: "New Gurgaon",
    image: user5,
    text: "Accurate property valuation and market insights helped us make the right investment decision.",
  },
  {
    user: "Priya Sharma",
    company: "MG Road, Gurugram",
    image: user6,
    text: "Professional, transparent, and reliable. MoneyEstate truly understands the Gurugram real estate market.",
  },
];


// ================= FEATURES =================

export const features = [
  {
    icon: <Building />,
    text: "Verified Gurugram Listings",
    description:
      "Explore verified residential and commercial inventory across Gurugram’s prime locations.",
  },
  {
    icon: <House />,
    text: "Property Buying & Selling Assistance",
    description:
      "End-to-end support for buying, selling, and investing in Gurugram real estate.",
  },
  {
    icon: <Users />,
    text: "Expert Consultation by Vikas Singh",
    description:
      "Personalized real estate consultation based on your financial goals and property requirements.",
  },
  {
    icon: <MapPin />,
    text: "Location-Based Insights",
    description:
      "Detailed analysis of Gurugram sectors including infrastructure, connectivity, and ROI potential.",
  },
  {
    icon: <BarChart />,
    text: "Investment Planning",
    description:
      "Strategic property investment planning focused on long-term appreciation and rental income.",
  },
  {
    icon: <ShieldCheck />,
    text: "Secure & Transparent Transactions",
    description:
      "Complete documentation support and transparent dealings to ensure safe property transactions.",
  },
];


// ================= SERVICES CHECKLIST =================

export const checklistItems = [
  {
    title: "Residential & Commercial Inventory",
    description:
      "Access curated listings across DLF, Golf Course Road, Sohna Road, New Gurgaon and more.",
  },
  {
    title: "Property Valuation",
    description:
      "Accurate property valuation based on real-time Gurugram market data.",
  },
  {
    title: "Market Trend Reports",
    description:
      "Updated insights on Gurugram real estate trends, pricing and demand.",
  },
  {
    title: "Negotiation & Deal Closure Support",
    description:
      "Professional negotiation to help you secure the best price and terms.",
  },
];


// ================= PRICING =================

export const pricingOptions = [
  {
    title: "Consultation",
    price: "Free",
    features: [
      "Initial consultation with Vikas Singh",
      "Basic property guidance",
      "Market overview of Gurugram",
      "Phone & email support",
    ],
  },
  {
    title: "Standard Advisory",
    price: "Custom",
    features: [
      "Verified property listings",
      "Property visits coordination",
      "Investment strategy guidance",
      "Negotiation assistance",
    ],
  },
  {
    title: "Premium End-to-End Service",
    price: "Custom",
    features: [
      "All Standard features",
      "Complete documentation support",
      "Loan & legal assistance guidance",
      "Priority support",
    ],
  },
];


// ================= FOOTER LINKS =================

export const resourcesLinks = [
  { href: "/listings", text: "Available Listings" },
  { href: "/services", text: "Our Services" },
  { href: "/contact", text: "Contact Us" },
  { href: "/testimonials", text: "Client Reviews" },
];

export const platformLinks = [
  { href: "#", text: "Residential Properties" },
  { href: "#", text: "Commercial Properties" },
  { href: "#", text: "Investment Opportunities" },
  { href: "#", text: "Gurugram Sectors Guide" },
];

export const communityLinks = [
  { href: "tel:9910003577", text: "Call: 9910003577" },
  { href: "mailto:moneyestate.singh@gmail.com", text: "Email: moneyestate.singh@gmail.com" },
  { href: "#", text: "Office: Gurugram, Haryana" },
  { href: "#", text: "Owner: Vikas Singh" },
];
