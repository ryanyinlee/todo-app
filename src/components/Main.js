'use strict';
import React, { useEffect, useState } from 'react';
import useForm from '../hooks/form.js';

import Header from './Header';
import ToDoForm from './ToDoForm'
import List from './List'
import Footer from './Footer';

// import './main.scss';

import { v4 as uuid } from 'uuid';

const Main = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);
  
  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter( item => item.id !== id );
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map( item => {
      if ( item.id == id ) {
        item.complete = ! item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete ={incomplete}/>
      
      <ToDoForm 
      onSubmit={handleSubmit}
      handleChange={handleChange}
      />

      <List       
      list={list}
      deleteItem={deleteItem} 
      toggleComplete={toggleComplete} 
      />
     
     <Footer/>
    </>
  );
};

export default Main;