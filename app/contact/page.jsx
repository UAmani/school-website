import PageBanner from "@/components/Common/PageBanner/PageBanner";
import ContactInfo from "@/components/Contact/ContactInfo/ContactInfo";

import contactPage from "@/data/contactPage";
import ContactForm from "@/components/Contact/ContactForm/ContactForm";
import GoogleMap from "@/components/Contact/GoogleMap/GoogleMap";
import FAQ from "@/components/Contact/FAQ/FAQ";
import CTA from "@/components/Common/CTA/CTA";


export const metadata = {
  title: "Contact Us",
  description:
    "Contact our school for admissions, enquiries, and support.",
};

export default function ContactPage() {
  const { banner,cta } = contactPage;

  return (
    <>

      <PageBanner
        title={banner.title}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "ContactUs" },
        ]}
      />

      <ContactInfo />
      <ContactForm />
      <GoogleMap />
      <FAQ />

      <CTA
        title={cta.title}
        description={cta.description}
        primaryButton={cta.primaryButton}
        secondaryButton={cta.secondaryButton}
      />
    </>
  );
}