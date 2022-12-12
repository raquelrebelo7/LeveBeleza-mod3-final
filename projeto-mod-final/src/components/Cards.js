import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira nossos serviços</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.svg'
              text='Hidratação'
              label='cabelos'
              path='/products'
            />
           
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.svg'
              text='Colorometria capilar'
              label='cabelos'
              path='/products'
            />
            <CardItem
              src='images/img-4.svg'
              text='Progressiva'
              label='Cabelos'
              path='/products'
            />
            <CardItem
              src='images/img-8.svg'
              text='Cortes'
              label='Cabelos'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Cards;
