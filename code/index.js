// import {add} from "./calc";
import ("./index.css");
import img from '../images/ballons.png';
// function addition(a,b){
//     return a+b;
// }
// console.log(addition(2,8));
// console.log(addition(2,1));

const image1 = document.createElement("img");
const d1 = document.createElement("h1");
d1.innerText = "To Do List";
d1.classList.add("colorRed");
image1.src = img;
image1.classList.add("logo");
document.body.appendChild(image1);
document.body.appendChild(d1);


const body1 = document.getElementById("main");

// const hw1 = document.createElement("h1");
// hw1.innerText = "To Do List";
// body1.appendChild(hw1);

const navbar = document.createElement("div");
navbar.id = "navbar";
var addTask1 = document.createElement("input");
addTask1.id = "addTask";
addTask1.placeholder = "Add Task";

const submit = document.createElement("input");
submit.id = "sub1";
submit.type = "submit";
submit.onclick = function addTask() {

    let task = document.getElementById("addTask")
    let taskIn = task.value;

    let obj = createTask(taskIn);
    arr.push(obj);
    // console.log(arr);
    let nama = obj.name;

    updateTasks();


    task.value = null;

};


navbar.appendChild(addTask1);
navbar.appendChild(submit);
// body.appendChild(navbar);
document.body.appendChild(navbar);
console.log("Hi I am javascript22");

var nav = document.createElement("div");
nav.id = "navbar1";
var cont = document.createElement("div");
cont.id = "container";

document.body.appendChild(nav);
document.body.appendChild(cont);

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