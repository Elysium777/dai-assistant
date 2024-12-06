"use client";

import {
  ArrowRight,
  Mail,
  // Calendar,
  // Lock,
  // Shield,
  Zap,
  Brain,
  Blocks,
  Wallet,
  Key,
} from "lucide-react";
import Link from "next/link";
export default function LandingPage() {
  const tokenAddress = process.env.NEXT_PUBLIC_TOKEN_ADDRESS;

  return (
      <main className="w-full min-h-[calc(100vh-4rem)] pt-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Your Crypto AI Email Assistant
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Unlock the power of AI and blockchain to manage your investments, analyze projects, and automate tasks—all through your email.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                  href="/dashboard"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                  href={`https://fun.virtuals.io/agents/${tokenAddress}`}
                  replace={false}
                  className="px-6 py-3 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition"
              >
                Buy Token
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Can Mailgent Do for You?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                  icon={<Mail className="w-8 h-8 text-blue-600" />}
                  title="Personalized Investment Assistance"
                  description="Ask your assistant to buy, sell, or manage your crypto investments with simple email commands."
              />
              <FeatureCard
                  icon={<Brain className="w-8 h-8 text-blue-600" />}
                  title="Project Analysis"
                  description="Let Mailgent research and summarize crypto projects for you, providing insights to support your decisions."
              />
              <FeatureCard
                  icon={<Zap className="w-8 h-8 text-blue-600" />}
                  title="Automated Decision-Making"
                  description="Combine AI and blockchain to execute strategies like token trading or DAO voting automatically."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">How Mailgent Works</h2>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <TechStackItem title="1. Create Your Assistant Email" description="Set up your unique assistant email address to start." />
              <TechStackItem title="2. Fund Your Assistant" description="Deposit funds to enable transactions on the Base network." />
              <TechStackItem title="3. Connect Your Email" description="Link your personal email for seamless integration." />
              <TechStackItem title="4. Command and Automate" description="Send instructions to your assistant and watch it execute with precision." />
            </div>
          </div>
        </section>

        {/* Blockchain Features Section */}
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">AI Meets Blockchain</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                  icon={<Wallet className="w-8 h-8 text-blue-600" />}
                  title="Crypto-Integrated Automation"
                  description="Seamlessly execute trades or manage wallets directly from your email."
              />
              <FeatureCard
                  icon={<Blocks className="w-8 h-8 text-blue-600" />}
                  title="DAO Collaboration"
                  description="Enable agents to collaborate and make group investment decisions autonomously."
              />
              <FeatureCard
                  icon={<Key className="w-8 h-8 text-blue-600" />}
                  title="Transparent Records"
                  description="Leverage blockchain for immutable records of all transactions and decisions."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Experience the Future of Crypto Management?
            </h2>
            <Link
                href="/dashboard"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition gap-2"
            >
              Get Started Now <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
  );
}

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-6 rounded-xl border border-gray-200 hover:shadow-lg transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// const SecurityBadge = ({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-gray-200">
//       <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//       <div className="text-left">
//         <p className="font-medium">{title}</p>
//         <p className="text-sm text-gray-500">{description}</p>
//       </div>
//     </div>
//   );
// };
//
// const BenefitItem = ({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) => {
//   return (
//     <div className="flex gap-4">
//       <div className="mt-1">
//         <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
//           <div className="w-2 h-2 rounded-full bg-blue-600" />
//         </div>
//       </div>
//       <div>
//         <h3 className="font-semibold mb-1">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// };
//
// const MetricCard = ({ label, value }: { label: string; value: string }) => {
//   return (
//     <div className="bg-gray-50 rounded-lg p-4">
//       <p className="text-gray-600 text-sm">{label}</p>
//       <p className="text-2xl font-bold text-gray-900">{value}</p>
//     </div>
//   );
// };

const TechStackItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};
