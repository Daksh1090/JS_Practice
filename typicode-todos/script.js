const divcontainer = document.getElementById('todo-list');
const clickBtn =document.querySelector('button')
const form = document.querySelector('#todo-form')


function getPostData() {
  fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then((res) => res.json())
    .then(data => putDataInDOM(data))
}

function putDataInDOM(data) {
  data.forEach(data => {
    const div = document.createElement('div')
    div.classList.add('todo')
    if(data.completed === true){
      div.classList.add('done')
    }
    div.innerText = `${data.title}`;
    divcontainer.appendChild(div)
  })
}

const doneTasks = (e) =>{
  if(e.target.classList.contains('todo')){
    e.target.classList.toggle('done')
    editList(e.target)
  }
}

function editList(item){
  document.querySelector('input').value = item.textContent
}

function putPostData(item){
  
  fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(item),
    headers:{
     'Content-Type': 'application/json',
    }
  }).then(res => res.json())
    .then(data => putDataInDOM([data]))
}

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const newitem = {
    title: form.firstElementChild.value,
    completed: false
  }

  putPostData(newitem)
})

// call
getPostData()

divcontainer.addEventListener('click', doneTasks)
//Events Listner)
