import { z, defineCollection,type  CollectionEntry } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    title: z.string(), // Nombre del Proyecto
    description: z.string(), // Descripcion general del proyecto
    technologies: z.array(z.string()), // Lista de tecnologias usadas
    img: z.string(), // Imagen representativa del proyecto
    video: z.string().optional(), // Video representativo del proyecto
    github: z.string(), // Url al repositorio en github
    url: z.string().optional() // Link directo para visualizar el proyecto si es Web
  }),
});


export const collections = {projects: projectsCollection};

export type Project = CollectionEntry<"projects">;

