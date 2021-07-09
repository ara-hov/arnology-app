import { positionData } from '../fakeDataPosition';
import './position.scss';
import { CareerPositionType } from '../../model';
import { Link } from 'react-router-dom';
import Input from './../../reusable-components/input/Input';
import Button from '../../reusable-components/button/Button';
import * as Yup from 'yup';
import { Formik } from 'formik';

const Position = () => {
  const emailRegExp = /^^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  const ContactUsSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .matches(emailRegExp, 'Email is not valid')
      .required('Email is not valid'),
  });

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className='position__container'>
      <h3 className='position__container--title'>OPEN POSITIONS</h3>

      <div className='position__container__content'>
        {positionData.map((item: CareerPositionType) => {
          return (
            <div className='position__container__content__item' key={item.id}>
              <div>
                <h3>{item.profesion}</h3>
                <p>{item.location}</p>
              </div>
              <Link to='/career/:id'>+</Link>
            </div>
          );
        })}
      </div>
      <div className='position__container__getJob'>
        <p className='position__container__getJob--subTitle'>
          Can’t find the one for you right now? Sign up to get job updates.
        </p>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={ContactUsSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <div className='position__container__getJob__inputGroup'>
                  <Input
                    placeholder='Email address'
                    name='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`position__container__getJob__inputGroup--email ${
                      errors.email && touched.email ? 'error' : ''
                    }`}
                    errorsMessage={
                      errors.email && touched.email && errors.email
                    }
                  />
                  <Button
                    type='submit'
                    buttonText='Sign up'
                    className='position__container__getJob__inputGroup--button'
                  />
                </div>
                <p className='position__container__getJob--text'>
                  Or write directly to <span>info@arnology.com</span>
                </p>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Position;
