import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                ✨ Your Future Starts Here
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Find Your Perfect
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Career Path
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Expert guidance to help you discover your strengths, explore career options, and make informed decisions about your professional future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </div>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Career counselling session"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-gradient-to-br from-blue-400 to-teal-400 rounded-2xl opacity-20 blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-gradient-to-br from-teal-400 to-blue-400 rounded-2xl opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
