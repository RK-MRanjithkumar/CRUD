import React, { useState } from 'react';
import axios from 'axios';

const UpdateItem = ({ item, refreshItems }) => {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/api/items/${item._id}`, { name, description });
      refreshItems();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateItem;