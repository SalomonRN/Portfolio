import { z, defineCollection,type  CollectionEntry } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(), // Nombre del Proyecto
    description: z.string(), // Descripcion general del proyecto
    technologies: z.array(z.object({name: z.string(), usage: z.string(), img: z.string()})), // Lista de tecnologias usadas
    challanges: z.string(),
    img: z.string(), // Imagen representativa del proyecto
    gallery: z.array(z.object({file: z.string(), widht: z.string(), height: z.string()})), //Media para la galeria
    video: z.string().optional(), // Video representativo del proyecto
    github: z.string(), // Url al repositorio en github
    url: z.string().optional(), // Link directo para visualizar el proyecto si es Web
    url_back: z.string().optional() // Link directo del backend del proyecto
  }),
});


export const collections = {projects: projectsCollection};

export type Project = CollectionEntry<"projects">;

