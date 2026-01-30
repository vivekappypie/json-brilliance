import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        <section id="about">
          <About />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="location">
          <Location />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
