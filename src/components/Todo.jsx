
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({task ,completed, deleteTask, update} ) => {

  return (
    <>
      <div className="Todo">
        <p>{task.task}</p>
        <div>
          <FontAwesomeIcon icon={faPenToSquare} onClick={()=> update(task,task.id)} />
          <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} />
        </div>
      </div>
      <button onClick = {() => completed(task.id)} > Mark completed</button>
    </>
  );
};

export default Todo;
