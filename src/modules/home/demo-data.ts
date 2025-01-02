import type { CategoriesGetManyOutput } from "@/modules/categories/types";

/**
 * Demo / placeholder data used to populate the storefront when the database
 * has not been seeded yet (e.g. local preview without Stripe). Real data from
 * Payload always takes precedence — these are only used as a fallback.
 */

export const DEMO_CATEGORIES = [
  { id: "demo-cat-all", name: "All", slug: "all", color: null, subcategories: [] },
  {
    id: "demo-cat-business",
    name: "Business & Money",
    slug: "business-money",
    color: "#FFB347",
    subcategories: [
      { id: "demo-sub-1", name: "Entrepreneurship", slug: "entrepreneurship" },
      { id: "demo-sub-2", name: "Investing", slug: "investing" },
      { id: "demo-sub-3", name: "Marketing & Sales", slug: "marketing-sales" },
      { id: "demo-sub-4", name: "Personal Finance", slug: "personal-finance" },
    ],
  },
  {
    id: "demo-cat-software",
    name: "Software Development",
    slug: "software-development",
    color: "#7EC8E3",
    subcategories: [
      { id: "demo-sub-5", name: "Web Development", slug: "web-development" },
      { id: "demo-sub-6", name: "Mobile Development", slug: "mobile-development" },
      { id: "demo-sub-7", name: "Game Development", slug: "game-development" },
      { id: "demo-sub-8", name: "DevOps", slug: "devops" },
    ],
  },
  {
    id: "demo-cat-design",
    name: "Design",
    slug: "design",
    color: "#B5B9FF",
    subcategories: [
      { id: "demo-sub-9", name: "UI/UX", slug: "ui-ux" },
      { id: "demo-sub-10", name: "Graphic Design", slug: "graphic-design" },
      { id: "demo-sub-11", name: "3D Modeling", slug: "3d-modeling" },
      { id: "demo-sub-12", name: "Typography", slug: "typography" },
    ],
  },
  {
    id: "demo-cat-writing",
    name: "Writing & Publishing",
    slug: "writing-publishing",
    color: "#D8B5FF",
    subcategories: [
      { id: "demo-sub-13", name: "Fiction", slug: "fiction" },
      { id: "demo-sub-14", name: "Copywriting", slug: "copywriting" },
      { id: "demo-sub-15", name: "Blogging", slug: "blogging" },
    ],
  },
  {
    id: "demo-cat-music",
    name: "Music",
    slug: "music",
    color: "#FFD700",
    subcategories: [
      { id: "demo-sub-16", name: "Music Production", slug: "music-production" },
      { id: "demo-sub-17", name: "Songwriting", slug: "songwriting" },
      { id: "demo-sub-18", name: "Music Theory", slug: "music-theory" },
    ],
  },
  {
    id: "demo-cat-photography",
    name: "Photography",
    slug: "photography",
    color: "#FF6B6B",
    subcategories: [
      { id: "demo-sub-19", name: "Portrait", slug: "portrait" },
      { id: "demo-sub-20", name: "Landscape", slug: "landscape" },
      { id: "demo-sub-21", name: "Street Photography", slug: "street-photography" },
    ],
  },
  {
    id: "demo-cat-education",
    name: "Education",
    slug: "education",
    color: "#FFE066",
    subcategories: [
      { id: "demo-sub-22", name: "Online Courses", slug: "online-courses" },
      { id: "demo-sub-23", name: "Language Learning", slug: "language-learning" },
    ],
  },
  {
    id: "demo-cat-fitness",
    name: "Fitness & Health",
    slug: "fitness-health",
    color: "#FF9AA2",
    subcategories: [
      { id: "demo-sub-24", name: "Workout Plans", slug: "workout-plans" },
      { id: "demo-sub-25", name: "Nutrition", slug: "nutrition" },
    ],
  },
] as unknown as CategoriesGetManyOutput;

export interface DemoProduct {
  id: string;
  name: string;
  imageUrl: string;
  tenantSlug: string;
  tenantImageUrl: string;
  reviewRating: number;
  reviewCount: number;
  price: number;
}

const image = (seed: string) => `https://picsum.photos/seed/${seed}/600/600`;
const avatar = (n: number) => `https://i.pravatar.cc/80?img=${n}`;

export const DEMO_PRODUCTS: DemoProduct[] = [
  { id: "demo-1", name: "The Complete UI/UX Design Masterclass", imageUrl: image("uiux-design"), tenantSlug: "pixelcraft", tenantImageUrl: avatar(12), reviewRating: 4.8, reviewCount: 214, price: 49 },
  { id: "demo-2", name: "Full-Stack Web Development Bootcamp 2026", imageUrl: image("web-dev"), tenantSlug: "codelab", tenantImageUrl: avatar(33), reviewRating: 4.9, reviewCount: 512, price: 89 },
  { id: "demo-3", name: "Cinematic Lightroom Presets — Pro Pack", imageUrl: image("presets"), tenantSlug: "lumen-studio", tenantImageUrl: avatar(5), reviewRating: 4.7, reviewCount: 98, price: 19 },
  { id: "demo-4", name: "Indie Game Dev with Unity — Zero to Hero", imageUrl: image("gamedev"), tenantSlug: "playforge", tenantImageUrl: avatar(45), reviewRating: 4.6, reviewCount: 176, price: 59 },
  { id: "demo-5", name: "Productivity OS — Notion Template Bundle", imageUrl: image("notion"), tenantSlug: "deepwork", tenantImageUrl: avatar(8), reviewRating: 4.9, reviewCount: 340, price: 29 },
  { id: "demo-6", name: "Lo-Fi Music Production: Beats from Scratch", imageUrl: image("lofi-beats"), tenantSlug: "soundhive", tenantImageUrl: avatar(15), reviewRating: 4.5, reviewCount: 67, price: 39 },
  { id: "demo-7", name: "Copywriting that Converts — The Playbook", imageUrl: image("copywriting"), tenantSlug: "wordsmith", tenantImageUrl: avatar(22), reviewRating: 4.8, reviewCount: 129, price: 25 },
  { id: "demo-8", name: "Personal Finance & Investing Fundamentals", imageUrl: image("finance"), tenantSlug: "wealthwise", tenantImageUrl: avatar(60), reviewRating: 4.7, reviewCount: 203, price: 45 },
  { id: "demo-9", name: "Portrait Photography: Natural Light Mastery", imageUrl: image("portrait"), tenantSlug: "lumen-studio", tenantImageUrl: avatar(5), reviewRating: 4.9, reviewCount: 88, price: 35 },
  { id: "demo-10", name: "3D Modeling in Blender — Complete Guide", imageUrl: image("blender-3d"), tenantSlug: "polycount", tenantImageUrl: avatar(51), reviewRating: 4.6, reviewCount: 142, price: 55 },
  { id: "demo-11", name: "The Modern Startup Marketing Toolkit", imageUrl: image("marketing"), tenantSlug: "growthlab", tenantImageUrl: avatar(28), reviewRating: 4.4, reviewCount: 54, price: 32 },
  { id: "demo-12", name: "30-Day Home Workout & Nutrition Plan", imageUrl: image("fitness"), tenantSlug: "fitforge", tenantImageUrl: avatar(36), reviewRating: 4.8, reviewCount: 311, price: 21 },
];
