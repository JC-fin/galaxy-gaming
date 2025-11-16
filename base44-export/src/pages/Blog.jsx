import React, { useState, useEffect } from "react";
import { BlogPost } from "@/api/entities";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, Search, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import NewsletterSignup from "../components/marketing/NewsletterSignup";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    const allPosts = await BlogPost.filter({ is_published: true }, "-publish_date");
    setPosts(allPosts);
    setLoading(false);
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", "Guides", "News", "Reviews", "Tips & Tricks", "Product Updates"];

  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      {/* SEO Meta Tags */}
      <title>MTG Subscription Box Blog - Guides, Tips & Magic the Gathering News</title>
      <meta name="description" content="Expert guides, tips, and news for Magic the Gathering collectors. Learn how to maximize your MTG subscription box value and build winning decks." />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2D6DF6] to-[#1E4FB8] text-white py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="display-heading text-4xl lg:text-5xl mb-4">
              MTG Collector's Blog
            </h1>
            <p className="text-xl text-white/90">
              Expert guides, deck strategies, and the latest Magic the Gathering news
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 py-6 text-lg rounded-xl"
              />
            </div>
            <div className="flex gap-3 flex-wrap">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl ${
                    selectedCategory === cat 
                      ? 'bg-[#2D6DF6] text-white' 
                      : 'border-gray-300 hover:border-[#2D6DF6]'
                  }`}
                >
                  {cat === "all" ? "All Posts" : cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Card key={i} className="animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <CardHeader>
                    <div className="h-6 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No posts found. Try adjusting your search or filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <Link 
                  key={post.id} 
                  to={`${createPageUrl("BlogPost")}?slug=${post.slug}`}
                  className="group"
                >
                  <Card className="card-hover border-0 shadow-md h-full overflow-hidden">
                    {post.featured_image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.featured_image}
                          alt={post.featured_image_alt || post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-3">
                        {post.category && (
                          <Badge variant="secondary" className="bg-[#2D6DF6]/10 text-[#2D6DF6]">
                            {post.category}
                          </Badge>
                        )}
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          {format(new Date(post.publish_date), "MMM d, yyyy")}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-[#2D6DF6] transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    {post.excerpt && (
                      <CardContent>
                        <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center gap-2 mt-4 text-[#2D6DF6] font-semibold">
                          Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    )}
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
}