import { ITaskItem } from "../../models/ITaskItem";
import { makeObservable, observable, computed, action } from "mobx"

class TaskState {
    task: ITaskItem | undefined;
    constructor() {
        makeObservable(this, {


        })



    }


}

export default new TaskState();

