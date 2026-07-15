import PageBanner from "../../components/Common/PageBanner/PageBanner";
import Curriculum from "../../components/Academics/Curriculum/Curriculum";
import Programs from "../../components/Academics/Programs/Programs";
import TeachingMethod from "../../components/Academics/TeachingMethod/TeachingMethod";
import SmartLearning from "../../components/Academics/SmartLearning/SmartLearning";
import Activities from "../../components/Academics/Activities/Activities";
import Examination from "../../components/Academics/Examination/Examination";
import CTA from "@/components/Home/CTA/CTA";
export default function AcademicsPage() {
  return (
    <>
      <PageBanner
        title="Academics"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Academics" },
        ]}
      />

      <Curriculum />

      <Programs />
        <TeachingMethod />
         <SmartLearning />
         <Activities />
         <Examination />
         <CTA/>
    </>
  );
}