
import HeroSection from "../components/Hero/HeroSection";
import ServiceSection from "../components/Service/ServiceSection";
import CustomSection from "../components/Customize/CustomSection";
import RecentSection from "../components/Recent/RecentSection";
import BestSellerSection from "../components/Trending/BestSellerSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <BestSellerSection />
      <CustomSection />
      <RecentSection />
    </>
  );
};

export default HomePage;
