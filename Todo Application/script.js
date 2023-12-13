let todoDataSection = document.querySelector(".todo-data");

let todoArr = [];

function addTodo(todoData){
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("row");

      let todoItemDiv = document.createElement("div");
      todoItemDiv.classList.add("todo-item");
      todoItemDiv.classList.add("d-flex");
      todoItemDiv.classList.add("justify-content-between");
      todoItemDiv.classList.add("align-items-center");

      rowDiv.appendChild(todoItemDiv);

      let todoNoDiv = document.createElement("div");
      todoNoDiv.classList.add("todo-no");

      let childCount = todoArr.length; // To get the number of Children of todoSection
      todoNoDiv.textContent = childCount; 

      todoItemDiv.appendChild(todoNoDiv);

      let todoDetailDiv = document.createElement("div");
      todoDetailDiv.classList.add("todo-detail");
      todoDetailDiv.classList.add("text-muted");
      todoDetailDiv.textContent = todoData; // Sets the todo data sent from the Input Element

      todoItemDiv.appendChild(todoDetailDiv);

      let todoStatusDiv = document.createElement("div");
      todoStatusDiv.classList.add("todo-status");
      todoStatusDiv.textContent = "In Progress";

      todoItemDiv.appendChild(todoStatusDiv);


      var todoActionDiv = document.createElement("div");
      todoActionDiv.classList.add("todo-action","d-flex","justify-content-between");

      todoItemDiv.appendChild(todoActionDiv);

      let delBtn = document.createElement("button");
      delBtn.classList.add("btn");
      delBtn.classList.add("btn-danger");
      delBtn.textContent = "Delete";

      todoActionDiv.appendChild(delBtn);

      let finishedBtn = document.createElement("button");
      finishedBtn.classList.add("btn");
      finishedBtn.classList.add("btn-success");
      finishedBtn.textContent = "Finished";

      todoActionDiv.appendChild(finishedBtn);

      let hrTag = document.createElement("hr");

      rowDiv.appendChild(hrTag);

      todoDataSection.appendChild(rowDiv);

      // Handling the Scenario where I am adding event listener on click of Delete Button.

      function removeTodo(){
            let rowNumberDeleted = rowDiv.querySelector(".todo-no");
            rowDiv.remove();
            console.log("I have removed",rowNumberDeleted.textContent);
            
            
      };

      delBtn.addEventListener("click",removeTodo);
      
};


let todoInputBar = document.getElementById("todo-input-bar");

// We are going to attach an Event Listener in the SAVE Button.

let saveTodo = document.querySelector(".save-todo");

todoInputBar.addEventListener("keyup",function(){
      let inputBoxUserInput = todoInputBar.value;
      if (inputBoxUserInput.length === 0){
            saveTodo.classList.add("disabled") ;
      }else{
            saveTodo.classList.remove("disabled");
      }
})

// Getting the value inside the Input Box
let inputBoxUserInput = todoInputBar.value;

saveTodo.addEventListener("click",function getTextAndAddTodo(){
      let inputBoxUserInput = todoInputBar.value;
      if (inputBoxUserInput.length !=0){
            todoArr.push(inputBoxUserInput);
            addTodo(inputBoxUserInput);
      }
      todoInputBar.value = "";//This signifies that after adding the todo our search bar gets empty
      saveTodo.classList.add("disabled") ; // This signifies that after the search bar gets disabled we are disabling the save Button
});


