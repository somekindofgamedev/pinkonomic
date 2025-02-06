import { useEffect, useRef, useState } from "react";
import { Sidebar, MobileNav } from "~/components/Navigation";
import Hero from "~/components/sections/Hero";
import Games from "~/components/sections/Games";
import Teleport from "~/components/sections/Teleport";
import Partnerships from "~/components/sections/Partnerships";
import Socials from "~/components/sections/Socials";
import Pinkonomics from "~/components/sections/Pinkonomics";
import Exchanges from "~/components/sections/Exchanges";
import NFTSection from "~/components/sections/NFTSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Create refs for each section ID:
  const sectionRefs = useRef<{
    [key: string]: HTMLDivElement | null;
  }>({
    hero: null,
    pinkonomics: null,
    games: null,
    teleport: null,
    exchanges: null,
    partnerships: null,
    socials: null,
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      let newActiveSection = activeSection;
      let maxRatio = 0;

      for (const entry of entries) {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          newActiveSection = entry.target.id;
        }
      }

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    }, {
      root: null,
      rootMargin: "0px",
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
    });

    // Observe each section
    Object.values(sectionRefs.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeSection]);

  // Smooth scroll to section
  const handleSectionClick = (id: string) => {
    const section = sectionRefs.current[id];

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Safari fallback
      setTimeout(() => {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="lg:block hidden">
        <Sidebar activeSection={activeSection} onSectionClick={handleSectionClick} />
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <MobileNav activeSection={activeSection} onSectionClick={handleSectionClick} />
      </div>

      {/* Main content area */}
      <div className="flex-1">
        {/* 1. Hero Section */}
        <Hero ref={(el) => { sectionRefs.current.hero = el; }} />

        {/* 2. Pinkonomics Section */}
        <Pinkonomics ref={(el) => { sectionRefs.current.pinkonomics = el; }} />

        {/* 3. Games Section */}
        <Games ref={(el) => { sectionRefs.current.games = el; }} />

        {/* 4. NFT Section */}
        <NFTSection ref={(el) => { sectionRefs.current.nft = el; }} />

        {/* 5. Teleport Section */}
        <Teleport ref={(el) => { sectionRefs.current.teleport = el; }} />

        {/* 6. Exchanges Section */}
        <Exchanges ref={(el) => { sectionRefs.current.exchanges = el; }} />
        
        {/* 7. Partnerships Section */}
        <Partnerships ref={(el) => { sectionRefs.current.partnerships = el; }} />
        
        {/* 8. Socials Section */}
        <Socials ref={(el) => { sectionRefs.current.socials = el; }} />
      </div>
    </div>
  );
}
