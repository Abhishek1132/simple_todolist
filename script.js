let taskInput = document.getElementById("taskinput");
let addTaskbtn = document.getElementById("addtaskbtn");

let taskContainerEle = document.getElementById("taskContainer");

function addTask(){
   let taskName = taskInput.value;
   if(taskName===""){
      return;
   }
   taskInput.value = "";

   let taskElement = document.createElement("div");
   taskElement.classList.add("task");

   let taskbuttons = document.createElement("div");
   taskbuttons.classList.add("task-buttons");

   let deleteTaskbtn = document.createElement("button");
   deleteTaskbtn.classList.add("delete-task");
   deleteTaskbtn.innerHTML = "X";

   deleteTaskbtn.addEventListener("click",(e)=>{
      let ele=e.target.parentElement.parentElement;
      taskContainerEle.removeChild(ele);
   });

   
   let moveUpBtn = document.createElement("button");
   moveUpBtn.classList.add("move-up");
   moveUpBtn.innerHTML = "&#8593";

   moveUpBtn.addEventListener("click",(e)=>{
      let ele = e.target.parentElement.parentElement;
      let upperSiblingEle = ele.previousElementSibling;
      if(upperSiblingEle!==null){
         let sibTaskNameEle = upperSiblingEle.querySelector(".task-name");
         let sibTaskNameEleText = sibTaskNameEle.innerText;
         
         let taskNameEle = ele.querySelector(".task-name");
         sibTaskNameEle.innerText = taskNameEle.innerText;

         taskNameEle.innerText = sibTaskNameEleText;
      }
      
   });



   let moveDownBtn = document.createElement("button");
   moveDownBtn.classList.add("move-down");
   moveDownBtn.innerHTML = "&#8595";


   moveDownBtn.addEventListener("click",(e)=>{
      let ele = e.target.parentElement.parentElement;
      let lowerSiblingEle = ele.nextElementSibling;
      if(lowerSiblingEle!==null){
         let sibTaskNameEle = lowerSiblingEle.querySelector(".task-name");
         let sibTaskNameEleText = sibTaskNameEle.innerText;
         
         let taskNameEle = ele.querySelector(".task-name");
         sibTaskNameEle.innerText = taskNameEle.innerText;

         taskNameEle.innerText = sibTaskNameEleText;
      }
      
   });


   taskbuttons.appendChild(deleteTaskbtn);
   taskbuttons.appendChild(moveUpBtn);
   taskbuttons.appendChild(moveDownBtn);

   let taskNameEle = document.createElement("div");
   taskNameEle.classList.add("task-name");
   taskNameEle.innerText = taskName;
   
   taskElement.appendChild(taskbuttons);
   taskElement.appendChild(taskNameEle);

   taskContainerEle.appendChild(taskElement);
}

addTaskbtn.addEventListener("click",addTask);
taskInput.addEventListener("keypress",(e)=>{
   if(e.key==='Enter'){
      addTask();
   }
});
