import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Penamaluru, Vijayawada – 520007',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9701626933',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'itsdevyora@gmail.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon–Sat: 10 AM – 7 PM',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: 'Fill out the form or email us with your project details',
    },
    {
      number: '02',
      title: 'Schedule a Consultation',
      description: 'We\'ll set up a call to discuss your needs in detail',
    },
    {
      number: '03',
      title: 'Receive Your Proposal',
      description: 'Get a customized solution tailored to your business goals',
    },
  ];

  return (
    <div className="bg-white pt-16">
      <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
              <MessageSquare className="text-amber-600" size={20} />
              <span className="text-amber-600 font-semibold">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600">
              Ready to transform your business? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-amber-600">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all">
                    <option>Select a service</option>
                    <option>Healthcare BPO</option>
                    <option>Pet Insurance Claims</option>
                    <option>Branding & Digital Marketing</option>
                    <option>IT Solutions</option>
                    <option>Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg font-semibold text-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <p className="text-lg text-gray-600 mb-8">
                Reach out to us through any of these channels. We're here to help!
              </p>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-amber-600" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-600">{info.details}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Book a Strategy Call</h3>
                <p className="text-gray-700 mb-6">
                  Schedule a free 15-minute consultation to discuss your project and explore how we can help.
                </p>
                <button className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  Schedule on Calendly
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Call us directly or send an email and we'll respond within hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919701626933"
                className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Call Now
              </a>
              <a
                href="mailto:itsdevyora@gmail.com"
                className="px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
