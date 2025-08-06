import Button from "../Button/Button";
import styles from "./taslCard.module.css";
const TaskCard=({task_status,task_name,due_date,onDeleteClick,task_id})=>{
return <div className={styles['taskCard']}>
  <div className={styles['taskHedear']}>
       <input type="checkbox" checked={task_status} />
            <h3>{task_name}</h3>
  </div>
         
            <h3>{due_date}</h3>
            <Button
              onClick={onDeleteClick}
              value={task_id}
              lable="delete"
              typeColor="error"
          />            
          </div>
}
export default TaskCard;