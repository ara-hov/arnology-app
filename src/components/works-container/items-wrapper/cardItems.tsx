import { FC, useEffect, useState } from "react";
import "./cardItems.scss";
import { CardImages } from "../fakeData";
import Fade from "react-reveal/Fade";

interface CardItemsProps {
  sortLableName: string;
}

const CardItems: FC<CardItemsProps> = ({ sortLableName }) => {
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    sortLableName === "all" ? setIsSorted(false) : setIsSorted(true);
  }, [sortLableName]);

  
  return (
    <Fade bottom big cascade duration={2500} distance="20000px">
      <div className="cardItems__wrapper">
        {CardImages &&
          CardImages.filter((item) =>
            !isSorted
              ? item.type !== sortLableName
              : item.type === sortLableName
          ).map((card, index) => (
            <div key={index} className="cardItems__wrapper__card">
              <div className="cardItems__wrapper__card--imageTitle">
                <h1>{card.title}</h1>
              </div>
              <div className="cardItems__wrapper__card--image">
                <img src={card.image} alt="cardImage" />
              </div>
              <div className="cardItems__wrapper__card--imageFooter">
                <h4>{card.description}</h4>
              </div>
            </div>
          ))}
      </div>
    </Fade>
  );
};

export default CardItems;
