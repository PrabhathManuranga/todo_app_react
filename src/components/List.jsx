import useTasksStore from "../stores/tasksStore";
import AddTaskPanel from "./AddTaskPanel";
import TaskBlock from "./TaskBlock";

function ListView() {
  const tasksArray = useTasksStore((state) => state.getTasks());
  return (
    <>
      <AddTaskPanel />
      <br />
      {tasksArray.map((task, key) => {
        return <TaskBlock task={task} orderKey={key} key={key} />;
      })}
    </>
  );
}

export default ListView;
