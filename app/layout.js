import NavBar from "./HomePage/NavBar";
import Footer from "./Footer";
import './globals.css'

export const metadata = {
  title: "Troll's Mint Essentials - Unlock the Magic of Andarduft",
  description: "Discover the invigorating power of Andarduft, a legendary Icelandic plant, in our sustainable and luxurious mint teas, essential oils, body care, and edibles. Elevate your well-being with a touch of Nordic magic. Shop now for the best candy online, buy candy, and enjoy our candy sale! Visit our factory and see the manufacturing process. Read reviews and learn about the ingredients in our Andarduft candy.",
};

export default function RootLayout({ children }) {

  return (
    <html>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <NavBar />
        <div>
          {children}
        </div>
      <Footer/>
      </body>
    </html>
  );
}