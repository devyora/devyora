import { Code, Smartphone, Cloud, Zap, Layers, Paintbrush, Server, ArrowRight } from 'lucide-react';

interface ITSolutionsProps {
  onNavigate: (path: string) => void;
}

export default function ITSolutions({ onNavigate }: ITSolutionsProps) {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Modern, responsive websites built with the latest technologies',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform apps for iOS and Android',
    },
    {
      icon: Layers,
      title: 'Custom Software',
      description: 'Tailored solutions for your unique business needs',
    },
    {
      icon: Zap,
      title: 'API Integrations',
      description: 'Seamless connections between your systems and services',
    },
    {
      icon: Zap,
      title: 'Automation Solutions',
      description: 'Streamline workflows and boost productivity',
    },
    {
      icon: Paintbrush,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love',
    },
    {
      icon: Cloud,
      title: 'Cloud Hosting',
      description: 'Secure, scalable cloud infrastructure',
    },
    {
      icon: Server,
      title: 'Deployment',
      description: 'Continuous integration and delivery pipelines',
    },
  ];

  const techStack = [
    { name: 'React', color: 'from-cyan-500 to-blue-500' },
    { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
    { name: 'Node.js', color: 'from-green-500 to-green-700' },
    { name: 'Python', color: 'from-blue-500 to-yellow-500' },
    { name: 'WordPress', color: 'from-blue-600 to-blue-800' },
    { name: 'Firebase', color: 'from-yellow-500 to-orange-500' },
    { name: 'AWS', color: 'from-orange-500 to-orange-700' },
    { name: 'MySQL', color: 'from-blue-400 to-blue-600' },
  ];

  return (
    <div className="bg-gray-900 text-white pt-16">
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1MSwgMTkxLCAzNiwgMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full mb-6">
              <Code className="text-amber-400" size={20} />
              <span className="text-amber-400 font-semibold">IT Solutions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Smart Technology.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Seamless Experience.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Build powerful digital solutions with cutting-edge technology. From websites to mobile apps,
              we bring your ideas to life with precision and innovation.
            </p>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-amber-500/50 hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-amber-500/20 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/50 transition-all duration-300">
                  <service.icon className="text-amber-400" size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We use modern, battle-tested technologies to build scalable and maintainable solutions.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`px-6 py-3 bg-gradient-to-r ${tech.color} rounded-full font-semibold text-white hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our IT Solutions?
              </h2>
              <p className="text-lg text-gray-400 mb-8">
                We combine technical expertise with business understanding to deliver solutions that not
                only work flawlessly but also drive real value for your organization.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Scalable Architecture</h4>
                    <p className="text-gray-400 text-sm">Built to grow with your business</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Security First</h4>
                    <p className="text-gray-400 text-sm">Industry-standard security practices</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Agile Development</h4>
                    <p className="text-gray-400 text-sm">Fast iterations with continuous feedback</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Ongoing Support</h4>
                    <p className="text-gray-400 text-sm">24/7 monitoring and maintenance</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-900/50 to-blue-800/50 p-8 rounded-2xl border border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-2 transition-all">
                <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                <div className="text-gray-300 font-semibold">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-green-900/50 to-green-800/50 p-8 rounded-2xl border border-green-500/30 hover:shadow-xl hover:shadow-green-500/20 hover:-translate-y-2 transition-all">
                <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 font-semibold">Uptime SLA</div>
              </div>
              <div className="bg-gradient-to-br from-amber-900/50 to-amber-800/50 p-8 rounded-2xl border border-amber-500/30 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all">
                <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
                <div className="text-gray-300 font-semibold">Happy Clients</div>
              </div>
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/50 p-8 rounded-2xl border border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300 font-semibold">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Let's turn your vision into reality with cutting-edge technology and expert development.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
