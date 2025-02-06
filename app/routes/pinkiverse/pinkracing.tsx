import { FaGlobe } from "react-icons/fa";
import GamePage from "~/components/GamePage";
import pinknessOverdriveImage from "~/images/games/pinkness-overdrive-preview.jpg";

const PinknessOverdrivePage = () => {
  return (
    <GamePage
      title="Pinkness Overdrive"
      description="Take a high-speed snowboarding ride through treacherous terrain. Dodge obstacles, race against time, and dominate the leaderboard!"
      image={pinknessOverdriveImage}
      platforms="Available on: Desktop Browsers Only"
      playLinks={[
        { icon: <FaGlobe />, label: "Play in Browser", href: "https://pink.racing" },
      ]}
    />
  );
};

export default PinknessOverdrivePage;
