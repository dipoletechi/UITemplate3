import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    title: "Protecting Gujarat's Green Heritage",
    subtitle: "Conserving forests for a sustainable future",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
  },
  {
    title: "Biodiversity Conservation",
    subtitle: "Home to diverse flora and fauna",
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1920&q=80",
  },
  {
    title: "Community Engagement",
    subtitle: "Working together for forest protection",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section id="home" className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 container h-full flex items-center">
        <div className="max-w-2xl text-primary-foreground animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            {slides[currentSlide].subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#services" className="btn-saffron">
              Our Services
            </a>
            <a href="#contact" className="btn-govt bg-primary-foreground/20 backdrop-blur">
              File Grievance
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/30 hover:bg-background/50 text-foreground"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/30 hover:bg-background/50 text-foreground"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-secondary w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
