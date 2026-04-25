import Tables from "./Tables";

export default function ComparisonTable() {
  // 🔹 Table 1
  const table1 = {
    subtitle: "WHY CHOOSE US",
    title: "Other Agencies We Deliver Solutions Offer Services",
    competitorName: "Other Agencies",
    features: [
      { label: "Custom UI/UX Design", competitorValue: true, ababilValue: true },
      { label: "Personalized Solution", competitorValue: false, ababilValue: true },
      { label: "Team Collaboration", competitorValue: true, ababilValue: true },
      { label: "Risk-free Trial", competitorValue: false, ababilValue: true },
      { label: "Lifetime Support", competitorValue: false, ababilValue: true },
      { label: "Flexible Pricing", competitorValue: true, ababilValue: true },
    ],
  };

  // 🔹 Table 2 (Different Content)
  const table2 = {
    subtitle: "WHY CHOOSE US",
    title: "One Brain vs. Choose Wisely Collective Brilliance",
    competitorName: "Freelancers",
    features: [
      { label: "Affordability", competitorValue: true, ababilValue: true },
      { label: "Consistent Quality & Reliability", competitorValue: false, ababilValue: true },
      { label: "Scalability for Large Projects", competitorValue: false, ababilValue: true },
      { label: "Dedicated Support", competitorValue: true, ababilValue: true },
      { label: "Team Collaboration", competitorValue: false, ababilValue: true },
      { label: "Commitment & Accountability", competitorValue: false, ababilValue: true },
    ],
  };

  // 🔹 Table 2 (Different Content)
  const table3 = {
    subtitle: "WHY CHOOSE US",
    title: "We Think Like a Team Member, Work Like a Partner",
    competitorName: "In-House Team",
    features: [
      { label: "Diverse Expertise & Skill Set", competitorValue: false, ababilValue: true },
      { label: "AI-Powered & Data-Driven Design", competitorValue: false, ababilValue: true },
      { label: "No Hiring & Training Hassle", competitorValue: false, ababilValue: true },
      { label: "Cost-Effective & Scalable", competitorValue: false, ababilValue: true },
      { label: "Faster Turnaround & Flexibility", competitorValue: true, ababilValue: true },
      { label: "End-to-End Support", competitorValue: true, ababilValue: true },
    ],
  };

  return (
    <div>
      <Tables {...table1} />
      <Tables {...table2} />
      <Tables {...table3} />
    </div>
  );
}