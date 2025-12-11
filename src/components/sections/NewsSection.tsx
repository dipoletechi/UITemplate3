import { Calendar, ArrowRight, Newspaper, Bell } from "lucide-react";

const news = [
  {
    date: "10 Dec 2024",
    title: "Forest Guard Recruitment 2024",
    excerpt: "Applications are now open for 200+ vacancies in forest guard positions across Gujarat.",
    type: "recruitment",
  },
  {
    date: "08 Dec 2024",
    title: "Wildlife Census 2024 Completed",
    excerpt: "The annual wildlife census in Gir National Park shows a 5% increase in lion population.",
    type: "news",
  },
  {
    date: "05 Dec 2024",
    title: "New Afforestation Project Launched",
    excerpt: "Government launches mega plantation drive targeting 50 lakh trees across the state.",
    type: "news",
  },
];

const events = [
  {
    date: "15 Jan 2025",
    title: "Van Mahotsav Celebration",
    location: "Gandhinagar",
  },
  {
    date: "26 Jan 2025",
    title: "Republic Day Parade",
    location: "State Capital",
  },
  {
    date: "02 Feb 2025",
    title: "World Wetlands Day",
    location: "Nalsarovar",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-16 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* News */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h2 className="section-title">
                <Newspaper className="inline-block h-6 w-6 mr-2 text-secondary" />
                Latest News
              </h2>
              <a href="#" className="link-govt text-sm flex items-center gap-1">
                View All <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="space-y-4">
              {news.map((item, index) => (
                <article key={index} className="card-govt p-5 flex gap-4 hover:border-secondary/50 transition-colors">
                  <div className="hidden sm:flex flex-col items-center justify-center bg-secondary/10 text-secondary px-4 py-2 rounded-lg min-w-[80px]">
                    <span className="text-2xl font-bold">{item.date.split(" ")[0]}</span>
                    <span className="text-xs">{item.date.split(" ").slice(1).join(" ")}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-secondary font-semibold uppercase tracking-wide">
                      {item.type}
                    </span>
                    <h3 className="font-bold text-foreground mt-1 mb-2 hover:text-secondary cursor-pointer transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Events */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="section-title">
                <Bell className="inline-block h-6 w-6 mr-2 text-accent" />
                Upcoming Events
              </h2>
            </div>

            <div className="card-govt p-4">
              <div className="space-y-4">
                {events.map((event, index) => (
                  <div 
                    key={index} 
                    className={`flex gap-4 ${index !== events.length - 1 ? "pb-4 border-b border-border" : ""}`}
                  >
                    <div className="flex items-center justify-center bg-accent/10 text-accent p-2 rounded-lg h-fit">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-accent font-semibold">{event.date}</span>
                      <h4 className="font-medium text-foreground text-sm">{event.title}</h4>
                      <p className="text-xs text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="#" className="mt-4 block text-center link-govt text-sm py-2">
                View Calendar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
