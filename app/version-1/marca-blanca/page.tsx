import type { Metadata } from "next";
import { BusinessLinePage } from "../_components/BusinessLinePage";

export const metadata: Metadata = {
  title: "Marca Blanca | REVOLUTION PHARMA",
  description:
    "Propuesta visual para desarrollo de marcas privadas y servicio llave en mano de Revolution Pharma.",
};

export default function MarcaBlancaPage() {
  return <BusinessLinePage lineId="marca-blanca" />;
}
