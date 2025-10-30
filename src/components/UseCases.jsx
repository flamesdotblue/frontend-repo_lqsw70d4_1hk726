import { Gift, Users, Calendar, Sparkles } from 'lucide-react';

const cases = [
  {
    icon: Gift,
    title: 'Event Giveaways & Swag',
    desc: 'Automate and personalize your gifting workflows with one click.',
  },
  {
    icon: Users,
    title: 'Team-Level Recognition Gifts',
    desc: 'Celebrate wins and foster belonging across teams and regions.',
  },
  {
    icon: Calendar,
    title: 'Employee Lifecycle Gifting',
    desc: 'Joining, 100 days, birthdays, promotions, farewells — fully automated.',
  },
  {
    icon: Sparkles,
    title: 'Offsite Gifts for Employees',
    desc: 'Delight your offsites with curated kits and seamless logistics.',
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="relative py-20 bg-gradient-to-b from-white to-purple-50/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Built for modern People teams</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            From HR to Events and Marketing — create moments that matter, at scale.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group bg-white rounded-2xl p-6 border border-purple-100 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center shadow-md">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-purple-100">
            <h3 className="font-semibold text-gray-900">Diwali & Year-End Client Gifting</h3>
            <p className="mt-2 text-sm text-gray-600">Culturally thoughtful collections and global compliance out of the box.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-purple-100">
            <h3 className="font-semibold text-gray-900">Swag Management</h3>
            <p className="mt-2 text-sm text-gray-600">Centralize inventory, track budgets, and ship anywhere — instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
