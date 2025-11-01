'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [audience, setAudience] = useState<'saas' | 'service' | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const aud = urlParams.get('audience');
    if (aud === 'saas' || aud === 'service') {
      setAudience(aud);
    }
  }, []);

  const handleSelectAudience = (type: 'saas' | 'service') => {
    setAudience(type);
    window.history.pushState({}, '', `?audience=${type}`);
  };

  return (
    <div className="min-h-screen bg-[#0A0F2C] text-white">
      {/* Logo in top-left (always visible) */}
      <div className="container mx-auto px-4 pt-8">
        <img 
          src="/logo.png" 
          alt="Apollo Technologies US" 
          className="h-10 w-auto"
        />
      </div>

      <header className="container mx-auto px-4 py-16 text-center">
        {!audience ? (
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI That Works for Your Business,<br />Not Just Your Chat Window
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              We help B2B SaaS companies and professional service firms embed intelligent AI agents that drive user success, reduce admin work, and accelerate growth. Delivered in 4 to 6 weeks.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button 
                onClick={() => handleSelectAudience('saas')}
                className="px-6 py-3 bg-[#00A8FF] rounded-lg font-semibold hover:bg-blue-400 transition"
              >
                I’m a SaaS company
              </button>
              <button 
                onClick={() => handleSelectAudience('service')}
                className="px-6 py-3 bg-gray-800 rounded-lg font-semibold hover:bg-gray-700 transition"
              >
                I run a service firm
              </button>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {audience === 'saas' 
                ? 'Embed AI Copilots That Boost SaaS Retention' 
                : 'Recover 10+ Hours/Week for Your Service Team'}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {audience === 'saas'
                ? 'Guide users to success, reduce churn, and drive feature adoption—in 4–6 weeks.'
                : 'Automate proposals, reporting, and admin with secure, human-reviewed AI.'}
            </p>
            <a 
              href="https://calendly.com/revanaglobal/30min" 
              className="inline-block px-8 py-4 bg-[#00A8FF] rounded-lg font-bold text-lg hover:bg-blue-400 transition"
            >
              Book a Call →
            </a>
          </motion.div>
        )}
      </header>

      {/* Trust Badges */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: '⚡', label: '7–10 Day Deployment' },
            { icon: '👥', label: 'Human-in-the-Loop by Default' },
            { icon: '🛡️', label: 'GDPR-Ready Data Handling' },
            { icon: '🧩', label: 'No-Code, No-Nonsense AI' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-900 px-6 py-4 rounded-xl flex items-center gap-3"
            >
              <span className="text-2xl">{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">See AI in Action</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10">
          Watch how our AI agent turns a client inquiry into a branded proposal—in seconds.
        </p>
        <div className="bg-gray-900 rounded-2xl p-6 max-w-3xl mx-auto border border-gray-800">
          <img 
            src="/aiauto.png" 
            alt="AI workflow automation demo" 
            className="w-full rounded-lg"
          />
          <p className="mt-4 text-sm text-gray-400">
            Client inquiry → AI pulls CRM data → Generates proposal → Human reviews → Sent
          </p>
        </div>
      </section>

      {/* Footer with logo (optional) */}
      <footer className="border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <img 
            src="/logo.png" 
            alt="Apollo Technologies US" 
            className="h-8 w-auto mx-auto mb-4 opacity-80"
          />
          <p>© 2025 Apollo Technologies US. All rights reserved.</p>
          <p className="mt-2">7511 Main Street, Suite 200, Frisco, TX 75034</p>
          <p className="mt-1">Robinpandey@apollotechnologiesus.com | 469 554 9909</p>
        </div>
      </footer>
    </div>
  );
}