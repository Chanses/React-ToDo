import { ICategoryItem } from '../models/ICategoryItem';
import { ITaskItem } from '../models/ITaskItem';

class dbService {

    private db: any;
    public isDbReady: boolean = false;

    public createDatabase() {
        const createPromise = new Promise((resolve, reject) => {
            const openRequest = indexedDB.open("ToDo", 1);

            openRequest.onupgradeneeded = function () {
                let db = openRequest.result;
                if (!db.objectStoreNames.contains("categories")) { db.createObjectStore("categories", { autoIncrement: true, keyPath: 'id' }); }
                if (!db.objectStoreNames.contains("tasks")) { db.createObjectStore("tasks", { autoIncrement: true, keyPath: 'id' }); }
            }

            openRequest.onsuccess = () => {
                this.db = openRequest.result
                resolve(openRequest);
            }

            openRequest.onerror = function () {
                reject(openRequest.error);
            };
        })
        return createPromise;
    }

    public getTasks = (cb: (tasks: ITaskItem[]) => void) => {

        const allRecords = this.db.transaction(["tasks"], "readwrite")
            .objectStore("tasks")
            .getAll();

        allRecords.onsuccess = function () {
            cb(allRecords.result);
        };
    }

    public putTask = (task: ITaskItem) => {
        this.db.transaction(["tasks"], "readwrite")
            .objectStore("tasks")
            .put(task);

    };

    public deleteTask = (taskId: string) => {

        this.db.transaction(["tasks"], "readwrite")
            .objectStore("tasks")
            .delete(taskId);
    }


    public getCategories = (cb: (categories: ICategoryItem[]) => void) => {

        const allRecords = this.db
            .transaction(["categories"], "readwrite")
            .objectStore("categories").getAll();

        allRecords.onsuccess = function () {
            cb(allRecords.result);
        };

    }

    public putCategory = (category: ICategoryItem) => {

        this.db.transaction(["categories"], "readwrite")
            .objectStore("categories").put(category);
    };

    public deleteCategory = (CategoryId: string) => {

        this.db.transaction(["categories"], "readwrite")
            .objectStore("categories")
            .delete(CategoryId);
    }

}

export default new dbService();