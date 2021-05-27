import { FC, useState } from "react";
import "./itemsNavigation.scss";
import Fade from "react-reveal/Fade";

interface NavbarProps {
  shoWMenu?: () => void;
  setLabelName: (arg: string) => void;
}

const ItemsNavigation: FC<NavbarProps> = ({ shoWMenu, setLabelName }) => {
  const [selected, setSelected] = useState("all");
  const labels = ["all", "social", "ecomerce", "travel", "lifestyle", "other"];
  const selectData = (lable: string) => {
    setSelected(lable);
    setLabelName(lable);
  };

  return (
    <div className="wrapper">
      <Fade bottom cascade duration={3000}>
        <div className="wrapper__navigation__wrapper">
          {labels.map((item, index) => (
            <div
              key={index}
              onClick={() => selectData(item)}
              className="wrapper__navigation__wrapper__item"
            >
              <button
                onClick={shoWMenu}
                className={
                  item === selected
                    ? "wrapper__navigation__wrapper__item--buttonActive"
                    : "wrapper__navigation__wrapper__item--button"
                }
                data-text={item}
              >
                <span>{item}</span>
              </button>
            </div>
          ))}
        </div>
      </Fade>
      <div className="wrapper__closeButton">
        <span onClick={shoWMenu} className="wrapper__closeButton__close--first">
          &times;
        </span>
      </div>
    </div>
  );
};

export default ItemsNavigation;
