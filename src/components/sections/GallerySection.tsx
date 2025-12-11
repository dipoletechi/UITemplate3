import { Play, Image as ImageIcon } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1474511320723-9a56873571b7?w=600&q=80",
    title: "Gir National Park",
    type: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=600&q=80",
    title: "Asiatic Lion",
    type: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&q=80",
    title: "Forest Landscape",
    type: "video",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    title: "Wildlife Safari",
    type: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    title: "Plantation Drive",
    type: "image",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    title: "Nature Trail",
    type: "image",
  },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">
            <ImageIcon className="inline-block h-6 w-6 mr-2 text-secondary" />
            Media Gallery
          </h2>
          <p className="mt-6 text-muted-foreground">
            Explore the beauty of Gujarat's forests and wildlife
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((item, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  index === 0 ? "h-64 md:h-full" : "h-48"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-primary-foreground font-medium">{item.title}</p>
                </div>
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 bg-secondary rounded-full">
                      <Play className="h-6 w-6 text-secondary-foreground" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="#" className="btn-govt">
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
