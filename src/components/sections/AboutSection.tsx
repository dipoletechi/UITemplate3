import { Target, Eye, TreePine, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">About GFRF</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The Gujarat Forest Research Foundation (GFRF) is dedicated to the conservation, 
              sustainable management, and scientific research of Gujarat's diverse forest ecosystems. 
              Established under the Government of Gujarat, we work tirelessly to protect our 
              natural heritage while promoting community participation in forest management.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our efforts span across wildlife conservation, afforestation programs, forest fire 
              prevention, and community engagement initiatives that benefit both the environment 
              and local communities.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="card-govt p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-1">18,971</div>
                <div className="text-sm text-muted-foreground">Sq. Km Forest Area</div>
              </div>
              <div className="card-govt p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-1">4</div>
                <div className="text-sm text-muted-foreground">National Parks</div>
              </div>
              <div className="card-govt p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">23</div>
                <div className="text-sm text-muted-foreground">Wildlife Sanctuaries</div>
              </div>
              <div className="card-govt p-6 text-center">
                <div className="text-3xl font-bold text-secondary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Species Protected</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-govt p-6 flex gap-4">
              <div className="p-3 bg-secondary/10 rounded-lg h-fit">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-sm">
                  To be a leading institution in forest conservation and sustainable management, 
                  ensuring a green and healthy environment for future generations.
                </p>
              </div>
            </div>

            <div className="card-govt p-6 flex gap-4">
              <div className="p-3 bg-accent/10 rounded-lg h-fit">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  To protect and enhance forest resources through scientific research, 
                  community engagement, and effective policy implementation.
                </p>
              </div>
            </div>

            <div className="card-govt p-6 flex gap-4">
              <div className="p-3 bg-primary/10 rounded-lg h-fit">
                <TreePine className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground mb-2">Core Values</h3>
                <p className="text-muted-foreground text-sm">
                  Integrity, transparency, scientific excellence, and commitment to 
                  environmental stewardship guide all our initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
