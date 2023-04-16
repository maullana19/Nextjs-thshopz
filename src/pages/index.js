import Layouts from "@/components/layouts/Layout";
import HomeSection1 from "@/components/main/home/section1";
import Section2Home from "@/components/main/home/section2";
import Section3Home from "@/components/main/home/section3";

// Page - HOME
export default function Home() {
  return (
    <Layouts>
      <HomeSection1 />
      <Section2Home />
      <Section3Home />
    </Layouts>
  );
}
