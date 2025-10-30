import { Bot, Slack, Link2, BarChart3, Shield, Zap } from 'lucide-react';

export default function BottomSections() {
  return (
    <section id="platform" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-gradient-to-b from-white to-blue-50/50 rounded-3xl border border-blue-100 p-8">
            <h3 className="text-2xl font-semibold text-gray-900">Technical Foundation</h3>
            <p className="mt-2 text-gray-600">Secure, scalable, and enterprise-ready integrations.</p>
            <div className="mt-6 space-y-4">
              {[
                { icon: Link2, title: 'HRIS integrations', desc: 'Sync employee directories, milestones, and org data.' },
                { icon: Slack, title: 'Slack engagement', desc: 'Send prompts, collect preferences, and run Secret Santa.' },
                { icon: Bot, title: 'AI recommendations', desc: 'Taste profiles and budgets matched with brand partners.' },
                { icon: BarChart3, title: 'Analytics dashboard', desc: 'Track participation, NPS, and spend by team.' },
                { icon: Shield, title: 'Security & privacy', desc: 'SSO, role-based access, and GDPR-ready data practices.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 rounded-2xl border border-blue-100 bg-white/70">
                  <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-white to-purple-50/50 rounded-3xl border border-purple-100 p-8">
            <h3 className="text-2xl font-semibold text-gray-900">Revenue Model</h3>
            <p className="mt-2 text-gray-600">Sustainable growth aligned with partner value.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-purple-100 bg-white/70">
                <p className="text-sm font-medium text-gray-900">Affiliate commissions</p>
                <p className="text-sm text-gray-600 mt-1">Earn from purchases through curated brand partners.</p>
              </div>
              <div className="p-5 rounded-2xl border border-purple-100 bg-white/70">
                <p className="text-sm font-medium text-gray-900">Tiered subscriptions</p>
                <p className="text-sm text-gray-600 mt-1">HR plans with advanced automation and analytics.</p>
              </div>
              <div className="p-5 rounded-2xl border border-purple-100 bg-white/70">
                <p className="text-sm font-medium text-gray-900">Logistics integrations</p>
                <p className="text-sm text-gray-600 mt-1">Seamless fulfillment via trusted logistics partners.</p>
              </div>
              <div className="p-5 rounded-2xl border border-purple-100 bg-white/70">
                <p className="text-sm font-medium text-gray-900">Add-ons</p>
                <p className="text-sm text-gray-600 mt-1">White-glove curation and global compliance support.</p>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Zap className="h-5 w-5 text-purple-600" />
                Ready for pilot programs this quarter
              </div>
              <a href="#contact" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm shadow hover:opacity-95">Talk to Sales</a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Gifting Concierge • Made with care
        </div>
      </div>
    </section>
  );
}
