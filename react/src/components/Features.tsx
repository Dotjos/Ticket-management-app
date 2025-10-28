// import React from "react";

const features = [
  {
    title: "Create Tickets",
    description:
      "Easily log new issues with clear categories, priorities, and statuses.",
  },
  {
    title: "Track Progress",
    description:
      "Stay on top of your open, in-progress, and closed tickets with real-time updates.",
  },
  {
    title: "Collaborate",
    description:
      "Manage tickets seamlessly with your team and maintain transparency.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="max-w-6xl mx-auto px-6 py-20 text-center text-white"
    >
      <h2 className="text-3xl font-bold mb-12 text-deep-blue">App Features</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-800 backdrop-blur-md border border-white/20 
                       rounded-2xl shadow-lg p-6 hover:scale-105 transition 
                       duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-white/80 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
