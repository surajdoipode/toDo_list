import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import Header from "./pages/header/header";
import Button from "./assets/Component/Button/Button.jsx";
import { Container } from "@mui/material";
import TaskCard from "./assets/Component/TaskCard/TaskCard.jsx";
function App() {
  let defaultNewTask = {
    task_name: "",
    due_date: "",
    status: false,
    id: Math.round(Math.random() * 100),
  };
  const [newTasks, setnewTasks] = useState(defaultNewTask);
  const [data, setdata] = useState([
    { task_name: "Food make ", due_date: "20-may-2025", status: false, id: "" },
    {
      task_name: "driving bike",
      due_date: "30-may-2025",
      status: false,
      id: 2,
    },
    { task_name: "Buy Food", due_date: "10-June-2025", status: false, id: 3 },
    { task_name: "Food make ", due_date: "20-may-2025", status: false, id: 4 },
    { task_name: "Food make ", due_date: "20-may-2025", status: false, id: 5 },
  ]);

  console.log("this check parpose", data);
  const textHandeler = () => {
    console.log("this is the function app.jsx");
  };

  const buttonadd = (e) => {
    console.log("this is button add function ");
    let id = Math.round(Math.random() * 100);
    setnewTasks({ ...newTasks, id: id });
    setdata([...data, newTasks]);
    console.log(newTasks);
  };
  const handleDeleteTask = (e) => {
    console.log("delete czlick");
    console.log(e.target.value);
    let select_id = e.target.value;
    let filtered_tasks = data.filter((task) => task.id != select_id);
    console.log(filtered_tasks);
    setdata(filtered_tasks);
  };
// call a input onchange
  const taskNameChangeHandelar = (e) => {
    console.log(e.target.value);
    setnewTasks({ ...newTasks, task_name: e.target.value });
  };
  const taskDateChangeHandelar = (e) => {
    console.log(e.target.value);
    setnewTasks({ ...newTasks, due_date: e.target.value });
  };
  return (
    <>
    {/* start the code */}
    {/* task adding section */}
      <div className={styles["task-data"]}>   
        <div>
          <label htmlFor="task-name">task name</label>
          <input type="text" id="task-name" onChange={taskNameChangeHandelar} />
        </div>
        <div>
          <label htmlFor="Due-date"> select date</label>
          <input type="date" id="div-date" onChange={taskDateChangeHandelar} />
        </div>
        <Button
          // className={styles["btn-add"]}
          btntype={"primary"}
          value={"add-task"}
          lable={"+add-task"}
          onClick={buttonadd}
        />
      </div>
      {/* task added show task card section */}
      <div className={styles["task-style"]}>
        {data.map((item) => (
          <TaskCard
            task_name={item.task_name}
            task_status={item.status}
            due_date={item.due_date}
            task_id={item.id}
            onDeleteClick={handleDeleteTask}
          />
        ))}
      </div>

      {/* <Header/> */}
    </>
  );
}

export default App;
