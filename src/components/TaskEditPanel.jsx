import { ReactComponent as RemoveDoneIcon } from "icons/remove_done.svg";
import { ReactComponent as CheckIcon } from "icons/check.svg";
import { ReactComponent as DeleteIcon } from "icons/delete.svg";
import { ReactComponent as EditIcon } from "icons/edit.svg";
import { useEffect, useRef, useState } from "react";

function TaskEditPanel({
  taskTitle,
  isTaskCompleted,
  handleSetCompletion,
  deleteTask,
  editTaskTitle,
}) {
  const [forceFocus, setForceFocus] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [title, setTitle] = useState(taskTitle || "");

  const rmIconRef = useRef(null);
  const cIconRef = useRef(null);

  function handleKeyDown(callback, e) {
    if (e.key === " " || e.key === "Enter") callback();
  }

  function handleSetCompletionByKeyDown() {
    handleSetCompletion();
    setForceFocus(true);
  }

  useEffect(() => {
    if (forceFocus) {
      isTaskCompleted ? rmIconRef.current?.focus() : cIconRef.current?.focus();
      setForceFocus(false);
    }
  }, [forceFocus, isTaskCompleted]);

  return (
    <div className="TaskList_EditPanel">
      <div>
        {isTaskCompleted ? (
          <RemoveDoneIcon
            ref={rmIconRef}
            title="Mark as undone"
            onClick={handleSetCompletion}
            onKeyDown={handleKeyDown.bind(this, handleSetCompletionByKeyDown)}
            tabIndex={0}
          />
        ) : (
          <CheckIcon
            ref={cIconRef}
            title="Mark as done"
            onClick={handleSetCompletion}
            onKeyDown={handleKeyDown.bind(this, handleSetCompletionByKeyDown)}
            tabIndex={0}
          />
        )}
        <DeleteIcon
          title="Delete task"
          onClick={deleteTask}
          onKeyDown={handleKeyDown.bind(this, deleteTask)}
          tabIndex={0}
        />
        <EditIcon
          title={openEdit ? "Close task edition" : "Open task edition"}
          onClick={setOpenEdit.bind(this, !openEdit)}
          onKeyDown={handleKeyDown.bind(this, () => setOpenEdit(!openEdit))}
          tabIndex={0}
        />
      </div>
      {openEdit && (
        <div className="editInput">
          <div>
            <label>
              Edit task title:
              <input
                type="text"
                name="taskTitleInput"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <CheckIcon
              title="Change task title"
              onClick={() => {
                editTaskTitle(title);
                setOpenEdit(!openEdit);
              }}
              onKeyDown={handleKeyDown.bind(this, () => {
                editTaskTitle(title);
                setOpenEdit(!openEdit);
              })}
              tabIndex={0}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskEditPanel;
