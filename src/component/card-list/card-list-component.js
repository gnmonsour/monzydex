import React from 'react';
import './card-list.styles.css';
import { Card } from '../card/card.component';

const CardList = (props) => {
  return (
    <div className='card-list'>
      {props.monsters.map((monster, idx) => (
        <Card key={idx} monster={monster}></Card>
      ))}
    </div>
  );
};

export default CardList;
