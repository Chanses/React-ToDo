
import { ICategoryItem } from "./models/ICategoryItem"
import { ITaskItem } from "./models/ITaskItem";
const openRequest = indexedDB.open("ToDo", 1);

export const openStorage = openRequest.onupgradeneeded = function () {
    const db = openRequest.result;
    db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('categories', { keyPath: 'id', autoIncrement: true });
};

export const addTask = (name: string, description?: string, categoryId?: string) => {
    const db = openRequest.result;
    const transaction = db.transaction(["tasks"], "readwrite"); // (1)
    const tasks = transaction.objectStore("tasks"); // (2)

    const task = {

        name: name,
        description: description,
        categoryId: categoryId
    }

    const request = tasks.put(task);

    request.onsuccess = function () { };

    request.onerror = function () { };
};

export const editTask = (id: string, name: string, description?: string, categoryId?: string,) => {
    const db = openRequest.result;
    const transaction = db.transaction(["tasks"], "readwrite"); // (1)
    const tasks = transaction.objectStore("tasks"); // (2)

    const task = {
        id: id,
        name: name,
        description: description,
        categoryId: categoryId
    }

    const request = tasks.put(task);

    request.onsuccess = function () { };

    request.onerror = function () { };
};

export const addCategory = (name: string, description?: string) => {

    const db = openRequest.result;
    const transaction = db.transaction(["categories"], "readwrite");
    const categories = transaction.objectStore("categories");

    const category = {

        name: name,
        description: description,
    }
    const request = categories.put(category);

    request.onsuccess = function () { };

    request.onerror = function () { };
};

export const editCategory = (id: string, name: string, description?: string, categoryId?: string) => {
    const db = openRequest.result;
    const transaction = db.transaction(["categories"], "readwrite");
    const categories = transaction.objectStore("categories");

    const category = {
        id: id,
        name: name,
        description: description,
        categorieId: categoryId
    }

    const request = categories.put(category);

    request.onsuccess = function () { };

    request.onerror = function () { };
};

export const getCategories = (cb: (categories: ICategoryItem[]) => void) => {
    const openRequest = indexedDB.open("ToDo", 1);
    openRequest.onsuccess = () => {

        const db = openRequest.result;
        const transaction = db.transaction(["categories"], "readwrite"); // (1)
        const categories = transaction.objectStore("categories"); // (2)
        const allRecords = categories.getAll();

        allRecords.onsuccess = function () {
            cb(allRecords.result);
        };

        allRecords.onerror = function () { };
    }
}

export const deleteTask = (taskId: string) => {
    const db = openRequest.result;
    const request = db.transaction(["tasks"], "readwrite")
        .objectStore("tasks")
        .delete(taskId);

    request.onsuccess = function () { };

    request.onerror = function () { };
}

export const deleteCategorie = (CategoryId: string) => {
    const db = openRequest.result;
    const request = db.transaction(["categories"], "readwrite")
        .objectStore("categories")
        .delete(CategoryId);
    request.onsuccess = function () { };

    request.onerror = function () { };
}

export let getTasks = (cb: (tasks: ITaskItem[]) => void) => {
    const openRequest = indexedDB.open("ToDo", 1);
    openRequest.onsuccess = () => {
        const db = openRequest.result;
        const transaction = db.transaction(["tasks"], "readwrite"); // (1)
        const tasks = transaction.objectStore("tasks"); // (2)
        const allRecords = tasks.getAll();

        allRecords.onsuccess = function () {
            cb(allRecords.result);
        };

        allRecords.onerror = function () { };
    }

    openRequest.onerror = () => console.log("open DB error")
}
