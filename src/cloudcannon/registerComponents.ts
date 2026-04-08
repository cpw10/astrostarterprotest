import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import Hero from "@/components/widgets/Hero.astro";
import Features from "@/components/widgets/Features.astro";
import Content2 from "@/components/widgets/Content2.astro";
import Values from "@/components/widgets/Values.astro";
import ServiceList from "@/components/widgets/ServiceList.astro";

registerAstroComponent("hero", Hero);
registerAstroComponent("features", Features);
registerAstroComponent("content2", Content2);
registerAstroComponent("values", Values);
registerAstroComponent("servicelist", ServiceList);
