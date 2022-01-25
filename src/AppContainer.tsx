import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import App from "./App";
import CategoryStore from "./components/stores/CategoryStore";
import TaskStore from "./components/stores/TaskStore";
import { getCategories, getTasks } from "./components/Services/dbService";
import { ICategoryItem } from "./models/ICategoryItem";
import { ITaskItem } from "./models/ITaskItem";
import ModalStore from "./components/stores/ModalStore";

const AppContainer = () => {
  const handleLoadTasks = (tasks: ITaskItem[]) => TaskStore.setTaskList(tasks);
  /* eslint-disable */
  useEffect(() => {
    getTasks(handleLoadTasks);
  }, [ModalStore.isOpen("confirmModal"), ModalStore.isOpen("taskModal")]);
  const handleLoadCategory = (category: ICategoryItem[]) => {
    CategoryStore.setCategoryList(category);
  };
  /* eslint-disable */
  useEffect(() => {
    getCategories(handleLoadCategory);
  }, []);
  return <App />;
};

export default observer(AppContainer);
