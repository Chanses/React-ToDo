import { ITask } from "./components/ListTasks/Task"
import { ICategorie } from "./components/ListCategories/Categorie"
const openRequest = indexedDB.open("ToDo", 1);

export const openStorage = openRequest.onupgradeneeded = function () {
    const db = openRequest.result;
    db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
    db.createObjectStore('categories', { keyPath: 'id', autoIncrement: true });
};



export const addTask = (name: string, description?: string, categorie?: string) => {
    const db = openRequest.result;
    const transaction = db.transaction(["tasks"], "readwrite"); // (1)
    const tasks = transaction.objectStore("tasks"); // (2)

    const task = {

        name: name,
        description: description,
    }

    const request = tasks.put(task); // (3)


    request.onsuccess = function () { // (4)
        console.log("задача добавлена в хранилище", request.result);

    };

    request.onerror = function () {
        console.log("Ошибка", request.error);
    };
};

export const editTask = (id: string, name: string, description?: string, categorie?: string,) => {
    const db = openRequest.result;
    const transaction = db.transaction(["tasks"], "readwrite"); // (1)
    const tasks = transaction.objectStore("tasks"); // (2)

    const task = {
        id: id,
        name: name,
        description: description,
    }

    const request = tasks.put(task); // (3)


    request.onsuccess = function () { // (4)
        console.log("задача заменена в хранилище", request.result);

    };

    request.onerror = function () {
        console.log("Ошибка", request.error);
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
        console.log("задача добавлена в хранилище", request.result);
    };

    request.onerror = function () {
        console.log("Ошибка", request.error);
    };
};

export const editCategory = (id: string, name: string, description?: string) => {
    const db = openRequest.result;
    const transaction = db.transaction(["categories"], "readwrite"); // (1)
    const categories = transaction.objectStore("categories"); // (2)

    const category = {
        id: id,
        name: name,
        description: description,
    }

    const request = categories.put(category); // (3)


    request.onsuccess = function () { // (4)
        console.log("задача заменена в хранилище", request.result);

    };

    request.onerror = function () {
        console.log("Ошибка", request.error);
    };
};



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


export const deleteTask = (taskId: string) => {
    const db = openRequest.result;
    const request = db.transaction(["tasks"], "readwrite")
        .objectStore("tasks")
        .delete(taskId);
    request.onsuccess = function () {
        console.log("задача удалена из хранилища", request.result);

    };
    request.onerror = function () {
        console.log("Ошибка", request.error);
    };
}

export const deleteCategorie = (CategorieId: string) => {
    const db = openRequest.result;
    const request = db.transaction(["categories"], "readwrite")
        .objectStore("categories")
        .delete(CategorieId);
    request.onsuccess = function () {
        console.log("задача удалена из хранилища", request.result);

    };
    request.onerror = function () {
        console.log("Ошибка", request.error);
    };
}

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
/** */

/**Метод получения Задачи 
 * @param cb: коллбэк...
*/
