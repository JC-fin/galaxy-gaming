import React, { useState, useEffect } from "react";
import { BlogPost } from "@/api/entities";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import NewsletterSignup from "../components/marketing/NewsletterSignup";
import SubscribeCTA from "../components/marketing/SubscribeCTA";

export default function BlogPostPage() {
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, []);

  const loadPost = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("slug");
    
    if (!slug) {
      setLoading(false);
      return;
    }

    const posts = await BlogPost.filter({ slug, is_published: true });
    if (posts.length > 0) {
      const currentPost = posts[0];
      setPost(currentPost);
      
      // Load related posts from same category
      const related = await BlogPost.filter({ 
        category: currentPost.category,
        is_published: true 
      }, "-publish_date", 4);
      setRelatedPosts(related.filter(p => p.id !== currentPost.id).slice(0, 3));
    }
    
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F7F7F8] py-20">
        <div className="max-w-4xl mx-auto px-6 animate-pulse">
          <div className="h-12 bg-gray-200 rounded mb-8"></div>
          <div className="h-96 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#F7F7F8] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to={createPageUrl("Blog")}>
            <Button className="bg-[#2D6DF6] hover:bg-[#2558CC]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F8]">
      {/* SEO Meta Tags */}
      <title>{post.meta_title}</title>
      <meta name="description" content={post.meta_description} />
      {post.keywords && <meta name="keywords" content={post.keywords.join(", ")} />}
      
      {/* Article Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "description": post.meta_description,
          "image": post.featured_image,
          "datePublished": post.publish_date,
          "author": {
            "@type": "Person",
            "name": post.author
          }
        })}
      </script>

      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-6">
          <Link to={createPageUrl("Blog")}>
            <Button variant="ghost" className="hover:bg-gray-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                {post.category && (
                  <Badge className="bg-[#2D6DF6] text-white">
                    {post.category}
                  </Badge>
                )}
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(post.publish_date), "MMMM d, yyyy")}
                </div>
              </div>
              
              <h1 className="display-heading text-4xl lg:text-5xl text-gray-900 mb-4">
                {post.title}
              </h1>
              
              {post.author && (
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="w-4 h-4" />
                  <span>By {post.author}</span>
                </div>
              )}
            </div>

            {/* Featured Image */}
            {post.featured_image && (
              <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={post.featured_image}
                  alt={post.featured_image_alt || post.title}
                  className="w-full h-auto"
                />
              </div>
            )}

            {/* Post Body */}
            <div className="prose prose-lg max-w-none mb-12">
              <ReactMarkdown>{post.body}</ReactMarkdown>
            </div>

            {/* In-Content Subscribe CTA */}
            <SubscribeCTA />

            {/* Keywords */}
            {post.keywords && post.keywords.length > 0 && (
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-500 mb-3">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {post.keywords.map((keyword, index) => (
                    <Badge key={index} variant="outline" className="border-gray-300">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Subscribe Box */}
            <Card className="border-2 border-[#2D6DF6] shadow-lg">
              <CardHeader className="bg-gradient-to-br from-[#2D6DF6] to-[#1E4FB8] text-white rounded-t-lg">
                <CardTitle className="text-xl">Start Your Collection</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-6">
                  Get curated MTG booster packs, promos, and accessories delivered monthly.
                </p>
                <Link to={createPageUrl("Subscribe")}>
                  <Button className="w-full bg-[#2D6DF6] hover:bg-[#2558CC] py-6 text-lg">
                    View Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedPosts.map(relatedPost => (
                    <Link 
                      key={relatedPost.id}
                      to={`${createPageUrl("BlogPost")}?slug=${relatedPost.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-4">
                        {relatedPost.featured_image && (
                          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                            <img 
                              src={relatedPost.featured_image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 group-hover:text-[#2D6DF6] transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {format(new Date(relatedPost.publish_date), "MMM d, yyyy")}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
          </aside>
        </div>
      </div>

      {/* Newsletter Signup */}
      <NewsletterSignup />
    </div>
  );
}