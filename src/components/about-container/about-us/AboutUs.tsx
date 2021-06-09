import './aboutUs.scss';
import About_us_img from './../../../assets/images/contacts.png';

const AboutUs = () => {
  return (
    <div className='aboutUs__container'>
      <h3 className='aboutUs__container--title'>WHO WE ARE</h3>

      <div className='aboutUs__container__info'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in
          fuga nihil labore impedit, aspernatur, consectetur provident
          laudantium mollitia vel tempore quidem eveniet aperiam? Eveniet
          dignissimos placeat ad et consequuntur a eligendi iste ullam adipisci
          odit corporis libero delectus quam, quas, explicabo fugit animi nisi
          impedit cumque, tenetur sunt aspernatur. Saepe, porro impedit
          laudantium, reprehenderit quia dolore animi doloremque dignissimos eum
          corporis ex quisquam quasi magni rerum quaerat provident autem
          molestiae velit voluptates quos! Et aliquam maxime ratione totam
          porro, nesciunt eveniet. Incidunt ducimus perferendis nemo nihil illo
          rerum quidem maiores rem. Distinctio quam facilis minus debitis?
          Inventore, voluptatibus facilis.
        </p>
        <img src={About_us_img} alt='img' />
      </div>
    </div>
  );
};

export default AboutUs;
