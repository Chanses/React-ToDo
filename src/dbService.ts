
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


    const transactionCategory = db.transaction(["categories"], "readwrite"); // (1)
    const categories = transactionCategory.objectStore("categories"); // (2)

    const categoryItem = categories.get("Срочно")
    console.log(categoryItem)

    const task = {

        name: name,
        description: description,
        categoryId: categoryId
    }

    const request = tasks.put(task); // (3)


    request.onsuccess = function () { // (4)


    };

    request.onerror = function () {

    };
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

    const request = tasks.put(task); // (3)


    request.onsuccess = function () { // (4)


    };

    request.onerror = function () {

    };
};



export const addCategory = (name: string, description?: string) => {

    const db = openRequest.result;
    const transaction = db.transaction(["categories"], "readwrite"); // (1)
    const categories = transaction.objectStore("categories"); // (2)

    const categorie = {

        name: name,
        description: description,
    }
    const request = categories.put(categorie); // (3)


    request.onsuccess = function () { // (4)

    };

    request.onerror = function () {

    };
};

export const editCategory = (id: string, name: string, description?: string, categorieId?: string) => {
    const db = openRequest.result;
    const transaction = db.transaction(["categories"], "readwrite"); // (1)
    const categories = transaction.objectStore("categories"); // (2)

    const category = {
        id: id,
        name: name,
        description: description,
        categorieId: categorieId
    }

    const request = categories.put(category); // (3)


    request.onsuccess = function () { // (4)


    };

    request.onerror = function () {

    };
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

        allRecords.onerror = function () {

        };
    }
}


export const deleteTask = (taskId: string) => {
    const db = openRequest.result;
    const request = db.transaction(["tasks"], "readwrite")
        .objectStore("tasks")
        .delete(taskId);
    request.onsuccess = function () {


    };
    request.onerror = function () {

    };
}

export const deleteCategorie = (CategorieId: string) => {
    const db = openRequest.result;
    const request = db.transaction(["categories"], "readwrite")
        .objectStore("categories")
        .delete(CategorieId);
    request.onsuccess = function () {


    };
    request.onerror = function () {

    };
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
        allRecords.onerror = function () {

        };
    }

    openRequest.onerror = () => console.log("open DB error")
}
