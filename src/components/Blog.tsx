
import React from 'react';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Blog = () => {
  const blogPosts = [
    {
      title: "Tips for Choosing the Right Photographer",
      excerpt: "Discover essential tips to find the perfect wedding photographer who will capture your special day beautifully.",
      image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Admin",
      date: "Dec 15, 2023",
      comments: 2,
      category: "Photography Tips"
    },
    {
      title: "Latest Wedding Photography Trends 2024",
      excerpt: "Stay updated with the most popular wedding photography styles and trends that are making waves this year.",
      image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Admin",
      date: "Dec 12, 2023",
      comments: 5,
      category: "Trends"
    },
    {
      title: "Pre-Wedding Shoot Ideas That Wow",
      excerpt: "Creative and romantic pre-wedding photoshoot ideas that will make your engagement pictures unforgettable.",
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      author: "Admin",
      date: "Dec 10, 2023",
      comments: 8,
      category: "Pre-Wedding"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Latest Blogs & Wedding Tips
          </h2>
          <div className="w-24 h-1 bg-peach mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay inspired with our latest wedding photography tips, trends, and beautiful love stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white rounded-2xl overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-peach text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3 group-hover:text-peach transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-peach hover:text-gold hover:bg-soft-pink/30 p-0 h-auto font-medium group/btn"
                  >
                    Read More 
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href = "https://id-preview--46bfdc0d-6ddb-42d4-a085-d6b3485d724a.lovable.app/vlog" target="_blank">
            <Button 
              size="lg"
              className="bg-peach hover:bg-gold text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View All Posts
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
