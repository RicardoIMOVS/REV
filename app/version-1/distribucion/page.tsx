import type { Metadata } from "next";
import { BusinessLinePage } from "../_components/BusinessLinePage";

export const metadata: Metadata = {
  title: "Distribución | REVOLUTION PHARMA",
  description:
    "Propuesta visual para distribuidores de suplementos alimenticios Revolution Pharma.",
};

export default function DistribucionPage() {
  return <BusinessLinePage lineId="distribucion" />;
}
