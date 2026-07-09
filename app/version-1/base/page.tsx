import { permanentRedirect } from "next/navigation";
import { baseMicrositeUrl } from "../_data/ctas";

export default function BasePage() {
  permanentRedirect(baseMicrositeUrl);
}
