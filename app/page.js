import Hero from "../components/Home/Hero/Hero";
import About from "../components/Home/About/About";
import WhyChooseUs from "../components/Home/WhyChooseUs/WhyChooseUs";
import Academics from "../components/Home/Academics/Academics";
import Statistics from "../components/Home/Statistics/Statistics";
import Facilities from "../components/Home/Facilities/Facilities";
import Gallery from "../components/Home/Gallery/Gallery";
import Testimonials from "../components/Home/Testimonials/Testimonials";
import CTA from "../components/Home/CTA/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Statistics />
      <WhyChooseUs />
      <Academics />
      <Facilities />
      <Gallery />
      <Testimonials />
      <CTA />
    </>
  );
}