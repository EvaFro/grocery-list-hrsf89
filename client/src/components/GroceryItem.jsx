import React from 'react';

const GroceryItem = (props) => (
  <div key={props.item.id}>
  	{props.item.description} {props.item.quantity}
  </div>
)

export default GroceryItem;