import { Shield, CheckCircle, Clock, TrendingUp, FileText, Users, Heart, PawPrint, ArrowRight } from 'lucide-react';

interface HealthcareBPOProps {
  onNavigate: (path: string) => void;
}

export default function HealthcareBPO({ onNavigate }: HealthcareBPOProps) {
  const services = [
    { icon: FileText, title: 'Medical Billing', description: 'Accurate and timely billing processing' },
    { icon: FileText, title: 'Medical Coding', description: 'ICD-10, CPT, HCPCS coding expertise' },
    { icon: CheckCircle, title: 'Insurance Claims Processing', description: 'End-to-end claims management' },
    { icon: TrendingUp, title: 'Revenue Cycle Management', description: 'Optimize your revenue flow' },
    { icon: Users, title: 'Eligibility & Verification', description: 'Real-time insurance verification' },
    { icon: FileText, title: 'Prior Authorization', description: 'Streamlined authorization processes' },
    { icon: PawPrint, title: 'Pet Insurance Claims', description: 'Specialized vet invoice processing' },
    { icon: FileText, title: 'Healthcare Data Entry', description: 'Accurate data management & admin ops' },
  ];

  const petInsuranceFeatures = [
    'Vet invoice validation',
    'Benefit schedule mapping',
    'Breed exclusion checks',
    'Claim indexing',
    'Eligibility verification',
    'Seasonal peak volume scaling',
    'Bespoke workflows for insurers',
  ];

  const compliance = [
    { icon: Shield, title: 'HIPAA-aware processes' },
    { icon: Shield, title: 'Multi-layered access control' },
    { icon: Shield, title: 'Secure PHI/PII handling' },
    { icon: CheckCircle, title: 'Accuracy-driven QA teams' },
    { icon: FileText, title: 'Audit trails' },
    { icon: Clock, title: 'Daily/weekly reporting' },
  ];

  const industries = [
    'Hospitals',
    'Clinics',
    'TPAs',
    'Pet Insurance Companies',
    'Healthcare Tech Companies',
  ];

  const outcomes = [
    'Faster claim turnarounds',
    'Improved indexing accuracy',
    'Reduced denials',
    'Measurable cost savings',
  ];

  return (
    <div className="bg-white pt-16">
      <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Heart className="text-blue-600" size={20} />
              <span className="text-blue-600 font-semibold">Healthcare BPO Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              HIPAA-Ready Healthcare BPO Services & Pet Insurance Claims Outsourcing
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              End-to-end services for healthcare providers and pet insurance companies combining HIPAA-aware
              medical workflows with specialized pet-claims processing for U.S. & U.K. providers.
            </p>
            <button
              onClick={() => onNavigate('/contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Book a 15-Minute Consultation</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services We Provide</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
                <PawPrint className="text-green-600" size={20} />
                <span className="text-green-600 font-semibold">Pet Insurance Specialization</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Pet Insurance Claims Processing
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide specialized processing services tailored for pet insurance companies,
                handling complex veterinary claims with precision and efficiency.
              </p>
              <ul className="space-y-3">
                {petInsuranceFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-green-600 mb-2">99.5%</div>
                <div className="text-gray-600">Claim Accuracy</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-purple-600 mb-2">48hr</div>
                <div className="text-gray-600">Avg Turnaround</div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="text-4xl font-bold text-amber-600 mb-2">40%</div>
                <div className="text-gray-600">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compliance & Quality</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {compliance.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <item.icon className="text-blue-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-blue-100 to-green-100 text-gray-900 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expected Outcomes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-8"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <CheckCircle className="text-green-600 mx-auto mb-4" size={40} />
                <p className="text-lg font-semibold text-gray-900">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Your Healthcare Operations?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Start with a pilot project and scale with SLA-backed reporting and continuous improvement.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Book a 15-Minute Healthcare BPO Consultation</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
