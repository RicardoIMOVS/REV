import { commercialCtas } from "./ctas";

export const businessLines = [
  {
    accent: "bg-[#164f63]",
    detailTitle: "Suplementos listos para vender",
    eyebrow: "Distribución",
    homeHref: "#distribucion",
    id: "distribucion",
    label: "01 / Distribución",
    meta: "Ruta B2B",
    pageHref: "/version-1/distribucion",
    pathTitle: "Vende suplementos listos para comercializar",
    summary:
      "Accede a un portafolio de suplementos alimenticios para distribuidores, mayoristas, farmacias, tiendas especializadas y marketplaces.",
    points: [
      "Cuenta comercial",
      "Catálogo por volumen",
      "Soporte para venta B2B",
    ],
    cta: commercialCtas.distribution,
  },
  {
    accent: "bg-[#1f6f4a]",
    detailTitle: "Desarrollo llave en mano",
    eyebrow: "Marca Blanca",
    homeHref: "#marca-blanca",
    id: "marca-blanca",
    label: "02 / Marca Blanca",
    meta: "Lead comercial",
    pageHref: "/version-1/marca-blanca",
    pathTitle: "Lanza tu propia marca con servicio llave en mano",
    summary:
      "Acompañamiento desde el concepto, formulación y selección de ingredientes hasta fabricación, etiquetado, acondicionamiento y entrega.",
    points: [
      "Desarrollo de concepto",
      "Formulación y selección de ingredientes",
      "Etiquetado, acondicionamiento y logística",
    ],
    cta: commercialCtas.privateLabel,
  },
  {
    accent: "bg-[#b38a1f]",
    detailTitle: "Insumos para fabricantes",
    eyebrow: "Ingredientes",
    homeHref: "#ingredientes",
    id: "ingredientes",
    label: "03 / Ingredientes",
    meta: "Cotización",
    pageHref: "/version-1/ingredientes",
    pathTitle: "Abastece tu desarrollo con insumos de calidad",
    summary:
      "Selección de ingredientes e insumos especializados con soporte comercial, información técnica y cotizaciones para volumen.",
    points: [
      "Vitaminas, minerales y aminoácidos",
      "Ácidos grasos y extractos vegetales",
      "Cotizaciones para volumen",
    ],
    cta: commercialCtas.ingredients,
  },
  {
    accent: "bg-[#d36f2f]",
    detailTitle: "Marca propia y eCommerce visual",
    eyebrow: "BASE",
    homeHref: "#base",
    id: "base",
    label: "04 / BASE",
    meta: "B2C",
    pageHref: "/version-1/base",
    pathTitle: "Explora nuestra visión de nutrición esencial",
    summary:
      "Conoce la filosofía, el portafolio y el contenido educativo de BASE, la marca propia de Revolution Pharma.",
    points: [
      "Portafolio BASE",
      "Filosofía de nutrición consciente",
      "Ruta de compra B2C visual",
    ],
    cta: commercialCtas.base,
  },
];
