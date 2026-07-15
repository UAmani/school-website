import PageBanner from "../../components/Common/PageBanner/PageBanner";
import AdmissionProcess from "../../components/Admissions/AdmissionProcess/AdmissionProcess";
import Eligibility from "../../components/Admissions/Eligibility/Eligibility";
import Documents from "../../components/Admissions/Documents/Documents";
import FeeStructure from "../../components/Admissions/FeeStructure/FeeStructure";
import FAQ from "../../components/Admissions/FAQ/FAQ";
import AdmissionForm from "../../components/Admissions/AdmissionForm/AdmissionForm";
import CTA from "@/components/Common/CTA/CTA";

export default function AdmissionsPage() {
  return (
    <>
      <PageBanner
        title="Admissions"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Admissions" },
        ]}
      />

      <AdmissionProcess />
      <Eligibility />
      <Documents />
      <FeeStructure />
      <FAQ />
      <AdmissionForm />
      <CTA
  title="Ready to Begin Your Child's Journey?"
  description="Contact our admissions team today and give your child the best learning experience."
  primaryButton={{
    text: "Apply Now",
    link: "/admissions",
  }}
  secondaryButton={{
    text: "Contact Us",
    link: "/contact",
  }}
/>
    </>
  );
}