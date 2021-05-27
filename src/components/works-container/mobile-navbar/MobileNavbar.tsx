import ItemsNavigation from "../items-navigation/itemsNavigation";
import Fade from "react-reveal/Fade";
import "./mobileNavbar.scss";
import { FC } from "react";

interface MobileNavbarProps {
  shoWMenu: () => void;
  setLabelName: (arg: string) => void;
}

const MobileNavbar: FC<MobileNavbarProps> = ({ shoWMenu, setLabelName }) => {
  return (
    <Fade top fraction={0.5} delay={100} duration={1500} distance="7rem">
      <div className="mobileNavbar__container">
        <ItemsNavigation shoWMenu={shoWMenu} setLabelName={setLabelName} />
      </div>
    </Fade>
  );
};

export default MobileNavbar;
