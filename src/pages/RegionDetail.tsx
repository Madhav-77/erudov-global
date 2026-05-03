import { useState } from 'react';
import { ChevronDown, Users, Briefcase, GraduationCap, Globe, FileText, Phone } from 'lucide-react';
import { REGIONS, REGION_DETAILS, LIVING_COSTS } from '../constants/regions';

interface RegionDetailProps {
  regionCode?: string;
}

export default function RegionDetail({ regionCode = 'KR' }: RegionDetailProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const region = REGIONS.find(r => r.code === regionCode);
  const details = REGION_DETAILS[region?.name || 'Korea'];

  if (!region || !details) {
    return <div className="min-h-screen bg-white pt-20 flex items-center justify-center">Region not found</div>;
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <span className="text-6xl">{region.flag}</span>
            <div>
              <h1 className="text-5xl font-bold text-gray-900">{details.name}</h1>
              <p className="text-xl text-gray-600 mt-2">{details.description}</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Currency</p>
              <p className="text-lg font-bold text-gray-900">{details.currency}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Timezone</p>
              <p className="text-lg font-bold text-gray-900">{details.timezone}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Students</p>
              <p className="text-lg font-bold text-gray-900">{details.populationOfStudents}</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Counselors</p>
              <p className="text-lg font-bold text-blue-600">{details.counselorsAvailable}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="border-b border-gray-200 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'education', 'career', 'practical'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold border-b-2 transition-colors capitalize whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-12">
              {/* Key Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Information</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <span>Location Details</span>
                    </h3>
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm font-semibold text-gray-600">Capital</dt>
                        <dd className="text-lg text-gray-900">{details.capital}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-600">Languages</dt>
                        <dd className="text-lg text-gray-900">{details.languages.join(', ')}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-600">Currency</dt>
                        <dd className="text-lg text-gray-900">{details.currency}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-600">Timezone</dt>
                        <dd className="text-lg text-gray-900">{details.timezone}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center space-x-2">
                      <FileText className="w-5 h-5 text-teal-600" />
                      <span>Visa & Admission</span>
                    </h3>
                    <dl className="space-y-4">
                      <div>
                        <dt className="text-sm font-semibold text-gray-600">Visa Type</dt>
                        <dd className="text-lg text-gray-900">{details.visaType}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-600">Application Deadline</dt>
                        <dd className="text-lg text-gray-900">{details.applicationDeadline}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-600">Living Cost/Month</dt>
                        <dd className="text-lg font-bold text-teal-600">${details.livingCostPerMonth}</dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-gray-600">Counselors Available</dt>
                        <dd className="text-lg text-gray-900">{details.counselorsAvailable} experts</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-2">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                  <span>Top Universities</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {details.universities.map((uni, idx) => (
                    <div
                      key={idx}
                      className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <span className="text-lg font-bold text-white">{idx + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{uni}</h3>
                          <p className="text-sm text-gray-600 mt-2">World-class institution offering diverse programs</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'career' && (
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center space-x-2">
                  <Briefcase className="w-8 h-8 text-teal-600" />
                  <span>Industry Opportunities</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {details.industries.map((industry, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-6 border border-teal-200 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
                          <p className="text-sm text-gray-600 mt-2">Growing sector with excellent career prospects</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'practical' && (
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                    <Users className="w-6 h-6 text-blue-600" />
                    <span>Student Community</span>
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-blue-600">✓</span>
                      </div>
                      <span className="text-gray-700">Active student support groups and networks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-blue-600">✓</span>
                      </div>
                      <span className="text-gray-700">Cultural exchange programs and events</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-blue-600">✓</span>
                      </div>
                      <span className="text-gray-700">Internship and placement assistance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-sm font-bold text-blue-600">✓</span>
                      </div>
                      <span className="text-gray-700">Affordable accommodation options</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                    <Phone className="w-6 h-6 text-teal-600" />
                    <span>Connect with Us</span>
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Have questions about studying in {details.name}? Our expert counselors are here to help.
                  </p>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold mb-4">
                    Schedule Consultation
                  </button>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors font-semibold text-center"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
