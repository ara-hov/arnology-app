import { FC, useEffect, useState } from 'react';
import { CardImages } from '../fakeData';
import Fade from 'react-reveal/Fade';
import './cardItems.scss';

interface CardItemsProps {
  sortLabelName: string;
}

const CardItems: FC<CardItemsProps> = ({ sortLabelName }) => {
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    sortLabelName === 'all' ? setIsSorted(false) : setIsSorted(true);
  }, [sortLabelName]);

  return (
    <div className='cardItems__wrapper'>
      <Fade bottom big cascade duration={1500} delay={500} distance='30rem'>
        {CardImages &&
          CardImages.filter((item) =>
            !isSorted
              ? item.type !== sortLabelName
              : item.type === sortLabelName
          ).map((card, index) => (
            <div key={index} className='cardItems__wrapper__card'>
              <div className='cardItems__wrapper__card--imageTitle'>
                <h1>{card.title}</h1>
              </div>
              <div className='cardItems__wrapper__card--image'>
                <img src={card.image} alt='cardImage' />
              </div>
              <div className='cardItems__wrapper__card--imageFooter'>
                <h4>{card.description}</h4>
              </div>
            </div>
          ))}
      </Fade>
    </div>
  );
};

export default CardItems;
