export const Task = (props) => {
    return (
        <div className='task-container'>
          <input className="checkbox" type='checkbox' onClick={() => props.onStatusChange(props.id, props.checked)} />
          <div className="label-container">
            <label 
              className="task"
              style={{textDecorationLine: props.checked ? "line-through" : "none"}}
            >{props.taskName}</label>
            <i className="fa fa-trash-alt delete-icon"
              onClick={() => props.deleteTask(props.id)}></i>
          </div>
        </div>
    );
}