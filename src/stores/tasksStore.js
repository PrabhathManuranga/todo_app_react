import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

const useTasksStore = create((set, get) => ({
  tasksArray: [],
  addTask: (newTaskObj) => {
    const _newTask = Object.assign({}, newTaskObj, { id: uuidv4() });
    set((state) => ({ tasksArray: [...state.tasksArray, _newTask] }));
  },
  deleteTask: (taskId) => {
    set((state) => ({
      tasksArray: state.tasksArray.filter((task) => task.id !== taskId),
    }));
  },
  setTaskCompletionState: (taskId, isComplete) => {
    const foundTask = get().tasksArray.findIndex((task) => task?.id === taskId);
    if (!~foundTask) throw new Error("No task with given ID");

    const tasksArrayCopy = get().tasksArray;
    tasksArrayCopy[foundTask].completed =
      isComplete ?? !(tasksArrayCopy[foundTask].completed ?? false);

    set((state) => ({
      tasksArray: (state.tasksArray = tasksArrayCopy),
    }));
  },
  editTaskTitle: (taskId, title) => {
    const foundTask = get().tasksArray.findIndex((task) => task?.id === taskId);
    if (!~foundTask) throw new Error("No task with given ID");

    const tasksArrayCopy = get().tasksArray;
    tasksArrayCopy[foundTask].title = title;

    set((state) => ({
      tasksArray: (state.tasksArray = tasksArrayCopy),
    }));
  },
  clearAllTasks: () =>
    set((state) => ({ tasksArray: (state.tasksArray = []) })),
  getTasks: () => {
    return get().tasksArray ?? [];
  },
  getTask: (taskId) => {
    return get().tasksArray?.[taskId];
  },
}));

export default useTasksStore;
