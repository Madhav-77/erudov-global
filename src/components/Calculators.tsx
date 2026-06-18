import { DollarSign, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { LIVING_COSTS, REGIONS } from '../constants/regions';

const CURRENCY_META: Record<string, { symbol: string }> = {
  USD: { symbol: '$' },
  EUR: { symbol: '€' },
  GBP: { symbol: '£' },
  KRW: { symbol: '₩' },
  SGD: { symbol: 'S$' },
  JPY: { symbol: '¥' },
  INR: { symbol: '₹' },
};

const FALLBACK_RATES: Record<string, number> = {
  USD: 1, EUR: 0.92, GBP: 0.79, KRW: 1305.50, SGD: 1.35, JPY: 149.50, INR: 83.12,
};

export default function Calculators() {
  const [livingCostCountry, setLivingCostCountry] = useState('Korea');
  const [livingCostMonths, setLivingCostMonths] = useState(1);

  const [forexFrom, setForexFrom] = useState('USD');
  const [forexTo, setForexTo] = useState('INR');
  const [forexAmount, setForexAmount] = useState(1000);
  const [rates, setRates] = useState<Record<string, number>>(FALLBACK_RATES);
  const [ratesLoading, setRatesLoading] = useState(true);
  const [ratesError, setRatesError] = useState(false);

  useEffect(() => {
    fetch('https://open.er-api.com/v6/latest/USD')
      .then((res) => res.json())
      .then((data) => {
        if (data?.result === 'success' && data.rates) {
          const picked: Record<string, number> = { USD: 1 };
          for (const key of Object.keys(CURRENCY_META)) {
            if (data.rates[key]) picked[key] = data.rates[key];
          }
          setRates(picked);
        } else {
          setRatesError(true);
        }
      })
      .catch(() => setRatesError(true))
      .finally(() => setRatesLoading(false));
  }, []);

  const regionNames = REGIONS.map(r => r.name);
  const livingCostTotal = (LIVING_COSTS[livingCostCountry] || 0) * livingCostMonths;
  const forexConverted = (forexAmount / (rates[forexFrom] ?? 1)) * (rates[forexTo] ?? 1);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4">
            Planning Tools
          </h2>
          <p className="text-xl text-brand-gray max-w-2xl mx-auto">
            Calculate your living expenses and convert currencies to plan your international education journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-brand-navy/10 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-brand-navy" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Living Cost Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Select Country
                </label>
                <select
                  value={livingCostCountry}
                  onChange={(e) => setLivingCostCountry(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:outline-none font-medium text-gray-900 bg-white"
                >
                  {regionNames.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Duration (months)
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    min="1"
                    max="48"
                    value={livingCostMonths}
                    onChange={(e) => setLivingCostMonths(Number(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                  />
                  <span className="text-2xl font-bold text-brand-navy min-w-12">{livingCostMonths}m</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-cream to-brand-gold/5 rounded-xl p-6 border-2 border-brand-gold/20">
                <p className="text-sm text-gray-600 mb-2">Monthly Cost</p>
                <p className="text-lg text-gray-600 mb-4">
                  ${LIVING_COSTS[livingCostCountry] || 0} / month
                </p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-600">Total for {livingCostMonths} months:</span>
                  <span className="text-4xl font-bold text-brand-navy">${livingCostTotal.toLocaleString()}</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 italic">
                * These are average estimates. Actual costs may vary based on lifestyle and accommodation choices.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark">Forex Calculator</h3>
              </div>
              {ratesLoading ? (
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-500 animate-pulse">Fetching rates…</span>
              ) : ratesError ? (
                <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">Fallback rates</span>
              ) : (
                <span className="text-xs px-2 py-1 rounded-full bg-brand-gold/10 text-brand-gold-dark flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block"></span>
                  <span>Live rates</span>
                </span>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-600 font-semibold">
                    {CURRENCY_META[forexFrom]?.symbol}
                  </span>
                  <input
                    type="number"
                    value={forexAmount}
                    onChange={(e) => setForexAmount(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:outline-none font-medium text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    From
                  </label>
                  <select
                    value={forexFrom}
                    onChange={(e) => setForexFrom(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:outline-none font-medium text-gray-900 bg-white"
                  >
                    {Object.keys(CURRENCY_META).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    To
                  </label>
                  <select
                    value={forexTo}
                    onChange={(e) => setForexTo(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-brand-gold focus:outline-none font-medium text-gray-900 bg-white"
                  >
                    {Object.keys(CURRENCY_META).map((currency) => (
                      <option key={currency} value={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-cream to-brand-gold/5 rounded-xl p-6 border-2 border-brand-gold/20">
                <p className="text-sm text-gray-600 mb-2">Converted Amount</p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm text-gray-600">
                    {CURRENCY_META[forexTo]?.symbol}
                  </span>
                  <span className="text-4xl font-bold text-brand-gold">{forexConverted.toLocaleString('en-US', { maximumFractionDigits: 2 })}</span>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  1 {forexFrom} = {((rates[forexTo] ?? 1) / (rates[forexFrom] ?? 1)).toFixed(4)} {forexTo}
                </p>
              </div>

              <p className="text-xs text-gray-500 italic">
                * Rates are for reference only and may vary with live market rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
