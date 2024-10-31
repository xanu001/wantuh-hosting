import FUIBentoGridDark from "@/components/custom/bento"
import FUIDarkHeroSection from "@/components/custom/hero";
import FUIHeadingBlog from "@/components/custom/heading"
import MouseLight from "@/components/custom/mouse"

export default function Home() {
  return (
    <div>
      <MouseLight/>
    <FUIDarkHeroSection/>
    <FUIHeadingBlog/>
    <FUIBentoGridDark/>
    </div>
  );
}
