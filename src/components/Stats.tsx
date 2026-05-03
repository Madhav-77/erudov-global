import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '10K+',
      label: 'Students Guided',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      value: '95%',
      label: 'Success Rate',
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: Briefcase,
      value: '500+',
      label: 'Career Paths',
      color: 'from-blue-600 to-teal-600',
    },
    {
      icon: TrendingUp,
      value: '15+',
      label: 'Years Experience',
      color: 'from-teal-600 to-blue-600',
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
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-teal-50 mb-4 group-hover:shadow-lg transition-shadow">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
