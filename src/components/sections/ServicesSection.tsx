import { TreePine, FileCheck, Shield, Leaf, Building, Users, BookOpen, AlertTriangle } from "lucide-react";

const services = [
  {
    icon: TreePine,
    title: "Forest Conservation",
    description: "Protection and management of forest areas through scientific methods and community participation.",
  },
  {
    icon: Shield,
    title: "Wildlife Protection",
    description: "Safeguarding endangered species and maintaining biodiversity in protected areas.",
  },
  {
    icon: FileCheck,
    title: "Permits & Licenses",
    description: "Issue of timber transit permits, sawmill licenses, and other forest-related permissions.",
  },
  {
    icon: Leaf,
    title: "Afforestation",
    description: "Tree plantation drives and restoration of degraded forest lands across Gujarat.",
  },
  {
    icon: Building,
    title: "Eco-Tourism",
    description: "Promoting sustainable tourism in forest areas while ensuring minimal environmental impact.",
  },
  {
    icon: Users,
    title: "Community Programs",
    description: "Joint forest management and livelihood support for forest-dependent communities.",
  },
  {
    icon: BookOpen,
    title: "Research & Training",
    description: "Scientific research on forest ecology and training programs for forest staff.",
  },
  {
    icon: AlertTriangle,
    title: "Forest Fire Prevention",
    description: "Early warning systems and rapid response mechanisms for forest fire management.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Our Services</h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive forest management services for the conservation and sustainable 
            use of Gujarat's natural resources.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-govt p-6 group hover:border-secondary/50 transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
