
import React, { useState } from 'react';
import { MapPin, Clock, Mail, Phone, Facebook, Instagram, Linkedin, Youtube, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      info: "14th Street, Caltech, New Jersey, Alabama"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Working Hours",
      info: "Mon–Fri, 8 AM–5 PM"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      info: "email@example.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Number",
      info: "+1 (012) 345-6780"
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, name: "Facebook", href: "#" },
    { icon: <Instagram className="h-5 w-5" />, name: "Instagram", href: "#" },
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", href: "#" },
    { icon: <Youtube className="h-5 w-5" />, name: "YouTube", href: "#" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-peach mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ready to capture your special moments? Contact us today to discuss your wedding photography needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                Starindia Production
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-0 bg-white shadow-lg rounded-2xl hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="text-peach mb-4 flex justify-center">
                        {item.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.info}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-peach hover:bg-gold text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 bg-white shadow-xl rounded-2xl">
            <CardContent className="p-8">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-6">
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-peach focus:ring-peach rounded-lg h-12"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-gray-200 focus:border-peach focus:ring-peach rounded-lg h-12"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:border-peach focus:ring-peach rounded-lg h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-gray-200 focus:border-peach focus:ring-peach rounded-lg min-h-[120px] resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-peach hover:bg-gold text-white py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
