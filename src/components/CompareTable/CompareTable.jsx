export default function CompareTable() {
  return (
    <section id="compare" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-blue-400 font-semibold mb-4">How we compare</div>
          <h2 className="text-4xl font-bold tracking-tight">ShopSetu vs. everyone else.</h2>
          <p className="text-zinc-400 mt-4 text-lg leading-relaxed">See exactly what you get — and what others charge.</p>
        </div>

        <div className="mt-16 overflow-x-auto">
          <table className="min-w-[900px] w-full text-left border-separate border-spacing-0">
            <thead className="bg-zinc-950/80 text-zinc-300 uppercase text-xs tracking-[0.2em]">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">Basic</th>
                <th className="p-4 font-semibold">Pro</th>
                <th className="p-4 font-semibold">Enterprise</th>
                <th className="p-4 font-semibold">Shopify</th>
                <th className="p-4 font-semibold">Dukaan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-400">
              <tr className="bg-zinc-900/50 text-zinc-300 uppercase text-[11px] tracking-[0.22em]">
                <td className="p-4" colSpan="6">Admin Panel Modules</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Dashboard + Revenue Chart</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Order Management</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Inventory Management</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓ Full + Warehouses</td>
                <td className="p-4 text-center">Higher plan</td>
                <td className="p-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Website Management</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓ + Blog + Themes</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Analytics + Traffic</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓ Full</td>
                <td className="p-4 text-center">Paid addon</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Shipping Management</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓ + Labels</td>
                <td className="p-4 text-center">Paid</td>
                <td className="p-4 text-center">✓</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Customer Management</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓ + Tickets</td>
                <td className="p-4 text-center">Higher plan</td>
                <td className="p-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Promo Management</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓ + Loyalty</td>
                <td className="p-4 text-center">Paid app</td>
                <td className="p-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Auth + Role Management</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">2 roles</td>
                <td className="p-4 text-center">4 roles + logs</td>
                <td className="p-4 text-center">Higher plan</td>
                <td className="p-4 text-center">✗</td>
              </tr>

              <tr className="bg-zinc-900/50 text-zinc-300 uppercase text-[11px] tracking-[0.22em]">
                <td className="p-4" colSpan="6">Storefront & Pricing</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Max products</td>
                <td className="p-4 text-center">50</td>
                <td className="p-4 text-center">1,000</td>
                <td className="p-4 text-center">Unlimited</td>
                <td className="p-4 text-center">Unlimited</td>
                <td className="p-4 text-center">Unlimited</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Custom domain</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">✓ Included</td>
                <td className="p-4 text-center">✓ Included</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">Paid plan</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Reviews & Ratings</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">White-label (no branding)</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✗</td>
                <td className="p-4 text-center">✗</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Monthly fee</td>
                <td className="p-4 text-center text-emerald-400 font-bold">₹0</td>
                <td className="p-4 text-center text-emerald-400 font-bold">₹0</td>
                <td className="p-4 text-center text-emerald-400 font-bold">₹0</td>
                <td className="p-4 text-center text-rose-400">₹1,994/mo</td>
                <td className="p-4 text-center text-rose-400">₹2,999/mo</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Commission on sales</td>
                <td className="p-4 text-center font-bold text-emerald-400">0%</td>
                <td className="p-4 text-center font-bold text-emerald-400">0%</td>
                <td className="p-4 text-center font-bold text-emerald-400">0%</td>
                <td className="p-4 text-center">2%+gateway</td>
                <td className="p-4 text-center">Txn fee</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Setup done by us</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✓</td>
                <td className="p-4 text-center">✗ DIY</td>
                <td className="p-4 text-center">✗ DIY</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-white">Year 1 total cost</td>
                <td className="p-4 text-center text-emerald-400 font-bold">₹4,998</td>
                <td className="p-4 text-center text-emerald-400 font-bold">₹11,998</td>
                <td className="p-4 text-center text-emerald-400 font-bold">₹28,998</td>
                <td className="p-4 text-center text-emerald-400 font-bold">₹23,928+</td>
                <td className="p-4 text-center text-rose-400">₹35,988+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

