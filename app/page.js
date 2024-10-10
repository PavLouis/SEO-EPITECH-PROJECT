import "./globals.css";
import HomePageCards from './HomePage/HomePageCards';
import HomeVideo from "./HomePage/HomeVideo";
import Footer from "./Footer";
import AboutUs from "./HomePage/AboutUs";

export default function Home() {
  return (
    <div>
      <HomeVideo/>
      <HomePageCards/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
