import localFont from "next/font/local";
import "./globals.css";
import HomePageCards from './HomePage/HomePageCards';
import HomeVideo from "./HomePage/HomeVideo";
import Footer from "./Footer";
import { CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL } from "next/dist/shared/lib/constants";
import AboutUs from "./HomePage/AboutUs";

export const metadata = {
  title: "Troll's Mint Essentials - Unlock the Magic of Andarduft",
  description: "Discover the invigorating power of Andarduft, a legendary Icelandic plant, in our sustainable and luxurious mint teas, essential oils, body care, and edibles. Elevate your well-being with a touch of Nordic magic. Shop now for the best candy online, buy candy, and enjoy our candy sale! Visit our factory and see the manufacturing process. Read reviews and learn about the ingredients in our Andarduft candy.",
};

function Home() {
  return (
    <div>
      <HomeVideo/>
      <HomePageCards/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Home/>
        </body>
    </html>
  );
}
