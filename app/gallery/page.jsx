import PageBanner from "@/components/Common/PageBanner/PageBanner";
import PhotoGallery from "@/components/Gallery/PhotoGallery/PhotoGallery";
import CTA from "@/components/Common/CTA/CTA";

import galleryPage from "@/data/galleryPage";

export const metadata = {
  title: "Gallery",
  description:
    "Explore our school gallery showcasing academics, sports, cultural events, and campus life.",
};

export default function GalleryPage() {
  const { banner, cta } = galleryPage;

  return (
    <>
   
       <PageBanner
              title={banner.title}
              breadcrumb={[
                { label: "Home", href: "/" },
                { label: "Gallery" },
              ]}
            />

      <PhotoGallery />

      <CTA
        title={cta.title}
        description={cta.description}
        primaryButton={cta.primaryButton}
        secondaryButton={cta.secondaryButton}
      />
    </>
  );
}