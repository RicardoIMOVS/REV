import { baseMicrositeUrl } from "./ctas";

export const homeNavItems = [
  { href: "/version-1", id: "inicio", label: "Inicio" },
  { href: "/version-1/distribucion", id: "distribucion", label: "Distribución" },
  { href: "/version-1/marca-blanca", id: "marca-blanca", label: "Marca Blanca" },
  { href: "/version-1/ingredientes", id: "ingredientes", label: "Ingredientes" },
  { href: "/version-1/base", id: "base", label: "BASE" },
  { href: "/version-1/recursos", id: "recursos", label: "Recursos" },
  { href: "/version-1/nosotros", id: "nosotros", label: "Nosotros" },
  { href: "/version-1/contacto", id: "contacto", label: "Contacto" },
  { href: "/version-1/ayuda", id: "ayuda", label: "Ayuda" },
];

export const futurePageRoutes = [
  { href: "/version-1", label: "Inicio" },
  { href: "/version-1/distribucion", label: "Distribución" },
  { href: "/version-1/marca-blanca", label: "Marca Blanca" },
  { href: "/version-1/ingredientes", label: "Ingredientes" },
  { href: "/version-1/base", label: "BASE" },
  { href: "/version-1/recursos", label: "Recursos" },
  { href: "/version-1/nosotros", label: "Nosotros" },
  { href: "/version-1/contacto", label: "Contacto" },
  { href: "/version-1/ayuda", label: "Ayuda" },
];

export const footerColumns = [
  {
    title: "Soluciones",
    links: [
      { href: "/version-1/distribucion", label: "Distribución" },
      { href: "/version-1/marca-blanca", label: "Marca Blanca" },
      { href: "/version-1/ingredientes", label: "Ingredientes" },
      { href: "/version-1/distribucion", label: "Softgel Capsules" },
    ],
  },
  {
    title: "Productos",
    links: [
      { href: "/version-1/base", label: "BASE" },
      { href: baseMicrositeUrl, label: "Catálogo BASE" },
      { href: "/version-1/ingredientes", label: "Ingredientes" },
      { href: "/version-1/distribucion", label: "Softgel Capsules" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "/version-1/recursos", label: "Blog" },
      { href: "/version-1/recursos", label: "Guías" },
      { href: "/version-1/recursos", label: "Casos de éxito" },
      { href: "/version-1/recursos", label: "Preguntas frecuentes" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/version-1/nosotros", label: "Nosotros" },
      { href: "/version-1/nosotros", label: "Calidad" },
      { href: "/version-1/nosotros", label: "Certificaciones" },
      { href: "/version-1/nosotros", label: "Política de calidad" },
    ],
  },
  {
    title: "Atención",
    links: [
      { href: "/version-1/ayuda", label: "Centro de ayuda" },
      { href: "/version-1/contacto", label: "Facturación" },
      { href: "/version-1/contacto", label: "Contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: "/version-1/contacto", label: "WhatsApp" },
      { href: "/version-1/contacto", label: "Teléfono" },
      { href: "/version-1/contacto", label: "Correo" },
      { href: "/version-1/contacto", label: "Dirección" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Aviso de privacidad" },
      { label: "Términos y condiciones" },
      { label: "Política de cookies" },
      { label: "Aviso legal" },
    ],
  },
  {
    title: "Síguenos",
    links: [
      { label: "LinkedIn" },
      { label: "Facebook" },
      { label: "Instagram" },
      { label: "YouTube" },
    ],
  },
];
