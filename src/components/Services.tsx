import { GraduationCap, Briefcase, TrendingUp, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Student Counselling',
      description: 'Help students choose the right educational path and career direction based on their interests and abilities.',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Briefcase,
      title: 'Professional Development',
      description: 'Career transition guidance for working professionals looking to advance or pivot in their careers.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: TrendingUp,
      title: 'Career Coaching',
      description: 'One-on-one coaching sessions to develop leadership skills, interview preparation, and career strategies.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-blue-600 to-teal-600',
    },
    {
      icon: Users,
      title: 'Corporate Training',
      description: 'Customized training programs for organizations to enhance employee skills and career development.',
      image: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-teal-600 to-blue-600',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold inline-block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tailored Solutions for
            <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Every Career Stage
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From students to professionals, we provide expert guidance at every step
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
