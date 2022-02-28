'use strict';

import { Switch, Card, Elevation, Button } from '@blueprintjs/core';
import { useContext , useState } from "react";

import {DisplayContext} from '../context/settingscontext';

export default function List (props) {

  const site = useContext(DisplayContext);


  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLast = currentPage * site.toDosShowing;
  const indexOfFirst = indexOfLast  - site.toDosShowing;
  const currentTodos = props.list.slice(indexOfFirst, indexOfLast);

const renderTodos = currentTodos.map((item, index) => {
  return(
    <div>
    
        
        <div key={item.id}>
            <Card interactive={true} elevation={Elevation.TWO}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <Button onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</Button>
          <Button onClick={() => props.deleteItem(item.id)}>DELETE</Button>
          <hr />
          </Card>
        </div>
        
      )
      </div>
)
});

function handleClick(event) {
  setCurrentPage(event.target.id);
}

const pageNumbers = [];
for (let i = 1; i <= Math.ceil(props.list.length / site.toDosShowing); i+=1){
  pageNumbers.push(i);
}

const renderPageNumbers = pageNumbers.map((number) => {
  return (
    <Button key = {number} id ={number} onClick ={handleClick}>
      {number}
    </Button>
  );
});

function handleChangeTodos(event){
  site.changeTodosShown(event.target.value);
}


return (
<>
<span>To-Do's Per Page: {site.toDosShowing} </span>
<button onClick ={handleChangeTodos} value = {3}> 3 </button>
<Switch
label = "Show finished tasks?"
checked = {site.showComplete}
onChange={site.toggleShowComplete}
/>

<ul id="todo-box">{renderTodos}</ul>
<ul id="page-numbers">{renderPageNumbers}</ul>

</>

)

}; // End of function List