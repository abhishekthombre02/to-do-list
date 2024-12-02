     // Select the elements from the HTML
     const taskInput = document.getElementById('task');
     const addBtn = document.getElementById('add-btn');
     const pendingTaskList = document.getElementById('pendingTask-list');
     const completedTaskList = document.getElementById('completedTask-list');
     const pendingTaskCount=document.getElementById('pendingCount');
     const completedTaskCount=document.getElementById('completedCount');

     //take a count of task 
     let pendingCount=0;
     let completedCount=0;

     // Function to create a new task in the Pending List
     function addTaskToPending(taskContent) {

     const newTask = document.createElement('li');
     newTask.textContent = taskContent;
      

     // Add click event to mark task as completed
     newTask.addEventListener('click', function() {
          pendingCount--;
          pendingTaskCount.textContent=`${pendingCount}`;   
          moveTaskToCompleted(newTask);
     });

     // Add a remove button to the task
     const removeBtn = document.createElement('button');
     removeBtn.textContent = 'Remove';
     removeBtn.classList.add('remove-btn');
     removeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          pendingCount--;
          pendingTaskCount.textContent=`${pendingCount}`;
          removeTask(newTask);
     });

     newTask.appendChild(removeBtn);
     pendingTaskList.appendChild(newTask);
        
       pendingCount++;
       pendingTaskCount.textContent=`${pendingCount}`;
     
     }

     // Function to move a task to the Completed list
     function moveTaskToCompleted(task) {
     // Create the new task in the Completed list
     const completedTask = document.createElement('li');
     completedTask.textContent = task.textContent.replace('Remove', ''); // Remove the 'Remove' text


     // Add a remove button to remove completed task
     const removeBtn = document.createElement('button');
     removeBtn.textContent = 'Remove';
     removeBtn.classList.add('remove-btn');
     removeBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          completedCount--;
          completedTaskCount.textContent=`${completedCount}`;
          removeTask(completedTask);

     });

     completedTask.appendChild(removeBtn);

     // Add click event to move completed task back to Pending list
     completedTask.addEventListener('click', function() {
          completedCount--;
          completedTaskCount.textContent=`${completedCount}`;
          moveTaskToPending(completedTask);
     });

     completedTaskList.appendChild(completedTask);
     task.remove();
     completedCount++;
     completedTaskCount.textContent=`${completedCount}`;
 
     }

     // Function to move a task back to Pending list
     function moveTaskToPending(task) {
     const taskContent = task.textContent.replace('Remove', ''); // Remove the 'Remove' text
     addTaskToPending(taskContent);
     task.remove();
    
     }

     // Function to remove a task completely
     function removeTask(task) {
     task.remove();
        
     }

     // Add event listener for the "Add" button
     addBtn.addEventListener('click', function() {
     const taskContent = taskInput.value.trim();
     if (taskContent) {
          addTaskToPending(taskContent);
          taskInput.value = ''; // Clear input field after adding task
     }
     });
