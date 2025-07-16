
import React from 'react';
import { Award, Users, Camera, Heart } from 'lucide-react';

const AboutUs = () => {
  const stats = [
    {
      icon: <Award className="h-8 w-8" />,
      number: "15+",
      label: "Years Experience",
      description: "Professional Management"
    },
    {
      icon: <Users className="h-8 w-8" />,
      number: "1000+",
      label: "Happy Couples",
      description: "Satisfied Clients"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      number: "500+",
      label: "Events Captured",
      description: "Beautiful Memories"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      number: "100%",
      label: "Satisfaction Rate",
      description: "Quality Guaranteed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="animate-slide-in-left">
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              We Provide Best Events Management, 
              <span className="text-peach"> Functions & Wedding Shoots</span>
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              With over 15+ years of experience, Starindia Production is dedicated to making your moments magical. From intimate ceremonies to grand celebrations, our team captures every emotion in style.
            </p>
            
            <p className="text-gray-600 leading-relaxed mb-8">
              We believe that every wedding tells a unique story, and our mission is to preserve those precious moments that you'll treasure forever. Our passionate team of photographers and videographers work tirelessly to ensure that no detail is missed, no smile goes uncaptured, and no tear of joy is forgotten.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-gradient-to-br from-soft-pink to-cream rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-peach mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="font-playfair text-3xl font-bold text-gray-800 mb-1">
                    {stat.number}
                  </div>
                  <div className="font-semibold text-gray-700 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Wedding photography"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Bride portrait"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Wedding couple"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Wedding ceremony"
                    className="w-full h-56 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-peach rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
