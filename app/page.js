import "./globals.css";
import HomePageCards from './HomePage/HomePageCards';
import HomeVideo from "./HomePage/HomeVideo";
import AboutUs from "./HomePage/AboutUs";

export default function Home() {
  return (
    <div>
      <HomeVideo/>
      <HomePageCards/>
      <AboutUs/>
    </div>
  );
}
