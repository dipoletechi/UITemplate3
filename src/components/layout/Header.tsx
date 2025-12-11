import { useState } from "react";
import { Menu, X, Search, Phone, Mail, Globe, Minus, Plus, Type } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontSize, setFontSize] = useState<"small" | "normal" | "large" | "xlarge">("normal");
  const [language, setLanguage] = useState<"en" | "gu" | "hi">("en");

  const changeFontSize = (direction: "increase" | "decrease") => {
    const sizes: ("small" | "normal" | "large" | "xlarge")[] = ["small", "normal", "large", "xlarge"];
    const currentIndex = sizes.indexOf(fontSize);
    
    if (direction === "increase" && currentIndex < sizes.length - 1) {
      const newSize = sizes[currentIndex + 1];
      setFontSize(newSize);
      document.documentElement.className = `font-${newSize}`;
    } else if (direction === "decrease" && currentIndex > 0) {
      const newSize = sizes[currentIndex - 1];
      setFontSize(newSize);
      document.documentElement.className = `font-${newSize}`;
    }
  };

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "News", href: "#news" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top Tricolor Bar */}
      <div className="tricolor-bar" />
      
      {/* Accessibility & Contact Bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex flex-wrap items-center justify-between py-2 text-sm">
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+911234567890" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Phone className="h-3 w-3" />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:info@gfrf.gov.in" className="flex items-center gap-1 hover:text-secondary transition-colors">
              <Mail className="h-3 w-3" />
              <span>info@gfrf.gov.in</span>
            </a>
          </div>
          
          <div className="flex items-center gap-3 ml-auto">
            {/* Font Size Controls */}
            <div className="flex items-center gap-1 border-r border-primary-foreground/30 pr-3">
              <Type className="h-4 w-4" />
              <button 
                onClick={() => changeFontSize("decrease")}
                className="p-1 hover:bg-primary-foreground/20 rounded"
                aria-label="Decrease font size"
              >
                <Minus className="h-3 w-3" />
              </button>
              <button 
                onClick={() => changeFontSize("increase")}
                className="p-1 hover:bg-primary-foreground/20 rounded"
                aria-label="Increase font size"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
            
            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value as "en" | "gu" | "hi")}
                className="bg-transparent border-none text-sm focus:outline-none cursor-pointer"
              >
                <option value="en" className="text-foreground">English</option>
                <option value="gu" className="text-foreground">ગુજરાતી</option>
                <option value="hi" className="text-foreground">हिंदी</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b border-border">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-muted flex items-center justify-center border-2 border-accent overflow-hidden">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg" 
                  alt="Government of India Emblem"
                  className="w-12 h-12 md:w-16 md:h-16 object-contain"
                />
              </div>
              <div>
                <h1 className="text-lg md:text-2xl font-bold text-primary leading-tight">
                  Gujarat Forest Research Foundation
                </h1>
                <p className="text-sm text-muted-foreground">
                  Government of Gujarat
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-foreground font-medium hover:text-secondary hover:bg-muted rounded transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="ghost" size="icon" className="ml-2">
                <Search className="h-5 w-5" />
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden mt-4 py-4 border-t border-border animate-fade-in">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-foreground font-medium hover:text-secondary hover:bg-muted rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
