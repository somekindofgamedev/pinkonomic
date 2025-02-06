import React from "react";
import {
  FaHome,
  FaChartLine,
  FaGamepad,
  FaRocket,
  FaHandshake,
  FaShareAlt,
  FaExchangeAlt,
  FaImage
} from "react-icons/fa";
import { motion } from "framer-motion";

export interface SectionItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavigationProps {
  activeSection: string;
  onSectionClick?: (id: string) => void;
}

const sections: SectionItem[] = [
  { id: "hero", label: "Hero", icon: <FaHome size={20} /> },
  { id: "pinkonomics", label: "Pinkonomics", icon: <FaChartLine size={20} /> },
  { id: "games", label: "Games", icon: <FaGamepad size={20} /> },
  { id: "nft", label: "NFT", icon: <FaImage size={20} /> },
  { id: "teleport", label: "Teleport", icon: <FaRocket size={20} /> },
  { id: "exchanges", label: "Exchanges", icon: <FaExchangeAlt size={20} /> },
  { id: "partnerships", label: "Partnerships", icon: <FaHandshake size={20} /> },
  { id: "socials", label: "Socials", icon: <FaShareAlt size={20} /> },
];

export const Sidebar: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  return (
    <motion.aside
      className="fixed left-6 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md text-white rounded-xl p-4 border border-white/15 flex flex-col items-center space-y-3 z-50 
      lg:block"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {sections.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <motion.button
            key={section.id}
            onClick={() => onSectionClick?.(section.id)}
            className={`
              relative flex items-center justify-center w-12 h-12 rounded-lg transition-all
              ${isActive ? "bg-pink-500 text-white" : "bg-white/10 hover:bg-white/20"}
              group
            `}
            whileTap={{ scale: 0.95 }}
          >
            {section.icon}

            {/* Tooltip - Only visible on hover */}
            <motion.span
              className="absolute left-full ml-4 px-3 py-1 rounded text-xs bg-black/50 backdrop-blur-sm text-white opacity-0 
  shadow-sm group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-white/10"
            >
              {section.label}
            </motion.span>
          </motion.button>
        );
      })}
    </motion.aside>
  );
};

Sidebar.displayName = "Sidebar";


export const MobileNav: React.FC<NavigationProps> = ({ activeSection, onSectionClick }) => {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 w-full bg-black/80 backdrop-blur-md text-white 
      flex items-center justify-around px-4 py-3 shadow-lg"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="w-full flex overflow-x-auto no-scrollbar px-2 py-3 space-x-6">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => onSectionClick?.(section.id)}
            className={`flex flex-col items-center justify-center text-xs p-2 rounded-md transition-all
              ${isActive ? "text-pink-500" : "text-white/60 hover:text-white"}`}
          >
            {section.icon}
            <span className="text-[10px] sm:text-xs md:text-sm">{section.label}</span>
          </button>
        );
      })}
      </div>
    </motion.nav>
  );
};

MobileNav.displayName = "MobileNav";
