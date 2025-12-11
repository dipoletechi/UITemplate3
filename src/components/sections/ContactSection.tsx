import { useState } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for contacting us. We will respond shortly.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Contact Us</h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? Get in touch with us through the form below 
            or visit our office.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card-govt p-6">
              <div className="flex gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Forest Department, Block No. 14, 5th Floor,
                    New Sachivalaya, Gandhinagar - 382010, Gujarat
                  </p>
                </div>
              </div>
            </div>

            <div className="card-govt p-6">
              <div className="flex gap-4">
                <div className="p-3 bg-accent/10 rounded-lg h-fit">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-sm text-muted-foreground">+91 123 456 7890</p>
                  <p className="text-sm text-muted-foreground">+91 123 456 7891</p>
                </div>
              </div>
            </div>

            <div className="card-govt p-6">
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 rounded-lg h-fit">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <p className="text-sm text-muted-foreground">info@gfrf.gov.in</p>
                  <p className="text-sm text-muted-foreground">grievance@gfrf.gov.in</p>
                </div>
              </div>
            </div>

            <div className="card-govt p-6">
              <div className="flex gap-4">
                <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                  <Clock className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Office Hours</h3>
                  <p className="text-sm text-muted-foreground">Mon - Sat: 10:00 AM - 6:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-govt p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Email *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Subject *</label>
                    <Input
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Enter subject"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Message *</label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                  />
                </div>

                <Button type="submit" className="btn-saffron w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Submit Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
