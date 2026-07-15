import PageBanner from "../../components/Common/PageBanner/PageBanner";
import OurStory from "../../components/About/OurStory/OurStory";
import VisionMission from "../../components/About/VisionMission/VisionMission";
import PrincipalMessage from "../../components/About/PrincipalMessage/PrincipalMessage";
import CoreValues from "../../components/About/CoreValues/CoreValues";
import Achievements from "../../components/About/Achievements/Achievements";
import CTA from "../../components/About/CTA/CTA";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      <OurStory />

      <VisionMission />

      <PrincipalMessage />
      <CoreValues />
      <Achievements />
      <CTA />
    </>
  );
}