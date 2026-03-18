import Image from "next/image";


export const projects = [
  {
    id: 1,
    category: "FINTECH / AI",
    title: "FAHAD – AI-Powered Money Buddy",
    description:
      "FAHAD is a cutting-edge FinTech platform that uses artificial intelligence to manage budgeting, expense tracking, and automated financial advice.",
    modules: "40+",
    growth: "36%",
    author: "Neil Saidi",
    role: "Plato CEO",
    bgColor: "bg-lime-400",
    image: "/phone.png",
  },
  {
    id: 2,
    category: "ACADEMIC / PORTFOLIO",
    title: "Find Me – Academic Portfolio",
    description:
      "Find Me is a sophisticated academic directory and portfolio management system designed to help students and researchers showcase their achievements.",
    modules: "18+",
    growth: "48%",
    author: "Omar",
    role: "Firmste CEO",
    bgColor: "bg-red-400",
    image: "/portfolio.png",
  },
];

export default function ServiceCard() {
  return (
    <section className="my-10 bg-white px-16">
      
    </section>
  );
}