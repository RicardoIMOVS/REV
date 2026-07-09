import type { Metadata } from "next";
import { BusinessLinePage } from "../_components/BusinessLinePage";

export const metadata: Metadata = {
  title: "Ingredientes | REVOLUTION PHARMA",
  description:
    "Propuesta visual para ingredientes e insumos especializados de Revolution Pharma.",
};

export default function IngredientesPage() {
  return <BusinessLinePage lineId="ingredientes" />;
}
