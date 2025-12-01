import { Palette, Target, TrendingUp, Video, FileText, Share2, BarChart, ArrowRight } from 'lucide-react';

interface BrandingProps {
  onNavigate: (path: string) => void;
}

export default function Branding({ onNavigate }: BrandingProps) {
  const services = [
    {
      icon: Palette,
      title: 'Brand Identity Design',
      description: 'Logos, color palettes, typography, and visual systems that tell your story',
    },
    {
      icon: Share2,
      title: 'Social Media Management',
      description: 'Content creation, scheduling, and community engagement across platforms',
    },
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'Strategic ad campaigns on Google, Meta, LinkedIn, and more',
    },
    {
      icon: FileText,
      title: 'Corporate Collateral',
      description: 'Business cards, brochures, letterheads, and marketing materials',
    },
    {
      icon: FileText,
      title: 'Presentations & Pitch Decks',
      description: 'Compelling slide decks that win clients and investors',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video content for social media, ads, and campaigns',
    },
    {
      icon: FileText,
      title: 'Content Creation',
      description: 'Blogs, articles, case studies, and marketing copy',
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to measure and optimize performance',
    },
  ];

  const approachSteps = [
    {
      number: '01',
      title: 'Research',
      description: 'Deep dive into your market, competitors, and audience',
    },
    {
      number: '02',
      title: 'Design',
      description: 'Create compelling visuals that resonate with your brand',
    },
    {
      number: '03',
      title: 'Content',
      description: 'Craft messages that engage and convert',
    },
    {
      number: '04',
      title: 'Execution',
      description: 'Launch campaigns across chosen channels',
    },
    {
      number: '05',
      title: 'Analytics',
      description: 'Monitor, measure, and optimize continuously',
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="relative py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
              <Palette className="text-purple-600" size={20} />
              <span className="text-purple-600 font-semibold">Creative Studio</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Creative Ideas.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Strategic Growth.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Transform your brand with creative design, strategic marketing, and data-driven campaigns
              that capture attention and drive results.
            </p>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Request a Digital Marketing Strategy</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl border border-purple-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-purple-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure your brand stands out and achieves measurable results.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {approachSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 to-pink-600 mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
                {index < approachSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Devyora Creative Studio?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine creativity with data-driven strategy to deliver campaigns that not only look
                great but also drive real business results.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-channel Expertise</h4>
                    <p className="text-gray-600 text-sm">From social media to paid ads, we cover all bases</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Data-Driven Decisions</h4>
                    <p className="text-gray-600 text-sm">Every campaign is backed by analytics and insights</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fast Turnaround</h4>
                    <p className="text-gray-600 text-sm">Quick iterations without compromising quality</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Transparent Reporting</h4>
                    <p className="text-gray-600 text-sm">Regular updates on campaign performance and ROI</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl font-bold text-purple-600 mb-2">500+</div>
                <div className="text-gray-700 font-semibold">Brands Served</div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl font-bold text-pink-600 mb-2">3x</div>
                <div className="text-gray-700 font-semibold">Average ROI</div>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
                <div className="text-gray-700 font-semibold">Client Satisfaction</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-100 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all">
                <div className="text-4xl font-bold text-yellow-600 mb-2">24/7</div>
                <div className="text-gray-700 font-semibold">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's create something amazing together. Request a custom strategy tailored to your business goals.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Request a Digital Marketing Strategy</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
