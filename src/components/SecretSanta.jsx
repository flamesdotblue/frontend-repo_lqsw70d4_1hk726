import { Bot, Gift, MessageCircle, Sparkles, Slack } from 'lucide-react';

export default function SecretSanta() {
  return (
    <section id="secret-santa" className="relative py-20">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-50 to-white" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Make Secret Santa effortless (and magical)</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Assign giftees automatically, capture their quirks, and get AI-powered suggestions — all inside Slack.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl border border-purple-100 p-6 shadow-sm">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Gift, title: 'Auto assignments', desc: 'Fair, anonymous matching with exclusions and budget rules.' },
                { icon: Sparkles, title: '5 qualities prompt', desc: 'Share five traits about your giftee to personalize ideas.' },
                { icon: Bot, title: 'AI gift suggestions', desc: 'Tasteful, budget-aware picks from vetted brand partners.' },
                { icon: MessageCircle, title: 'Notes & reactions', desc: 'Send sweet messages, reveal, and acknowledge with style.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 rounded-2xl border border-purple-100">
                  <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Slack className="h-5 w-5 text-sky-600" />
                Works with Slack, Teams, and Email
              </div>
              <a href="#try" className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm shadow hover:opacity-95">Try Secret Santa Demo</a>
            </div>
          </div>

          <div className="bg-gradient-to-b from-white to-purple-50 rounded-3xl border border-purple-100 p-6">
            <p className="text-sm font-medium text-purple-700">Prototype Preview</p>
            <div className="mt-4 space-y-3">
              <div className="p-4 rounded-2xl bg-white border border-purple-100">
                <p className="text-xs text-gray-500">Your giftee</p>
                <p className="font-semibold text-gray-900">Alex from Marketing</p>
                <p className="text-xs text-gray-500 mt-1">Budget: $30</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-purple-100">
                <p className="text-xs text-gray-500">Their 5 qualities</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Tea lover</li>
                  <li>Peloton fan</li>
                  <li>Loves pottery</li>
                  <li>Reads sci‑fi</li>
                  <li>Dog parent</li>
                </ul>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-purple-100">
                <p className="text-xs text-gray-500">AI suggests</p>
                <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                  <li>Artisan tea sampler set</li>
                  <li>Handmade ceramic mug</li>
                  <li>Neon dog bandana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
