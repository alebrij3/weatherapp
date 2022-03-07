const inquirer = require('inquirer');
require('colors');

const questions = [
  {
    type: 'list',
    name: 'option',
    message: '¿Qué desea hacer?',
    choices: [
      {
        value: 1,
        name: '1. Buscar lugar',
      },
      {
        value: 2,
        name: '2. Historial',
      },
      {
        value: 0,
        name: '0. Salir',
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.log('==============================');
  console.log('    Seleccione una opción     ');
  console.log('==============================\n');

  const { option } = await inquirer.prompt(questions);

  return option;
};

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'press_enter',
      message: `Presione ${'ENTER'.green} para continuar`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(question);
};
const taskName = async () => {
  const question = [
    {
      type: 'input',
      name: 'task_name',
      message: `Escriba el nombre de la tarea: `,
    },
  ];
  console.log('\n');
  const { task_name } = await inquirer.prompt(question);

  return task_name;
};
const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(inputValue) {
        if (inputValue.length === 0) {
          return 'Por favor ingrese un valor';
        } else {
          return true;
        }
      },
    },
  ];
  const { desc } = await inquirer.prompt(question);

  return desc;
};
const chooseTaskToDelete = async (tasks) => {
  const choices = [];
  const arr = [];
  Object.keys(tasks).forEach((key) => arr.push(key));
  arr.forEach((task) => {
    choices.push({ value: task, name: tasks[task].desc });
  });
  const question = [
    {
      type: 'list',
      name: 'option',
      message: 'Elije una tarea',
      choices,
    },
  ];
  const { option } = await inquirer.prompt(question);

  return option;
};
const completeTask = async (tasks) => {
  const choices = [];
  const arr = [];
  Object.keys(tasks).forEach((key) => arr.push(key));
  arr.forEach((task) => {
    choices.push({ value: task, name: tasks[task].desc });
  });
  const question = [
    {
      type: 'list',
      name: 'option',
      message: 'Elije una tarea',
      choices,
    },
  ];
  const { option } = await inquirer.prompt(question);

  return option;
};

module.exports = {
  inquirerMenu,
  pause,
  taskName,
  readInput,
  chooseTaskToDelete,
  completeTask,
};
