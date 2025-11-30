const modeButtons = document.querySelectorAll('[data-mode-target]');
const modePanels = document.querySelectorAll('.mode-panel');
const tasks = document.querySelectorAll('.task');
const confirmation = document.getElementById('confirmation');
const completeBtn = document.getElementById('complete-btn');

let selectedTask = null;

function clearSelection() {
  if (selectedTask) {
    selectedTask.classList.remove('selected');
    selectedTask = null;
  }
  confirmation.textContent = '';
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.modeTarget;

    modeButtons.forEach((btn) => {
      btn.classList.toggle('active', btn === button);
    });

    modePanels.forEach((panel) => {
      panel.classList.toggle('active', panel.id === target);
    });

    clearSelection();
  });
});

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
