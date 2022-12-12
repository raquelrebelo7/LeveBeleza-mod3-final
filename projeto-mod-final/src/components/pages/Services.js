import React from 'react';
import '../../App.css';
import CardItem from '../CardItem';
import Footer from '../Footer';

function Cards() {
  return (
    <>
    <div className='cards'>
      <h1>Confira nossos serviços</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.svg'
              text='Tipos de hidratação: Profunda, com queratina, com cauterização, com óleos e com silicone.'
              label='cabelos'
              path='/sign-up'
            />
           
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.svg'
              text='Colorometria capilar: Moreno iluminado, ruivo intenso, loiro e preto.'
              label='cabelos'
              path='/sign-up'
            />
            <CardItem
              src='images/img-4.svg'
              text='Tipos de escovas: Definitiva, inteligente, marroquina e indiana.'
              label='Cabelos'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.svg'
              text='Tipos de cortes: Degradê, pixie, chanel, sidecut, buzzcut e long bob médio.'
              label='Cabelos'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}


export default Cards;