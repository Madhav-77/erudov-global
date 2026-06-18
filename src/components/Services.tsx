import { GraduationCap, FileCheck, School, BookOpen, BadgeDollarSign, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Career Counselling',
      description: 'Personalised guidance to help students identify the right career path aligned with their strengths, interests, and global opportunities.',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-brand-navy to-brand-navy-800',
    },
    {
      icon: FileCheck,
      title: 'Visa Assistance',
      description: 'End-to-end support for student visa applications — documentation, interview prep, and embassy guidance for every country.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-brand-gold to-brand-gold-dark',
    },
    {
      icon: School,
      title: 'University Selection',
      description: 'Expert shortlisting of universities that match your academic profile, budget, and career goals across 10 global destinations.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-brand-navy to-brand-gold',
    },
    {
      icon: BookOpen,
      title: 'Course Selection',
      description: 'In-depth advice on choosing the right programme, specialisation, and intake to maximise your career prospects abroad.',
      image: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-brand-gold to-brand-navy',
    },
    {
      icon: BadgeDollarSign,
      title: 'Education Loan Support',
      description: 'Guidance on securing education loans, scholarships, and financial aid options so funding never stands between your dream.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-brand-navy to-brand-gold-dark',
    },
    {
      icon: MapPin,
      title: 'Pre-Departure Orientation',
      description: 'Comprehensive briefings on accommodation, banking, culture, and campus life so you arrive confident and fully prepared.',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-brand-gold-dark to-brand-navy',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-cream to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="px-4 py-2 bg-brand-gold/15 text-brand-gold-dark rounded-full text-sm font-semibold inline-block mb-4 tracking-wide">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-navy mb-4">
            Tailored Solutions for
            <span className="block mt-2 bg-gradient-to-r from-brand-navy to-brand-gold bg-clip-text text-transparent">
              Every Career Stage
            </span>
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            From students to professionals, we provide expert guidance at every step
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/50 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-brand-light leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
