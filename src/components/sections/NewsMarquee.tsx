import { Bell } from "lucide-react";

const newsItems = [
  "Applications open for Forest Guard Recruitment 2024 - Last date: 31st Dec 2024",
  "New notification regarding wildlife conservation zones released",
  "Annual tree plantation drive to be held on 15th January 2025",
  "Online grievance portal now available for citizens",
];

const NewsMarquee = () => {
  return (
    <div className="bg-secondary/10 border-y border-secondary/30 py-3">
      <div className="container flex items-center gap-4">
        <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-1 rounded font-semibold text-sm whitespace-nowrap">
          <Bell className="h-4 w-4" />
          <span>Latest</span>
        </div>
        <div className="marquee-container flex-1">
          <div className="marquee-content">
            {newsItems.map((item, index) => (
              <span key={index} className="mx-8 text-foreground">
                • {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMarquee;
