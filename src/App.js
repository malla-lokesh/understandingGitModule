import React, {useState, useCallback}from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoList from './components/UI/Button/Demo/DemoList';
import { useMemo } from 'react';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [reverse, setReverse] = useState(true);
  const [sortTitle, setSortTitle] = useState('Change to Descending order');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const reverseItemsHandler = useCallback(() => {
    setReverse((reverseOrNot) => !reverseOrNot);
    console.log(reverse);
    if(reverse) {
      setSortTitle('Change to Ascending order');
    }
    else {
      setSortTitle('Change to Descending order');
    }
  }, [reverse]);

  const listItems = useMemo(() => [25, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} reverse={reverse}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={reverseItemsHandler}>{sortTitle}</Button>
    </div>
  );
}

export default App;
