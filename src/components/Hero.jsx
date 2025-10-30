import Spline from '@splinetool/react-spline';
import { Rocket, Gift, Slack } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-white/80 backdrop-blur border border-white/40 flex items-center justify-center shadow-sm">
              <Gift className="h-5 w-5 text-purple-600" />
            </div>
            <span className="font-semibold text-gray-900">Gifting Concierge</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#use-cases" className="hover:text-gray-900">Use Cases</a>
            <a href="#secret-santa" className="hover:text-gray-900">Secret Santa</a>
            <a href="#platform" className="hover:text-gray-900">Platform</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#demo"
              className="px-4 py-2 rounded-lg border border-white/60 bg-white/80 backdrop-blur text-gray-800 hover:bg-white transition"
            >
              Book a Demo
            </a>
            <a
              href="#early"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow hover:opacity-95"
            >
              Get Early Access
            </a>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 pt-10 pb-24 md:pt-20 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur border border-white/60 shadow-sm mb-4">
                <Slack className="h-4 w-4 text-sky-600" />
                <span className="text-xs font-medium text-gray-700">Connect with Slack in minutes</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                Reimagine corporate gifting with AI.
              </h1>
              <p className="mt-4 text-lg text-gray-700 max-w-xl">
                Automate, personalize, and celebrate every milestone — from onboarding to farewells. Bring joy and connection to your culture with a human touch at enterprise scale.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#early"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-md hover:opacity-95 inline-flex items-center gap-2"
                >
                  <Rocket className="h-5 w-5" /> Get Early Access
                </a>
                <a
                  href="#demo"
                  className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-white/60 text-gray-900 hover:bg-white inline-flex items-center gap-2"
                >
                  Book a Demo
                </a>
              </div>
              <div className="mt-6 text-sm text-gray-600">
                AI dashboard • Personalization engine • Slack integration
              </div>
            </div>

            <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden border border-white/60 bg-white/20 backdrop-blur">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/60 via-white/0 to-white/40" />
              <div className="absolute inset-0 flex items-end p-6 pointer-events-none">
                <div className="w-full grid grid-cols-3 gap-3">
                  <div className="bg-white/90 border border-white/60 rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-gray-500">Upcoming</p>
                    <p className="mt-1 font-semibold text-gray-900">Birthdays</p>
                    <p className="text-xs text-gray-500 mt-2">15 this month</p>
                  </div>
                  <div className="bg-white/90 border border-white/60 rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-gray-500">Engagement</p>
                    <p className="mt-1 font-semibold text-gray-900">+23%</p>
                    <p className="text-xs text-gray-500 mt-2">After gifting program</p>
                  </div>
                  <div className="bg-white/90 border border-white/60 rounded-2xl p-4 shadow-sm">
                    <p className="text-xs text-gray-500">Budget</p>
                    <p className="mt-1 font-semibold text-gray-900">$12,450</p>
                    <p className="text-xs text-gray-500 mt-2">This quarter</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
