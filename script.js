const addButton = document.querySelector('#push');
const input = document.querySelector('#addtask input');
const tasks = document.querySelector('.tasks');

addButton.addEventListener('click', function () {
  if (input.value.length == 0) {
    alert('Please fill out the task');
  } else {
    tasks.innerHTML += `
    <div class="task">
    
    <span class="task-text">
    <input type="text"
    value="${input.value}" />
    </span>
    <div class="buttons"> 
    <i class="far fa-trash-alt remove"></i>
    </div>
    </div>`;
    input.value = '';
  }
  const removeBtn = document.querySelectorAll('.remove');
  const editButton = document.querySelectorAll('.edit-button');
  const taskText = document.querySelectorAll('.task-text');
  console.log(removeBtn);

  removeBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      let parent = this.parentNode.parentNode;
      parent.remove();
    });
  });
});
