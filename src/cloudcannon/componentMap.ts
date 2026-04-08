import Hero from "@/components/widgets/Hero.astro";
import Features from "@/components/widgets/Features.astro";
import Content2 from "@/components/widgets/Content2.astro";
import Values from "@/components/widgets/Values.astro";
import ServiceList from "@/components/widgets/ServiceList.astro";

export const componentMap: Record<string, any> = {
  hero: Hero,
  features: Features,
  content2: Content2,
  values: Values,
  servicelist: ServiceList,
};
