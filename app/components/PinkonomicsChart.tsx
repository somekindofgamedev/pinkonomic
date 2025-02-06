import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Airdrops", value: 50, color: "#FF007F" },
  { name: "Pools", value: 30, color: "#FF3399" },
  { name: "Treasury", value: 10, color: "#FF66B2" },
  { name: "C. Pools", value: 5, color: "#FF99CC" },
  { name: "Pink Vibes", value: 5, color: "#FFC0CB" },
];

/* 🎯 Custom Labels - Fixed Spacing & Positioning */
const renderCustomLabel = ({ cx, cy, midAngle, outerRadius, percent, index }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 30; // ✅ More space for label positioning
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      fontSize="16px"
      fontWeight="600"
      className="drop-shadow-md"
    >
      {data[index].name}: {(percent * 100).toFixed(0)}%
    </text>
  );
};

const PinkonomicsChart = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto mt-12 px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* 🔥 Title */}
      <h3 className="text-4xl font-bold text-center bg-gradient-to-r from-pink-400 to-blue-500 text-transparent bg-clip-text">
        PINK’s Pinkonomics
      </h3>
      <p className="text-lg text-gray-300 mt-2">Supply = 2,300,001,221</p>

      {/* ✅ Fully Fixed Pie Chart */}
      <div className="w-full max-w-2xl mt-6 p-6">
        <ResponsiveContainer width="100%" height={500}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%" // ✅ Fully centered
              cy="50%"
              outerRadius={120} // ✅ More space for labels
              innerRadius={60}
              label={renderCustomLabel} // ✅ Labels now positioned properly
              labelLine={true} // ✅ Retains label lines for clarity
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="#fff" />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default PinkonomicsChart;
