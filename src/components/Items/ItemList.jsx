import React from 'react'
import { Col } from 'react-bootstrap'
import Counter from '../Counter/Counter';


const ItemList = ({ items }) => {
  return (
    <>
      {
          items.map((item) => (
              <Col md={4} lg={3} xs={12} key={item.id}>
                  <CardList item={item}/>

              </Col>
          ))
      }

    </>
  )
}

