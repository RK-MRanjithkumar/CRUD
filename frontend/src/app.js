import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateItem from './components/CreateItem';
import ItemList from './components/ItemList';

const App = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/items');
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>CRUD with React and MongoDB</h1>
      <CreateItem refreshItems={fetchItems} />
      <ItemList items={items} refreshItems={fetchItems} />
    </div>
  );
};

export default App;