"use client";

import { useState } from "react";
import { Mail, RefreshCw } from "lucide-react";
import Loading from "components/ui/loading";

interface EmailSummary {
  summary: string;
  categories: {
    important: string[];
    actionRequired: string[];
    followUp: string[];
  };
  totalEmails: number;
}
const EmailSummaries: EmailSummary[] = [{
  summary: "Your AI assistant has analyzed your emails and categorized them into Important, Action Required, and Follow-Up for better management.",
  categories: {
    important: [
      "Base Network Alert: Your account balance is below 50 USDT.",
      "Mailgent.fun Project Update: New feature development completed by the team.",
    ],
    actionRequired: [
      "Transaction Reminder: Confirm the 200 USDT to ETH trade.",
      "DAO Voting: Participate in the proposal for the new $LUNA token?",
    ],
    followUp: [
      "Token Recommendation from 0x4F9Fd6Be4a90f2620860d680c0d4d5Fb53d1A825: Consider investing 0.1 ETH.",
      "Mailgent Research Report: Analysis and suggestions for the XYZ project.",
    ],
  },
  totalEmails: 15,
}, {
  summary: "Your AI assistant has organized your recent emails into categories to streamline your workflow and prioritize key actions.",
  categories: {
    important: [
      "Security Alert: Unusual login detected in your wallet at 12:45 PM UTC.",
      "Base Airdrop Update: Claim your 25 $BASE tokens before December 15.",
    ],
    actionRequired: [
      "Trade Confirmation Needed: Approve the sale of 0.5 ETH for 500 USDT.",
      "Follow-Up DAO Proposal: Vote on increasing staking rewards for $LUNA holders.",
    ],
    followUp: [
      "Upcoming Webinar: Insights on Mailgent's use of AI in crypto investments.",
      "Suggestion from 0x9834...: Research project ABC before investing.",
    ],
  },
  totalEmails: 20,
}, {
  summary: "Analyzed your inbox for the past week and identified key emails requiring attention or follow-up actions.",
  categories: {
    important: [
      "Token Sale Alert: Public sale for $MAILGENT begins tomorrow at 9:00 AM UTC.",
      "Market Insights: Ethereum price surges 10% after key announcement.",
    ],
    actionRequired: [
      "Stake Reminder: Redelegate 100 $LUNA to avoid slashing penalties.",
      "Proposal #45: Join the vote to fund a new blockchain research initiative.",
    ],
    followUp: [
      "Token Analysis: Project DEF showing potential for 2x returns based on market data.",
      "Collaborator Introduction: A DAO member suggests connecting with 0x12345 for partnership.",
    ],
  },
  totalEmails: 18,
}, {
  summary: "Your AI assistant summarized your inbox to help you stay organized and focus on high-priority tasks.",
  categories: {
    important: [
      "Ledger Wallet Alert: Backup your recovery phrase to prevent data loss.",
      "Mailgent Update: New automation features launched for DAO voting.",
    ],
    actionRequired: [
      "Trade Instruction: Purchase 300 USDT worth of $LUNA at the current market rate.",
      "Pending Verification: Complete KYC to access your token rewards.",
    ],
    followUp: [
      "Community Recommendation: Explore project XYZ for potential staking benefits.",
      "Event Invitation: Attend the Base Ecosystem AMA on December 10th.",
    ],
  },
  totalEmails: 22,
}, {
  summary: "This week’s emails have been categorized to help you efficiently tackle your most critical crypto tasks.",
  categories: {
    important: [
      "Base Network Status: Scheduled maintenance from 2:00 AM to 5:00 AM UTC.",
      "Wallet Security Notice: Your connected wallet is due for a security update.",
    ],
    actionRequired: [
      "Liquidity Pool Alert: Rebalance your ETH/USDT pair to maintain optimal rewards.",
      "Urgent: Confirm your participation in the upcoming governance meeting.",
    ],
    followUp: [
      "News Digest: Top DeFi trends for December 2024.",
      "Proposal Feedback: Provide insights on increasing yield for $MAILGENT stakers.",
    ],
  },
  totalEmails: 25,
}, {
  summary: "Your assistant has processed the latest emails and grouped them for quick and effective decision-making.",
  categories: {
    important: [
      "Mailgent Beta Access: Your beta key is now active, start exploring advanced features.",
      "Critical Reminder: Backup your wallet before migrating to a new blockchain node.",
    ],
    actionRequired: [
      "Smart Contract Interaction: Approve the deployment of your LazyBetFactory contract.",
      "Pending Review: DAO members are awaiting your analysis of Project KLM.",
    ],
    followUp: [
      "Collaboration Opportunity: Project DEF seeking partnerships with Mailgent users.",
      "Insight Request: What’s the market outlook for $MAILGENT over the next quarter?",
    ],
  },
  totalEmails: 19,
}];

export default function EmailSummaryPage() {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<EmailSummary | null>(null);

  const generateSummary = async () => {
    setLoading(true);
    try {
      // const response = await fetch("/api/agents", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     agentType: "email-summary",
      //     params: { timeframe: "today" },
      //   }),
      // });
      // const data = await response.json();

      await new Promise((resolve) => setTimeout(resolve, 5000));

      const res = EmailSummaries[Math.floor(Math.random() * EmailSummaries.length)]

      setSummary(res);
    } catch (error) {
      console.error("Failed to generate summary:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Mail className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Mailgent Demo</h1>
        </div>
        <button
          onClick={generateSummary}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? (
            <RefreshCw className="w-4 h-4 animate-spin" />
          ) : (
            "Generate Summary"
          )}
        </button>
      </div>

      {loading && <Loading />}

      {summary && !loading && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Daily Summary</h2>
            <p className="text-gray-700">{summary.summary}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CategoryCard
              title="Important"
              items={summary.categories.important}
              color="text-red-600"
            />
            <CategoryCard
              title="Action Required"
              items={summary.categories.actionRequired}
              color="text-yellow-600"
            />
            <CategoryCard
              title="Follow Up"
              items={summary.categories.followUp}
              color="text-blue-600"
            />
          </div>

          <div className="text-sm text-gray-500 text-center">
            Total emails processed: {summary.totalEmails}
          </div>
        </div>
      )}
    </div>
  );
}

function CategoryCard({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className={`text-lg font-semibold mb-3 ${color}`}>{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700">
            • {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
