import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import App from "./App";
import CategoryStore from "./stores/CategoryStore";
import TaskStore from "./stores/TaskStore";
import { ICategoryItem } from "./models/ICategoryItem";
import { ITaskItem } from "./models/ITaskItem";
import dbService from "./Services/dbService";

const AppContainer = () => {
  const handleLoadTasks = (tasks: ITaskItem[]) => TaskStore.setTaskList(tasks);
  const handleLoadCategory = (category: ICategoryItem[]) => {
    CategoryStore.setCategoryList(category);
  };

  useEffect(() => {
    if (dbService.isDbReady) {
      dbService.getTasks(handleLoadTasks);
      dbService.getCategories(handleLoadCategory);
    }
  }, [dbService.isDbReady]);

  return <App />;
};

export default observer(AppContainer);
