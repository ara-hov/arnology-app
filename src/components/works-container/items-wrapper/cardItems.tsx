import { FC, useEffect, useState } from 'react';
import { CardImages } from '../fakeData';
import './cardItems.scss';

interface CardItemsProps {
  sortLabelName: string;
}

const CardItems: FC<CardItemsProps> = ({ sortLabelName }) => {
  const [isSorted, setIsSorted] = useState(false);
  const[count,setCount]=useState(0); 

  useEffect(() => {
    sortLabelName === 'all' ? setIsSorted(false) : setIsSorted(true);
   }, [sortLabelName]);

  useEffect(()=>{
   let counter=count; 
   const interval=setInterval(()=>{
     if(counter>=CardImages.length){
       clearInterval(interval);
     }    
     else{
       setCount(count=>count+1);
       counter++;
     }
   },500);
   
   return()=>clearInterval(interval)  
  },[count]);

  return (
    <div className='cardItems__wrapper'>     
        {CardImages &&
          CardImages.filter((item) =>
            !isSorted
              ? item.type !== sortLabelName
              : item.type === sortLabelName
          ).slice(0,count).map((card, index) => (
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
    </div>
  );
};

export default CardItems;
