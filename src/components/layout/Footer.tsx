import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "RTI", href: "#rti" },
    { label: "Tenders", href: "#tenders" },
    { label: "Contact Us", href: "#contact" },
  ];

  const importantLinks = [
    { label: "india.gov.in", href: "https://india.gov.in" },
    { label: "Gujarat Government", href: "https://gujaratindia.gov.in" },
    { label: "Forest Survey of India", href: "https://fsi.nic.in" },
    { label: "MoEFCC", href: "https://moef.gov.in" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Gujarat Forest Research Foundation</h3>
            <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
              Dedicated to the conservation and sustainable management of Gujarat's forest resources 
              through research, education, and community engagement.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Government Links</h3>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-4 w-4 mt-1 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Forest Department, Block No. 14, 5th Floor,
                  New Sachivalaya, Gandhinagar - 382010
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">info@gfrf.gov.in</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
            <p>© 2024 Gujarat Forest Research Foundation. All Rights Reserved.</p>
            <div className="flex items-center gap-4">
              <span>Visitors: <strong className="text-primary-foreground">12,34,567</strong></span>
              <span>Last Updated: <strong className="text-primary-foreground">11 Dec 2024</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Tricolor Bar */}
      <div className="tricolor-bar" />
    </footer>
  );
};

export default Footer;
