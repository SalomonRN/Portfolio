---
title: Short Url
description: Proyecto de un acortador de URLs, que permite a los usuarios crear enlaces cortos y fáciles de compartir. El proyecto incluye una interfaz web para crear tus links recortados, así como una API para integraciones con otras aplicaciones. El sistema está diseñado para ser rápido, escalable y seguro, utilizando tecnologías y practicas modernas para garantizar un rendimiento óptimo.
technologies:
  [
    {
      name: "Python",
      usage: "Lenguaje de programacion principal",
      img: "/svgs/tech/Python.svg",
    },
    {
      name: "FastAPI",
      usage: "Framework API REST",
      img: "/svgs/tech/FastAPI.svg",
    },
    {
      name: "SqlAlchemy",
      usage: "ORM para SQL",
      img: "/svgs/libraries/SqlAlchemy.svg",
    },
    {
      name: "PostgresSQL",
      usage: "Base de datos SQL",
      img: "/svgs/tech/PostgresSQL.svg",
    },
    {
      name: "Redis",
      usage: "Almacenamiento caché",
      img: "/svgs/tech/Redis.svg",
    },
  ]
img: "/imgs/projects/short_url/hero.png"
github: https://github.com/SalomonRN/Short-Url-Generator
challanges: "Este proyecto lo desarrollé con la idea de implementar un sistema con Redis, por lo que estuve investigando casos de uso de este, y durante este proceso me topé con una publicación de cómo construir un sistema acortador de URLs, por lo que decidí llevar a cabo el proyecto. Por lo que uso Redis para almacenar mapeos de URLs para que, si la URL se encuentra en caché, los usuarios tengan una respuesta más rápida y puedan navegar a su destino. Durante el desarrollo me topé desafíos como: cómo desplegar Redis de manera local con WSL, autenticación con Redis, mantener un código lo más asíncrono posible para aprovechar el potencial de FastAPI, implementar un logging de peticiones, warnings y errores, los cuales se guardan en un archivo, implementar un ORM asíncrono e implementar una herramienta de migración de bases de datos."
url: https://shurl-steel.vercel.app/
url_back: https://short-url-generator-zmts.onrender.com/
gallery:
  [
    { "file": "/imgs/projects/short_url/hero.png", widht: "700", height: "550" },
    { "file": "/imgs/projects/short_url/img1.png", widht: "1000", height: "550" },
    { "file": "/imgs/projects/short_url/img2.png", widht: "1000", height: "500" },
    { "file": "/imgs/projects/short_url/img3.png", widht: "700", height: "500" },
  ]
---
