import React from 'react';
import axios from 'axios';
import UpdateItem from './UpdateItem';

const ItemList = ({ refreshItems, items }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/items/${id}`);
      refreshItems();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <UpdateItem item={item} refreshItems={refreshItems} />
          <button onClick={() => handleDelete(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;