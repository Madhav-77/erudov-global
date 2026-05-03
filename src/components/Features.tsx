import { Target, Users, BookOpen, BarChart3, Lightbulb, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Target,
      title: 'Personalized Assessment',
      description: 'Comprehensive evaluation of your skills, interests, and personality to find the perfect career match.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Expert Counselors',
      description: 'Work with experienced professionals who understand the evolving job market and industry trends.',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: BookOpen,
      title: 'Educational Guidance',
      description: 'Get insights on courses, colleges, and certifications that align with your career goals.',
      color: 'from-blue-600 to-teal-500',
    },
    {
      icon: BarChart3,
      title: 'Career Roadmap',
      description: 'Receive a detailed action plan with milestones to achieve your professional objectives.',
      color: 'from-teal-600 to-blue-500',
    },
    {
      icon: Lightbulb,
      title: 'Skill Development',
      description: 'Identify skill gaps and get recommendations for courses and training programs.',
      color: 'from-blue-500 to-teal-600',
    },
    {
      icon: Shield,
      title: 'Ongoing Support',
      description: 'Continuous mentorship and support throughout your career journey and transitions.',
      color: 'from-teal-500 to-blue-600',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold inline-block mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Shape Your Future
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive career counselling services designed to help you make informed decisions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
