import Button from '../../reusable-components/button/Button';
import './applyPosition.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Input from '../../reusable-components/input/Input';
import TextArea from '../../reusable-components/textarea/TextArea';
import PhoneInput from 'react-phone-input-2';
import { useEffect, useState } from 'react';

const ApplyPosition = () => {
  const [phone, setPhone] = useState<string>('');
  const emailRegExp = /^^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  useEffect(() => {
    console.log(
      document.getElementById('file'),
      '4444444444444444444444444444'
    );
  }, []);

  // const fd = new FormData(document.getElementById('file'));
  // fd.append('CustomField', 'This is some extra data');

  const ContactUsSchema = Yup.object().shape({
    fullName: Yup.string()
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
    <div className='applyPosition__container'>
      <h3 className='applyPosition__container--title'>
        APPLY FOR THIS POSITION
      </h3>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          phone: phone,
          message: '',
          file: '',
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
          console.log(values.file);

          return (
            <form
              className='contactUs__container__form'
              onSubmit={handleSubmit}
            >
              <Input
                placeholder='FULL Name *'
                name='fullName'
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.fullName && touched.fullName ? 'error' : ''}
                errorsMessage={
                  errors.fullName && touched.fullName && errors.fullName
                }
              />
              <Input
                placeholder='E-Mail *'
                name='email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`contactUs__container__form__inputGroup ${
                  errors.email && touched.email ? 'error' : ''
                }`}
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

              <div className='contactUs__container__form__textarea'>
                <TextArea
                  placeholder='Cover Letter (If have)'
                  name='message'
                  onChange={handleChange}
                  value={values.message}
                />
              </div>
              <div className='applyPosition__container__form__file'>
                <label htmlFor='file'>
                  <span>+</span> ATTACH RESUME
                </label>
                {values.file}
                <Input
                  id='file'
                  placeholder='File'
                  type='file'
                  name='file'
                  value={values.file}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`file ${
                    errors.file && touched.file ? 'error' : ''
                  }`}
                  errorsMessage={errors.file && touched.file && errors.file}
                />
              </div>

              <Button
                className='applyPosition__container__form__submitButton'
                buttonText='SUBMIT APPLICATION'
                type='submit'
              />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ApplyPosition;
