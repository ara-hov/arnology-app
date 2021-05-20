import './BlueLine.scss';

const BlueLine = ({ width = '5rem', className = '' }) => {
  return (
    <div className={`blue-line${className}`} style={{ width: width }}></div>
  );
};

export default BlueLine;
