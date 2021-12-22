var arr = [];
var cont = document.getElementById("container");
var nav = document.getElementById("navbar1");

function createTask(taskName) {
    let obj = {};
    obj.name = taskName;
    obj.status = false;
    return obj;
}

function updateTasks() {
    cont.innerHTML = null;
    navbar1.innerHTML = null;
    let totalTask = document.createElement("div");
    totalTask.innerText = "Tasks: " + (arr.length);
    totalTask.setAttribute("id", "totalTask");
    navbar1.append(totalTask);
    for (let i = 0; i < arr.length; i++) {
        let taskBar = document.createElement("div");
        taskBar.setAttribute("class", "toggle");
        let taskN = document.createElement("p");
        taskN.innerText = (i + 1) + ". " + arr[i].name;
        let toggle = document.createElement("button");
        toggle.innerText = "Done";
        toggle.onclick = function() {
            toggler(i)
        };
        let remove = document.createElement("button");
        remove.innerText = "remove";
        remove.onclick = function() {
            remover(i)
        };
        remove.setAttribute("id", "remove")
        taskBar.append(taskN, toggle, remove);
        cont.append(taskBar);
    }

}

function toggler(i) {
    arr[i].status = true;
    // console.log(arr);
    updateTasks();
    let gh = document.getElementsByClassName("toggle");
    // console.log(gh[i]);
    gh[i].setAttribute("class", "green");

    // gh[i].innerHTML = "its done";
    // gh[i].style.backgroundColor = "green"; 
}

function remover(i) {
    arr.splice(i, 1);
    console.log(arr);
    updateTasks();
}