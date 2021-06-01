import { useState } from 'react';
import * as Yup from 'yup';
import Input from '../../reusable-components/input/Input';
import PhoneInput from 'react-phone-input-2';
import TextArea from '../../reusable-components/textarea/TextArea';
import Button from '../../reusable-components/button/Button';
import { Formik } from 'formik';
import './contactUs.scss';

const ContactUs = () => {
  const [phone, setPhone] = useState<string>('');
  const emailRegExp = /^^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  const ContactUsSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .matches(emailRegExp, 'Email is not valid')
      .required('Email is not valid'),
  });

  const handleSubmit = (values: any) => {
    values.phone = phone;
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className='contactUs__container'>
      <h2 className='contactUs__container--title'>contact us</h2>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          phone: phone,
          company: '',
          message: '',
          subscribe: false,
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
            <form
              className='contactUs__container__form'
              onSubmit={handleSubmit}
            >
              <div className='contactUs__container__form__name'>
                <Input
                  placeholder='First Name *'
                  name='firstName'
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.firstName && touched.firstName ? 'error' : ''
                  }
                  errorsMessage={
                    errors.firstName && touched.firstName && errors.firstName
                  }
                />
                <Input
                  placeholder='Last Name *'
                  name='lastName'
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.lastName && touched.lastName ? 'error' : ''}
                  errorsMessage={
                    errors.lastName && touched.lastName && errors.lastName
                  }
                />
              </div>
              <Input
                placeholder='Email *'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? 'error' : ''}
                errorsMessage={errors.email && touched.email && errors.email}
              />

              <PhoneInput
                country={'am'}
                value={phone}
                onChange={(phone) => setPhone(phone)}
                onBlur={(phone) => handleBlur(phone)}
                inputProps={{
                  name: 'phone',
                  required: true,
                }}
              />

              <Input
                placeholder='Company'
                name='company'
                onChange={handleChange}
                value={values.company}
              />
              <div className='contactUs__container__form__textarea'>
                <h4 className='contactUs__container__form__textarea--title'>
                  how can we help?
                </h4>
                <TextArea
                  placeholder='Your message'
                  name='message'
                  onChange={handleChange}
                  value={values.message}
                />
              </div>
              <label className='contactUs__container__form__checkbox'>
                <input
                  type='checkbox'
                  name='subscribe'
                  onChange={handleChange}
                  checked={values.subscribe}
                />
                <span className='checkmark'></span>
                <span className='contactUs__container__form__checkbox--text'>
                  Yes, I want to subscribe
                </span>
              </label>
              <Button
                className='contactUs__container__form__submitButton'
                buttonText='SEND'
                type='submit'
              />
              <p className='contactUs__container__form__privacy'>
                By clicking the button I agree with the collection and
                processing of my personal data as described in the Privacy
                policy.
              </p>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactUs;
