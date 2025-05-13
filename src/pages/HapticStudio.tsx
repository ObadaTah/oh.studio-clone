import "./HapticStudio.css";
import HeroSection from "../components/HapticStudioComponents/HeroSection";
import VideosSection from "../components/HapticStudioComponents/VideosSection";
import CompaniesSection from "../components/HapticStudioComponents/CompaniesSection";
import Careers from "../components/HapticStudioComponents/Careers";
import Footer from "../components/HapticStudioComponents/Footer";
import WhyHaptic from "../components/HapticStudioComponents/WhyHaptic";

const HapticStudio = () => {
    return (
        <>
            <HeroSection />
            <WhyHaptic />
            <VideosSection />
            <CompaniesSection />
            <Careers />
            <Footer />
        </>
    );
};
export default HapticStudio;
