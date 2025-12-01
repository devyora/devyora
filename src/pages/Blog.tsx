import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

export default function Blog() {
  const blogPosts = [
    {
      category: 'Healthcare BPO',
      title: 'Top 5 Healthcare BPO Trends to Watch in 2025',
      excerpt: 'Discover the latest trends shaping the healthcare BPO industry and how they can benefit your organization.',
      author: 'Devyora Team',
      date: 'November 28, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Compliance',
      title: 'HIPAA Best Practices for Healthcare Outsourcing',
      excerpt: 'Learn essential HIPAA compliance practices when outsourcing healthcare operations to ensure data security.',
      author: 'Compliance Team',
      date: 'November 25, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Pet Insurance',
      title: 'Automating Pet Insurance Claims: A Complete Guide',
      excerpt: 'Explore how automation is transforming pet insurance claims processing and improving turnaround times.',
      author: 'BPO Specialists',
      date: 'November 22, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Branding',
      title: 'Building a Brand That Resonates: Case Study',
      excerpt: 'Real-world examples of successful brand transformations and the strategies that made them work.',
      author: 'Creative Studio',
      date: 'November 20, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Technology',
      title: 'CTO Tech Picks: Must-Have Tools for 2025',
      excerpt: 'Our technology leaders share their favorite tools and frameworks for modern software development.',
      author: 'Tech Team',
      date: 'November 18, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      category: 'Outsourcing',
      title: 'Scaling Remote Teams: Lessons from the Field',
      excerpt: 'Practical insights on building and managing effective remote teams across different time zones.',
      author: 'Operations Team',
      date: 'November 15, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = [
    'All',
    'Healthcare BPO',
    'Pet Insurance',
    'Compliance',
    'Branding',
    'Technology',
    'Outsourcing',
  ];

  return (
    <div className="bg-white pt-16">
      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
              <BookOpen className="text-amber-600" size={20} />
              <span className="text-amber-600 font-semibold">Insights & Resources</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Devyora Blog</h1>
            <p className="text-xl text-gray-600">
              Insights and thought leadership on Healthcare BPO, pet insurance claims, branding strategies,
              and technology trends for outsourcing teams.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-amber-200 text-gray-700 font-medium hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-amber-600 font-semibold">{post.readTime}</span>
                    <button className="flex items-center space-x-2 text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to our newsletter for the latest insights, industry trends, and company updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have a Topic You'd Like Us to Cover?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            We're always looking for new ideas. Get in touch and let us know what you'd like to read about.
          </p>
          <button className="px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Suggest a Topic
          </button>
        </div>
      </section>
    </div>
  );
}
