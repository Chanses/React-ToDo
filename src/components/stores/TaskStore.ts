import { ITaskItem } from "../../models/ITaskItem";
import { makeObservable, observable, action } from "mobx"

class TaskStore {
    task: ITaskItem;
    tasksList: ITaskItem[];
    constructor() {
        makeObservable(this, {
            task: observable,
            tasksList: observable,
            setName: action,
            setDescription: action,
            setTaskList: action,
            setTaskItem: action,

        })
        this.task = {
            id: "",
            name: "",
            description: "",
            categoryId: ""
        }
        this.tasksList = []
    }
    setTaskItem(item: ITaskItem) {
        this.task = item;
    }
    setTaskList(list: ITaskItem[]) {
        this.tasksList = list
    }
    setName(name: string) {

        this.task.name = name
    };
    setDescription(description: string) {

        this.task.description = description

    };
}


export default new TaskStore();