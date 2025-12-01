import { Shield, Lock, Eye, CheckCircle, FileCheck, Server, AlertTriangle } from 'lucide-react';

interface ComplianceProps {
  onNavigate: (path: string) => void;
}

export default function Compliance({ onNavigate }: ComplianceProps) {
  const standards = [
    {
      icon: Shield,
      title: 'HIPAA-Aware Processes',
      description: 'Comprehensive protocols for handling Protected Health Information (PHI)',
    },
    {
      icon: Shield,
      title: 'GDPR Principles',
      description: 'Data protection and privacy compliance for European operations',
    },
    {
      icon: FileCheck,
      title: 'ISO 27001 Roadmap',
      description: 'Information security management system implementation in progress',
    },
    {
      icon: FileCheck,
      title: 'SOC-2 Readiness',
      description: 'Service organization controls framework preparation',
    },
    {
      icon: Lock,
      title: 'Encryption Standards',
      description: 'Data encryption in transit and at rest using industry-standard protocols',
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Multi-factor authentication and role-based access management',
    },
  ];

  const securityMeasures = [
    {
      title: 'Data Encryption',
      items: [
        'TLS 1.3 for data in transit',
        'AES-256 encryption for data at rest',
        'Encrypted backup systems',
        'Secure key management',
      ],
    },
    {
      title: 'Access Management',
      items: [
        'Multi-factor authentication (MFA)',
        'Role-based access controls (RBAC)',
        'Least privilege principle',
        'Regular access audits',
      ],
    },
    {
      title: 'Monitoring & Auditing',
      items: [
        'Real-time security monitoring',
        'Comprehensive audit trails',
        'Incident response protocols',
        'Regular security assessments',
      ],
    },
    {
      title: 'Data Handling',
      items: [
        'Secure data intake processes',
        'No PHI via unencrypted email',
        'Data retention policies',
        'Secure disposal procedures',
      ],
    },
  ];

  const certifications = [
    { name: 'HIPAA', status: 'Aware & Compliant', color: 'from-blue-600 to-blue-800' },
    { name: 'GDPR', status: 'Principles Applied', color: 'from-green-600 to-green-800' },
    { name: 'ISO 27001', status: 'In Progress', color: 'from-purple-600 to-purple-800' },
    { name: 'SOC-2', status: 'Roadmap Active', color: 'from-amber-600 to-orange-600' },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
              <Shield className="text-amber-400" size={20} />
              <span className="text-amber-400 font-semibold">Security & Compliance</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Compliance, Security &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Data Protection
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10">
              Devyora is committed to secure, compliant operations focused on protecting PHI and PII for
              enterprise clients through rigorous security standards and best practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Standards & Policies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <standard.icon className="text-amber-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{standard.title}</h3>
                <p className="text-gray-600">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Security Measures</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive security controls protecting your sensitive data at every layer
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMeasures.map((measure, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{measure.title}</h3>
                <ul className="space-y-3">
                  {measure.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Certifications & Readiness</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${cert.color} p-8 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center`}
              >
                <Shield className="mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">{cert.name}</h3>
                <p className="text-white/90">{cert.status}</p>
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
                Forms & Data Handling
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We follow strict protocols for data collection, processing, and storage to ensure the
                highest level of security and compliance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <AlertTriangle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">No PHI via Unencrypted Email</h4>
                    <p className="text-gray-600 text-sm">All sensitive data must be transmitted through secure channels</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Lock className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Secure Intake for Pilot Projects</h4>
                    <p className="text-gray-600 text-sm">Encrypted portals and secure file transfer systems</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <Server className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">Encrypted Storage</h4>
                    <p className="text-gray-600 text-sm">All sensitive data encrypted at rest with AES-256</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <FileCheck className="text-purple-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900">NDA & Data Processing Addendum</h4>
                    <p className="text-gray-600 text-sm">Available for all enterprise clients</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-10 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Audit & Compliance Support</h3>
              <p className="text-gray-600 mb-6">
                We maintain comprehensive documentation and audit trails to support your compliance requirements:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-gray-700">SOC-2 Type II preparation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-gray-700">ISO 27001 implementation roadmap</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-gray-700">PCI-DSS for payment processing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-gray-700">GDPR data processing agreements</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-green-600" size={20} />
                  <span className="text-gray-700">Regular third-party security audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="mx-auto mb-6" size={64} />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have Questions About Our Security?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Contact our compliance team to discuss your specific security requirements and certifications.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-8 py-4 bg-white text-amber-600 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            Contact Compliance Team
          </button>
        </div>
      </section>
    </div>
  );
}
