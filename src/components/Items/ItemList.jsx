import React from 'react'
import { Col } from 'react-bootstrap'
import Counter from '../Counter/Counter';
import CardItem from './CardItem';



const ItemList = ({ items, category }) => {
  return (
    <>
      {
          items.map((item) => (
              <Col md={4} lg={3} xs={12} key={item.id}>
                  <CardItem item={item}/>
              </Col>
          
          ))
      }

    </>
  )
}

export default ItemList
