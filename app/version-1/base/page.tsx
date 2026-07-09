import type { Metadata } from "next";
import { BusinessLinePage } from "../_components/BusinessLinePage";

export const metadata: Metadata = {
  title: "BASE | REVOLUTION PHARMA",
  description:
    "Propuesta visual de BASE, marca propia de Revolution Pharma orientada a nutrición esencial.",
};

export default function BasePage() {
  return <BusinessLinePage lineId="base" />;
}
