import { Link } from 'react-router-dom';
import NotFoundPageIcon from '../../components/icon-containers/NotFoundPageIcon';
import Button from '../../components/reusable-components/button/Button';
import './notFound.scss';

const NotFound = () => {
  return (
    <div className='notFound'>
      <NotFoundPageIcon />
      <p className='notFound--title'> Sorry! The Page not found</p>
      <p className='notFound--info'>
        The link you followed probably broken, or the page has been removed.
      </p>
      <Link to='/'>
        <Button
          buttonText='back to homepage'
          className='notFound__btn'
        ></Button>
      </Link>
    </div>
  );
};

export default NotFound;
