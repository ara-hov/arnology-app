import './mobileTranslate.scss';
import { useState, FC, useEffect } from 'react';

const MobileTranslate: FC<any> = ({ selectedLang }) => {
  const LangArray = ['EN', 'RU', 'FR', 'HY'];
  const [lang, setLang] = useState('');

  useEffect(() => {
    setLang(selectedLang);
  }, [selectedLang]);

  return (
    <div className='mobile__translate__container'>
      {LangArray.map((item, index) => (
        <span
          key={index}
          className={`mobile__translate__container--item ${
            item === lang ? 'selected' : ''
          }`}
          onClick={() => setLang(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default MobileTranslate;
