let openRequest = indexedDB.open("ToDo", 1);

    export let openStorage = openRequest.onupgradeneeded = function() {
        let db = openRequest.result;
        db.createObjectStore('tasks', {keyPath: 'id', autoIncrement: true});
        db.createObjectStore('categories', {keyPath: 'id', autoIncrement: true});
    };


let taskCount = 0;
    export let addTask = (name:string,description?:string, categorie?:string) => openRequest.onupgradeneeded= () => {

        let db = openRequest.result;
        let transaction = db.transaction(["tasks"], "readwrite"); // (1)
        let tasks = transaction.objectStore("tasks"); // (2)
        
        let task ={
            id:taskCount,
            name: name,
            description: description,
        }

        let request = tasks.add(task); // (3)
        taskCount++;
        
        request.onsuccess = function() { // (4)
          console.log("задача добавлена в хранилище", request.result);
        };
        
        request.onerror = function() {
          console.log("Ошибка", request.error);
        };
    };
let categorieCount = 0;
    export let addCategorie = (name:string,description:string) => openRequest.onupgradeneeded= () => {

        let db = openRequest.result;
        let transaction = db.transaction(["categories"], "readwrite"); // (1)
        let categories = transaction.objectStore("categories"); // (2)
        
        let categorie ={
            id:categorieCount,
            name: name,
            description: description,
        }
        let request = categories.add(categorie); // (3)
        categorieCount++;
        
        request.onsuccess = function() { // (4)
          console.log("задача добавлена в хранилище", request.result);
        };
        
        request.onerror = function() {
          console.log("Ошибка", request.error);
        };
     };


export let getTasks = () => openRequest.onupgradeneeded = () =>{

    let db = openRequest.result;
    let transaction = db.transaction(["tasks"], "readwrite"); // (1)
    let tasks = transaction.objectStore("tasks"); // (2)
    let allRecords = tasks.getAll();

    
    allRecords.onsuccess = function() {
        console.log(allRecords.result.map(e => console.log(e)));
        
    };
    allRecords.onerror = function() {
        console.log("Ошибка", allRecords.error);
      };
}  
    
