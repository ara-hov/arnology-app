import { FC, useState, useEffect } from "react";
import "./worksHeader.scss";
import ItemsNavigation from "../items-navigation/itemsNavigation";
import MobileNavbar from "../mobile-navbar/MobileNavbar";
import Fade from "react-reveal/Fade";

interface HeaderProps {
  sortByLabelName: (arg: string) => void;
}

const WorksHeader: FC<HeaderProps> = ({ sortByLabelName }) => {
  const [color, setColor] = useState("#1f2937");
  const [isOpen, setOpen] = useState(false);
  const [labelName, setLabelName] = useState("all");

  const shoWMenu = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    sortByLabelName(labelName);
    setLabelName(labelName);
  }, [labelName]);

  return (
    <div>
      <Fade bottom duration={3000}>
        <div className="worksContainer__header">
          <h1 className="worksContainer__header--text">our works</h1>
        </div>
      </Fade>
      <div className="worksContainer__header--desktop">
        <ItemsNavigation setLabelName={setLabelName} />
      </div>
      <div
        className="worksContainer__header__mobile"
        onClick={shoWMenu}
        onMouseOver={() => setColor("#ef0d33")}
        onMouseLeave={() => setColor("#1f2937")}
      >
        <h1 className="worksContainer__header__mobile__showLabel">show:</h1>
        <h1
          className="worksContainer__header__mobile__allLabel"
          style={{ color }}
        >
          {labelName}
        </h1>
        <span className="worksContainer__header__mobile__poligon"></span>
      </div>
      <div
        className={
          isOpen
            ? "worksContainer__header__mobile__menu"
            : "worksContainer__header__mobile__menu--hide"
        }
      >
        <MobileNavbar shoWMenu={shoWMenu} setLabelName={setLabelName} />
      </div>
    </div>
  );
};

export default WorksHeader;
