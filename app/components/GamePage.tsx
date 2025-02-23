import { useState, type JSX } from "react";
import { motion } from "framer-motion";
import HomeButton from "~/components/buttons/HomeButton";

interface Tournament {
  name: string;
  prize: string;
  startTime: string;
  endTime: string;
  link?: string;
}

interface GamePageProps {
  title: string;
  description: string;
  image: string;
  platforms: string;
  playLinks: { icon: JSX.Element; label: string; href: string }[];
  tournaments?: Tournament[];
}

const GamePage = ({ title, description, image, platforms, playLinks, tournaments }: GamePageProps) => {
  const hasTournaments = tournaments && tournaments.length > 0;

  return (
    <section className="relative bg-black text-white min-h-screen overflow-hidden">
      <HomeButton />

      {/* Background Animation */}
      <motion.div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80 -z-10" />
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1400px] h-[1400px] bg-pink-500 rounded-full blur-[350px] opacity-30 -z-10"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Content Wrapper */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-32">
        {/* Game Hero Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Game Image */}
          <motion.div
            className="flex-1 max-w-xl rounded-2xl overflow-hidden shadow-xl border border-gray-800"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img
              src={image}
              alt={title}
              className="w-full h-auto object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.div>

          {/* Game Details */}
          <div className="flex-1 max-w-xl flex flex-col gap-6 text-center lg:text-left">
            <h1 className="text-6xl font-extrabold uppercase bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
              {title}
            </h1>
            <p className="text-lg text-gray-300 leading-snug">{description}</p>
            <p className="text-sm text-gray-400 italic">{platforms}</p>

            {/* Play Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-1">
              {playLinks.map((link, index) => (
                <GameButton key={index} icon={link.icon} label={link.label} href={link.href} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tournaments Section */}
        {hasTournaments ? <TournamentTabs tournaments={tournaments} /> : <NoTournaments />}
      </div>
    </section>
  );
};

/********************************
 * Play Now Button
 ********************************/
const GameButton = ({ icon, label, href }: { icon: JSX.Element; label: string; href: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 transition shadow-md text-white font-semibold"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
    <span className="ml-3">{label}</span>
  </motion.a>
);

/********************************
 * Tournament Tabs
 ********************************/
const TournamentTabs = ({ tournaments }: { tournaments: Tournament[] }) => {
  const [activeTab, setActiveTab] = useState<"Live" | "Upcoming" | "Past">("Live");

  const now = new Date();
  const categorizedTournaments: Record<"Live" | "Upcoming" | "Past", Tournament[]> = {
    Live: tournaments.filter(t => new Date(t.startTime) <= now && new Date(t.endTime) >= now),
    Upcoming: tournaments.filter(t => new Date(t.startTime) > now),
    Past: tournaments.filter(t => new Date(t.endTime) < now),
  };

  return (
    <div className="mt-16 w-full max-w-5xl mx-auto px-6 lg:px-12">
      <h2 className="text-5xl font-bold text-pink-400 text-center">Tournaments</h2>

      {/* Tab Navigation */}
      <div className="flex justify-center mt-8 space-x-4">
        {Object.keys(categorizedTournaments).map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 text-lg font-semibold rounded-full transition-all ${
              activeTab === tab ? "bg-pink-500 text-white shadow-lg" : "bg-gray-800 text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab as "Live" | "Upcoming" | "Past")}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tournament Display (Table for Large Screens, Cards for Mobile) */}
      <div className="mt-8 bg-gray-900 p-6 rounded-2xl shadow-lg max-w-5xl mx-auto">
        <div className="hidden md:block">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 text-pink-400 text-lg">
                <th className="p-4">Tournament</th>
                <th className="p-4">Prize</th>
                <th className="p-4">Start Time</th>
                <th className="p-4">End Time</th>
              </tr>
            </thead>
            <tbody>
              {categorizedTournaments[activeTab].map((tournament, index) => (
                <tr key={index} className="border-b border-gray-800 hover:bg-gray-800 transition">
                  <td className="p-4">{tournament.name}</td>
                  <td className="p-4">{tournament.prize}</td>
                  <td className="p-4">{tournament.startTime}</td>
                  <td className="p-4">{tournament.endTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile-Friendly Card View */}
        <div className="md:hidden flex flex-col gap-4">
          {categorizedTournaments[activeTab].map((tournament, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700">
              <h3 className="text-lg font-bold text-pink-400">{tournament.name}</h3>
              <p className="text-gray-300">
                <span className="font-semibold">Prize:</span> {tournament.prize}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">Start:</span> {tournament.startTime}
              </p>
              <p className="text-gray-400">
                <span className="font-semibold">End:</span> {tournament.endTime}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/********************************
 * No Tournaments Section
 ********************************/
const NoTournaments = () => (
  <div className="mt-16 text-center p-6 bg-gray-900 border border-pink-500/30 rounded-xl shadow-lg w-full max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-pink-400">🏆 No Tournaments Yet</h2>
    <p className="text-lg text-gray-300 mt-4">
      Stay tuned! Tournaments will be announced soon. Check back later for exciting competitions and rewards.
    </p>
  </div>
);

export default GamePage;
