import { FaTelegram } from "react-icons/fa";
import GamePage from "~/components/GamePage";
import pinkAMoleImage from "~/images/games/pink-a-mole-preview.jpg";

const PinkAMolePage = () => {
  return (
    <GamePage
      title="Pink-a-Mole"
      description="Whack as many platypuses as possible—but avoid the astronauts! A chaotic and fun take on the classic whack-a-mole game."
      image={pinkAMoleImage}
      platforms="Available on: Telegram"
      playLinks={[
        { icon: <FaTelegram />, label: "Play on Telegram", href: "https://t.me/pinkamole_bot" },
      ]}
    />
  );
};

export default PinkAMolePage;
