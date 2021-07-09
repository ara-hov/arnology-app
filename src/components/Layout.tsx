import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';
import Career from '../pages/career/Career';
import Contact from '../pages/contact/Contact';
import Home from '../pages/home/Home';
import NotFound from '../pages/not-found/NotFound';
import Services from '../pages/services/Services';
import Works from '../pages/works/Works';
import About from '../pages/about/About';
import CareerMore from '../pages/career-more/CareerMore';

const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/works' component={Works} />
        <Route exact path='/career' component={Career} />
        <Route exact path='/career/:id' component={CareerMore} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/404' component={NotFound} />
        {/* <Redirect exact path='/login/:token' to={sessionStorage.location} /> */}
      </Switch>
      <Footer />
    </div>
  );
};

export default Layout;
