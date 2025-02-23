import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExchangeAlt, FaTimes } from "react-icons/fa";

const SwapButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMediumOrLarger, setIsMediumOrLarger] = useState(false);

  // Detect screen size and update state
  useEffect(() => {
    const checkScreenSize = () => setIsMediumOrLarger(window.innerWidth >= 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // **Hide Swap Feature on Small Screens**
  if (!isMediumOrLarger) return null;

  return (
    <>
      {/* 🔹 Swap Button (Same for Opening & Closing) */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-pink-400/30 transition-all"
        onClick={() => setIsOpen((prev) => !prev)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FaTimes /> : <><FaExchangeAlt className="mr-2" /> Swap</>}
      </motion.button>

      {/* 🔹 Swap Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-20 right-6 z-50 w-[430px] h-[684px] bg-black bg-opacity-50 backdrop-blur-lg border border-pink-500/20 shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            {/* 📌 Iframe for Squid Swap Widget */}
            <iframe
              title="squid_widget"
              width="100%"
              height="100%"
              src='https://widget.squidrouter.com/iframe?config={"integratorId":"squid-swap-widget","companyName":"Squid","style":{"neutralContent":"#C4AEEC","baseContent":"#070002","base100":"#ffffff","base200":"#fafafa","base300":"#e8e8e8","error":"#ED6A5E","warning":"#FFB155","success":"#2EAEB0","primary":"#A992EA","secondary":"#F89CC3","secondaryContent":"#F7F6FB","neutral":"#FFFFFF","roundedBtn":"26px","roundedCornerBtn":"999px","roundedBox":"1rem","roundedDropDown":"20rem"},"slippage":1.5,"infiniteApproval":false,"enableExpress":true,"apiUrl":"https://api.squidrouter.com","comingSoonChainIds":[],"titles":{"swap":"Swap","settings":"Settings","wallets":"Wallets","tokens":"Select Token","chains":"Select Chain","history":"History","transaction":"Transaction","allTokens":"Select Token","destination":"Destination address","depositAddress":"Deposit address","seimetamask":"Important message!"},"priceImpactWarnings":{"warning":3,"critical":5},"environment":"mainnet","showOnRampLink":true,"defaultTokens":[],"iframeBackgroundColorHex":"#ffeca8"}'
              className="w-full h-full border-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SwapButton;
