import { ArrowRight, Shield, TrendingUp, Clock, Users, Award, CheckCircle, Building2, Heart, Sparkles, Laptop } from 'lucide-react';

interface HomeProps {
  onNavigate: (path: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const services = [
    {
      icon: Heart,
      title: 'Healthcare BPO',
      description: 'HIPAA-aware medical billing, claims processing, RCM support',
      path: '/healthcare-bpo',
    },
    {
      icon: Sparkles,
      title: 'Branding & Digital Marketing',
      description: 'Brand identity, social media, campaigns',
      path: '/branding',
    },
    {
      icon: Laptop,
      title: 'IT Solutions',
      description: 'Websites, apps, automation, cloud',
      path: '/it-solutions',
    },
  ];

  const whyChoose = [
    { icon: Award, title: 'Multi-domain expertise' },
    { icon: Shield, title: 'Secure HIPAA-aware processes' },
    { icon: TrendingUp, title: '30–50% cost savings' },
    { icon: Clock, title: '24/7 support' },
    { icon: Users, title: 'Trained teams' },
    { icon: CheckCircle, title: 'Transparent communication' },
  ];

  const industries = [
    'Healthcare',
    'Pet Insurance',
    'Wellness',
    'Retail',
    'Real Estate',
    'Technology',
    'Professional Services',
    'Startups',
  ];

  return (
    <div className="bg-white">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Global Partner for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Healthcare BPO, Branding
              </span>
              <br />& Technology Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              We help U.S., U.K. & Indian businesses streamline operations, elevate customer experience,
              and accelerate growth through Healthcare BPO, Creative Branding, and Scalable IT Solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('/contact')}
                className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-8 py-4 bg-white text-amber-600 border-2 border-amber-600 rounded-lg font-semibold text-lg hover:bg-amber-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Devyora</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Devyora Pvt Ltd is a Vijayawada-based global outsourcing company delivering Healthcare BPO,
              Branding & Digital Marketing, and IT Services. Our team combines accuracy, creativity, and
              modern technology to help organizations reduce operational costs, improve efficiency, and
              scale with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                onClick={() => onNavigate(service.path)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-amber-600" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex items-center text-amber-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight size={20} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Devyora</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 rounded-xl hover:bg-amber-50 transition-all duration-300 hover:shadow-md"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-amber-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <Building2 className="mx-auto mb-3 text-amber-500" size={32} />
                <p className="font-semibold">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's discuss how we can help you achieve your goals with our comprehensive solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-amber-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Request a Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
