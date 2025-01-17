import useTasksStore from "stores/tasksStore";
import TaskEditPanel from "components/TaskEditPanel";

function TaskBlock({ task, orderKey }) {
  const { setTaskCompletionState, deleteTask, editTaskTitle } = useTasksStore();

  function handleSetCompletion(e) {
    setTaskCompletionState(task.id);
  }

  return (
    <div className={`TaskList_Row ${(task?.completed && "completed") || ""}`}>
      <span title={task.title}>{`Task ${orderKey}: ${
        (task?.title.length > 64
          ? `${task?.title?.substring(0, 64)}...`
          : task?.title) || "No title provided"
      }`}</span>
      <TaskEditPanel
        taskTitle={task.title}
        isTaskCompleted={Boolean(task?.completed) ?? false}
        handleSetCompletion={handleSetCompletion.bind(this)}
        deleteTask={deleteTask.bind(this, task.id)}
        editTaskTitle={editTaskTitle.bind(this, task.id)}
      />
    </div>
  );
}

export default TaskBlock;
