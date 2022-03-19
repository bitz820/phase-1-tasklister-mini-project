
document.addEventListener("DOMContentLoaded", () => {
  let taskList = document.querySelector('#list')
  let form = document.querySelector('form')

  // Listen for a click event on the form and prevent default
  form.addEventListener('submit', (e) => {
    e.preventDefault()
  // select the words typed into the input box
    const toDo = e.target.new_task_description.value
    // Append ToDo to List
    let li = document.createElement('li')
    li.textContent = toDo
    console.log(li)
    // select the ToDo List
    let toDoList = document.querySelector("#tasks")
    toDoList.append(li)

  });
  
})


// Type a task into input field
