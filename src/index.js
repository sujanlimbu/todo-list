import "./css/style.css";
import todo from "./modules/todo.js";

console.log('Hello from index.js');

function component() {
  const element = document.createElement('div');

  const header = document.createElement('header');
  const navbar = document.createElement('nav');
  const navlist = document.createElement('ul');

  navlist.classList.add("nav-list");

  const task = document.createElement('li');
  const taskLink = document.createElement('a');
  taskLink.href = "#task";
  taskLink.textContent = "Task";
  task.appendChild(taskLink);
  navlist.appendChild(task);

  const project = document.createElement('li');
  const projectLink = document.createElement('a');
  projectLink.href = "project";
  projectLink.textContent = "Project";
  project.appendChild(projectLink);
  navlist.appendChild(project);

  navbar.appendChild(navlist);
  header.appendChild(navbar);
  element.appendChild(header);

  const contentDiv =document.createElement('div');
  contentDiv.classList.add("content");
  const txt = document.createElement('H2')
  txt.textContent = 'My todo App is almost ready';
  contentDiv.appendChild(txt);
  element.appendChild(contentDiv);

  return element;
}

document.body.appendChild(component());