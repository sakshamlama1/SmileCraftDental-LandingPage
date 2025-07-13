import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Hero from "../../Components/Hero";
import Process from "../../Components/Process";
import Reviews from "../../Components/Reviews";

function LandingPage() {
  return (
    <div className="landing-page-screen">
      <div className="landing-page-container">
          <Header />
          <div className="landing-page-content">
              <Hero />           
              <Process />
              <Reviews />    
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;