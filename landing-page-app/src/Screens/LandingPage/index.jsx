import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import Process from "../../Components/Process";
import Carousel from "../../Components/Carousel";
import imageList from "../../utils/carouselImages.js";

function LandingPage() {
  return (
    <div className="landing-page-screen">
      <div className="landing-page-container">
          <Header />
          <div className="landing-page-content">
              <Hero />           
              <Process />
              <Carousel images={imageList} />    
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;