import { ITaskItem } from "../models/ITaskItem";
import { makeObservable, observable, action } from "mobx"

class TaskStore {

    tasksList: ITaskItem[];
    constructor() {
        makeObservable(this, {

            tasksList: observable,
            setTaskList: action,
        })

        this.tasksList = []
    }

    setTaskList(list: ITaskItem[]) {
        this.tasksList = list
    }
}

export default new TaskStore();