import AboutUs from "@/features/about-us/AboutUs";
import ContactUs from "@/features/contact-us/ContactUs";
import Footer from "@/features/footer/Footer";
import Gallery from "@/features/gallery/Gallery";
import HeadLine from "@/features/headline/HeadLine";



export default function Home() {
  return (
    <>
    <HeadLine />
    <Gallery/>
    <AboutUs />
    <ContactUs/>
    <Footer/>
    </>
  );
}
