import { useState } from "react";
import useTasksStore from "../stores/tasksStore";

function AddTaskPanel() {
  const { addTask } = useTasksStore();
  const [title, setTitle] = useState("");

  function handleAddTask(title = "", isCompleted = false) {
    addTask({ title: title, completed: isCompleted });
    setTitle("");
  }

  return (
    <div className="TaskList_AddPanel">
      <label>
        New task title:
        <input
          type="text"
          name="taskTitleInput"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && handleAddTask(title, false);
          }}
        />
      </label>
      <button onClick={handleAddTask.bind(this, title, false)}>
        Add new task
      </button>
    </div>
  );
}

export default AddTaskPanel;
