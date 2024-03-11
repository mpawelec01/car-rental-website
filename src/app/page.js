import Head from "next/head";
import Image from "next/image";
import AboutSection from "./components/AboutSection";
import FleetSection from "./components/FleetSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <HeroSection />
        <FleetSection />
        <AboutSection />
        <Footer />
      </div>
    </main>
  );
}
