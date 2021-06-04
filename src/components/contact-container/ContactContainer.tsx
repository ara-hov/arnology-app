import ContactUs from '../home-container/contact-us/ContactUs';
import './contactContainer.scss';
import ContactInfo from './contact-info/ContactInfo';

const ContactContainer = () => {
  return (
    <div className='contact__container'>
      <ContactUs />
      <ContactInfo />
    </div>
  );
};

export default ContactContainer;
