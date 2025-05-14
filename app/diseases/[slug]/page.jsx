import DiseaseClient from "./DiseaseClient";
import diseases from "@/lib/data/diseases";

// ✅ Sayfa bileşeni: dışa aktarılacak React Component
export default function Page({ params }) {
  return <DiseaseClient slug={params.slug} />;
}

// ✅ Static site için slug’lar
export async function generateStaticParams() {
  return diseases.map((d) => ({ slug: d.id }));
}
