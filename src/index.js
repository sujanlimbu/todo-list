import "./style.css";
import todo from "./todo.js";

console.log('Hello from index.js');

function component() {
  const element = document.createElement('div');
  element.classList.add('main');

  const txt = document.createElement('H2')
  txt.textContent = 'My todo App is almost ready';
  element.appendChild(txt);

  const btnDiv = document.createElement('div');
  const btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = todo;
  btnDiv.appendChild(btn);
  element.appendChild(btnDiv);

  return element;
}

document.body.appendChild(component());