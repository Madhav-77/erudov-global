import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '1000+',
      label: 'Students Guided',
      color: 'from-brand-navy to-brand-navy-800',
    },
    {
      icon: Award,
      value: '95%',
      label: 'Success Rate',
      color: 'from-brand-gold to-brand-gold-dark',
    },
    {
      icon: Briefcase,
      value: '500+',
      label: 'Partnered Universities & Colleges',
      color: 'from-brand-navy to-brand-gold',
    },
    {
      icon: TrendingUp,
      value: '10+',
      label: 'Years Experience',
      color: 'from-brand-gold to-brand-navy',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-200"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-cream mb-4 group-hover:shadow-lg transition-shadow">
                <stat.icon className="w-8 h-8 text-brand-navy" />
              </div>
              <div className={`text-4xl font-extrabold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-brand-gray font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
