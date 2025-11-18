// app/properties/[id]/page.tsx
import { notFound } from "next/navigation";
import PropertyDetails from "@/components/PropertyDetails";
import propertyListings from "@/data/properties";

// Update the interface to match Next.js 14 types
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return propertyListings.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: PageProps) {
  // Properly await the params
  const resolvedParams = await params;
  const property = propertyListings.find((p) => p.id === resolvedParams.id);

  if (!property) {
    notFound();
  }

  return <PropertyDetails property={property} />;
}
