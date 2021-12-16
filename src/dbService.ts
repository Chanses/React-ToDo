import { ITask } from "./components/ListTasks/Task"
import { ICategorie } from "./components/ListCategories/Categorie"
const openRequest = indexedDB.open("ToDo", 1);

export const openStorage = openRequest.onupgradeneeded = function () {
    const db = openRequest.result;
    db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('categories', { keyPath: 'id', autoIncrement: true });
};


let taskCount = 0;
export const addTask = (name: string, description?: string, categorie?: string) => {
    const db = openRequest.result;
    const transaction = db.transaction(["tasks"], "readwrite"); // (1)
    const tasks = transaction.objectStore("tasks"); // (2)

    const task = {
        id: taskCount,
        name: name,
        description: description,
    }

    const request = tasks.add(task); // (3)
    taskCount++;

    request.onsuccess = function () { // (4)
        console.log("задача добавлена в хранилище", request.result);

    };

    request.onerror = function () {
        console.log("Ошибка", request.error);
    };
};

let categorieCount = 0;
export const addCategorie = (name: string, description?: string) => {

    const db = openRequest.result;
    const transaction = db.transaction(["categories"], "readwrite"); // (1)
    const categories = transaction.objectStore("categories"); // (2)

    const categorie = {
        id: categorieCount,
        name: name,
        description: description,
    }
    const request = categories.add(categorie); // (3)
    categorieCount++;

    request.onsuccess = function () { // (4)
        console.log("задача добавлена в хранилище", request.result);
    };

    request.onerror = function () {
        console.log("Ошибка", request.error);
    };
};


export let getTasks = (cb: (tasks: ITask[]) => void) => {
    const openRequest = indexedDB.open("ToDo", 1);
    openRequest.onsuccess = () => {
        const db = openRequest.result;
        const transaction = db.transaction(["tasks"], "readwrite"); // (1)
        const tasks = transaction.objectStore("tasks"); // (2)
        const allRecords = tasks.getAll();

        allRecords.onsuccess = function () {
            cb(allRecords.result);

        };
        allRecords.onerror = function () {
            console.log("Ошибка", allRecords.error);
        };
    }

    openRequest.onerror = () => console.log("open DB error")
}



export const getCategories = (cb: (categories: ICategorie[]) => void) => {
    const openRequest = indexedDB.open("ToDo", 1);
    openRequest.onsuccess = () => {

        const db = openRequest.result;
        const transaction = db.transaction(["categories"], "readwrite"); // (1)
        const categories = transaction.objectStore("categories"); // (2)
        const allRecords = categories.getAll();

        allRecords.onsuccess = function () {
            cb(allRecords.result);
        };

        allRecords.onerror = function () {
            console.log("Ошибка", allRecords.error);
        };
    }
}

export const deleteCategorie = (categorieId: string) => {
    const db = openRequest.result;
    const request = db.transaction(["categories"], "readwrite")
        .objectStore("categories")
        .delete(categorieId);
    request.onsuccess = function () {
        console.log("задача удалена из хранилища", request.result);

    };
    request.onerror = function () {
        console.log("Ошибка", request.error);
    };
}