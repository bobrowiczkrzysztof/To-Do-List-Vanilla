const addButton = document.querySelector('#push');
const input = document.querySelector('#addtask input');
const tasks = document.querySelector('.tasks');

addButton.addEventListener('click', function () {
  if (input.value.length == 0) {
    alert('What the hell are you thinking about?');
  } else {
    tasks.innerHTML += `
    <div class="task">
    <p>
    <span>${input.value}</span> <button class="remove">Delete this</button>
    </p>
    </div>`;
    input.value = '';
  }
  let removeBtn = document.querySelectorAll('.remove');
  console.log(removeBtn);

  removeBtn.forEach(btn => {
    btn.addEventListener('click', function () {
      let parent = this.parentNode;
      parent.remove();
    });
  });
});