import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Shared schemas
const actionSchema = z.object({
  text: z.string(),
  href: z.string(),
  variant: z.enum(["primary", "secondary", "link"]).nullish(),
  icon: z.string().nullish(),
  ariaLabel: z.string().nullish(),
});

const itemSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().nullish(),
  iconClass: z.string().nullish(),
});

const serviceSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

// Content block schemas
const heroBlock = z.object({
  _type: z.literal("hero"),
  title: z.string().nullish(),
  tagline: z.string().nullish(),
  description: z.string().nullish(),
  actions: z.array(actionSchema).default([]),
});

const featuresBlock = z.object({
  _type: z.literal("features"),
  title: z.string().nullish(),
  subtitle: z.string().nullish(),
  tagline: z.string().nullish(),
  features: z.array(itemSchema).default([]),
});

const content2Block = z.object({
  _type: z.literal("content2"),
  title: z.string().nullish(),
  subtitle: z.string().nullish(),
  tagline: z.string().nullish(),
  description: z.string().nullish(),
  image: z.string().nullish(),
  imageAlt: z.string().nullish(),
  items: z.array(itemSchema).default([]),
  actions: z.array(actionSchema).default([]),
  isReversed: z.boolean().default(false),
  isAfterContent: z.boolean().default(false),
});

const valuesBlock = z.object({
  _type: z.literal("values"),
  title: z.string().nullish(),
  subtitle: z.string().nullish(),
  tagline: z.string().nullish(),
  items: z.array(itemSchema).default([]),
  columns: z.number().default(3),
});

const servicelistBlock = z.object({
  _type: z.literal("servicelist"),
  title: z.string().nullish(),
  subtitle: z.string().nullish(),
  tagline: z.string().nullish(),
  services: z.array(serviceSchema).default([]),
});

const contentBlock = z.discriminatedUnion("_type", [
  heroBlock,
  featuresBlock,
  content2Block,
  valuesBlock,
  servicelistBlock,
]);

// Page schemas
const pageBuilderSchema = z.object({
  _schema: z.literal("page_builder").optional(),
  title: z.string(),
  description: z.string().nullish(),
  image: z.string().nullish(),
  content_blocks: z.array(contentBlock).default([]),
});

const pageSchema = z.object({
  _schema: z.literal("page").optional(),
  title: z.string(),
  description: z.string().nullish(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.union([pageBuilderSchema, pageSchema]),
});

export const collections = { blog, pages };
