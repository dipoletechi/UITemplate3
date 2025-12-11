import { FileText, Users, Building2, Phone, Scale, Download, AlertCircle, Calendar } from "lucide-react";

const links = [
  { icon: FileText, label: "RTI", href: "#rti", color: "bg-secondary" },
  { icon: AlertCircle, label: "Grievance", href: "#grievance", color: "bg-accent" },
  { icon: Users, label: "Staff Directory", href: "#staff", color: "bg-primary" },
  { icon: Building2, label: "Offices", href: "#offices", color: "bg-secondary" },
  { icon: Scale, label: "Acts & Rules", href: "#acts", color: "bg-accent" },
  { icon: Download, label: "Downloads", href: "#downloads", color: "bg-primary" },
  { icon: Calendar, label: "Events", href: "#events", color: "bg-secondary" },
  { icon: Phone, label: "Helpline", href: "#helpline", color: "bg-accent" },
];

const QuickLinks = () => {
  return (
    <section className="py-8 bg-muted/50">
      <div className="container">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="group flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-background hover:shadow-md transition-all"
            >
              <div className={`p-3 rounded-full ${link.color} text-primary-foreground group-hover:scale-110 transition-transform`}>
                <link.icon className="h-5 w-5" />
              </div>
              <span className="text-xs md:text-sm font-medium text-center text-foreground">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
