
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const WeddingEvents = () => {
  const events = [
    {
      title: "Ring Ceremony",
      description: "Capturing the magical moment of eternal commitment with beautiful ring exchange ceremonies.",
      image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "💍"
    },
    {
      title: "Mehendi & Haldi",
      description: "Vibrant and colorful pre-wedding celebrations filled with tradition, joy, and beautiful moments.",
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🌺"
    },
    {
      title: "Bridal Entry",
      description: "The most awaited moment - capturing the bride's grand entrance with all its emotional beauty.",
      image: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "👰"
    },
    {
      title: "Reception & More",
      description: "Grand celebrations, dance performances, and unforgettable moments with family and friends.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: "🎉"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Wedding Events We Capture
          </h2>
          <div className="w-24 h-1 bg-peach mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations, we capture every precious moment of your special day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 text-3xl bg-white/90 rounded-full w-12 h-12 flex items-center justify-center">
                  {event.icon}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3 group-hover:text-peach transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WeddingEvents;
