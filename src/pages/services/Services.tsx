import './services.scss';
import ServicesTitle from '../../components/services/services-title/ServicesTitle';
import ServicesNavbar from '../../components/services/services-navbar/ServicesNavbar';
import ServicesListItem from '../../components/services/services-list/ServicesListItem';
import { useRef } from 'react';
import ServicesSteps from '../../components/services/services-steps/ServicesSteps';
const Services = () => {
  const beRef = useRef()
  const feRef = useRef()
  const designRef = useRef()
  const mobileRef = useRef()

  return (
    <>
    <div className="services__layout">
      <ServicesTitle 
        title={"our services"}
        titleClassName={"services__layout__title"}
      />
      <ServicesNavbar 
        fend={feRef}
        be={beRef}
        de={designRef}
        mob={mobileRef}
      />
      <ServicesListItem
        fend={feRef}
        be={beRef}
        de={designRef}
        mob={mobileRef}
      />
      
    </div>
    <ServicesSteps/>
    </>
  );
};

export default Services;
