const tasks = document.querySelectorAll('.task');
const confirmation = document.getElementById('confirmation');
const completeBtn = document.getElementById('complete-btn');

let selectedTask = null;

tasks.forEach((task) => {
  task.addEventListener('click', () => {
    if (selectedTask) {
      selectedTask.classList.remove('selected');
    }
    task.classList.add('selected');
    selectedTask = task;
  });
});

completeBtn.addEventListener('click', () => {
  confirmation.textContent = 'Task completed — great job.';
});
