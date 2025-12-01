import { Target, Eye, Award, Users, Globe, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering quality that exceeds expectations',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to understand and achieve their unique goals',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and creative solutions',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Committed to continuous improvement and helping businesses scale',
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Devyora</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Devyora Pvt Ltd is a multi-domain outsourcing and digital services company offering
              Healthcare BPO, Creative Branding, and IT Solutions to businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
                <Users className="text-amber-600" size={20} />
                <span className="text-amber-600 font-semibold">Our Founder</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Founded by Ms. Degala Meenakshi
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Devyora was founded with a vision to create a global outsourcing partner that combines
                domain expertise, operational excellence, and technological innovation.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Under Ms. Meenakshi's leadership, Devyora has grown to serve clients across the U.S., U.K.,
                and India, delivering measurable value through Healthcare BPO, Creative Branding, and IT Solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-12 shadow-2xl">
              <div className="text-center">
                <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                  <Users className="text-amber-600" size={64} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ms. Degala Meenakshi</h3>
                <p className="text-amber-700 font-semibold mb-4">Founder & CEO</p>
                <p className="text-gray-700">
                  Visionary entrepreneur committed to delivering excellence through innovation and operational efficiency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                <Eye className="text-blue-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become a trusted global partner in outsourcing, branding, and technology transformation,
                empowering businesses to achieve operational excellence and sustainable growth.
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-200 rounded-xl flex items-center justify-center mb-6">
                <Target className="text-amber-600" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Deliver reliable, innovative, and technology-driven services that elevate businesses across
                the world. We combine accuracy, creativity, and modern technology to help organizations scale with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-amber-50 p-8 rounded-2xl border border-amber-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="text-amber-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Devyora?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all">
              <h3 className="text-2xl font-bold mb-4">Multi-Domain Expertise</h3>
              <p className="text-gray-300">
                Comprehensive solutions across Healthcare BPO, Creative Branding, and IT Development under one roof.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all">
              <h3 className="text-2xl font-bold mb-4">Global Reach</h3>
              <p className="text-gray-300">
                Serving clients across the U.S., U.K., and India with 24/7 support and multilingual capabilities.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition-all">
              <h3 className="text-2xl font-bold mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Track record of delivering 30-50% cost savings while maintaining the highest quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At Devyora, we are committed to maintaining the highest standards of data security, compliance,
              and operational excellence. Every project is approached with the same dedication to quality,
              transparency, and client success.
            </p>
            <p className="text-gray-600">
              <strong>HIPAA-aware processes</strong> • <strong>ISO 27001 roadmap</strong> • <strong>SOC-2 readiness</strong> • <strong>GDPR principles</strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
