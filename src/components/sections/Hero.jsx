import React from "react";
import Graph from "./Graph";
import FeatureCard from "./FeatureCard";
import "../../styles/Hero.css";

const Hero = () => {
  const features = [
    {
      icon: "🌐",
      title: "Any browser, any device.",
      description: "Identify returning web and mobile app visitors on all browsers, iOS, and Android, with exceptional accuracy."
    },
    {
      icon: "🔍",
      title: "Identify all anonymous visitors.",
      description: "Get details on suspicious visitors even when VPN, incognito mode, or a tampered browser or device is used."
    },
    {
      icon: "✨",
      title: "Delight your trusted users.",
      description: "Personalize user experience and reduce 2FA and OTP requirements by identifying logged-out users."
    }
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-graph">
            <Graph />
          </div>
          <div className="hero-features">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
