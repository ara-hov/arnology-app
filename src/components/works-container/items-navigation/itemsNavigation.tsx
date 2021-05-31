import { FC, useState } from 'react';
import './itemsNavigation.scss';

interface NavbarProps {
  shoWMenu?: () => void;
  setLabelName: (arg: string) => void;
}

const ItemsNavigation: FC<NavbarProps> = ({ shoWMenu, setLabelName }) => {
  const [selected, setSelected] = useState('all');
  const labels = ['all', 'social', 'ecomerce', 'travel', 'lifestyle', 'other'];
  const selectData = (label: string) => {
    setSelected(label);
    setLabelName(label);
  };

  return (
    <div className='wrapper'>
      <div className='wrapper__navigation__wrapper'>
        {labels.map((item, index) => (
          <div
            key={index}
            onClick={() => selectData(item)}
            className='wrapper__navigation__wrapper__item'
          >
            <button
              onClick={shoWMenu}
              className={
                item === selected
                  ? 'wrapper__navigation__wrapper__item--buttonActive'
                  : 'wrapper__navigation__wrapper__item--button'
              }
              data-text={item}
            >
              <span>{item}</span>
            </button>
          </div>
        ))}
      </div>
      <div className='wrapper__closeButton'>
        <span onClick={shoWMenu} className='wrapper__closeButton__close--first'>
          &times;
        </span>
      </div>
    </div>
  );
};

export default ItemsNavigation;
