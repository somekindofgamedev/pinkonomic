import { motion } from "framer-motion";

const ParachainPointsTable = () => {
  const parachains = [
    { name: "Moonbeam", supply: "1.25%" },
    { name: "Bifrost", supply: "1.13%" },
    { name: "Astar", supply: "1.01%" },
    { name: "Crust", supply: "0.91%" },
    { name: "Phala", supply: "0.82%" },
    { name: "Acala", supply: "0.74%" },
    { name: "InvArch", supply: "0.66%" },
    { name: "Zeitgeist", supply: "0.60%" },
    { name: "Darwinia", supply: "0.54%" },
    { name: "Polkadex", supply: "0.48%" },
    { name: "11th Parachain and Beyond", supply: "90% of Previous Parachain" },
  ];

  return (
    <motion.div
      className="w-full md:w-[500px] p-6 bg-black bg-opacity-60 backdrop-blur-lg rounded-xl shadow-lg border border-pink-500/30 text-white"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Title */}
      <h3 className="text-center text-2xl font-bold text-pink-400">
        PINK Points for Parachains
      </h3>
      <p className="text-center text-sm text-gray-300 mt-2">
        Amount of PINK Points = <span className="font-bold text-pink-400">12.5% of Total Supply</span>
      </p>

      {/* Table Container */}
      <div className="mt-6 w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-pink-600 text-black font-bold text-lg">
              <th className="py-3 px-4 text-left">Parachain</th>
              <th className="py-3 px-4 text-right">% Total Supply</th>
            </tr>
          </thead>
          <tbody>
            {parachains.map((item, index) => (
              <tr
                key={index}
                className={`text-md ${index % 2 === 0 ? "bg-black bg-opacity-30" : "bg-black bg-opacity-50"}`}
              >
                <td className="py-3 px-4 text-center">{item.name}</td>
                <td className="py-3 px-4 text-center font-semibold">{item.supply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ParachainPointsTable;
