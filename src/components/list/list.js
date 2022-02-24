import { Card, Elevation, Button } from '@blueprintjs/core';

function List (props) {

return(
    <div>
    {props.list.map(item => (
        
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
        
      ))}
      </div>
)

}

export default List;