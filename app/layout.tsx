import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apollo Technologies US | B2B AI Agents for SaaS & Service Firms',
  description: 'Deploy intelligent AI agents in 4–6 weeks. GDPR-ready, human-in-the-loop, no-nonsense AI.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <iframe
          src="https://app.vectorshift.ai/chatbots/deployed/67dcdcc59e912624fc8f0430"
          className="fixed bottom-6 right-6 w-80 h-[384px] rounded-xl shadow-2xl border border-gray-800 z-50 hidden md:block"
          title="Apollo AI Copilot"
        />
      </body>
    </html>
  );
}