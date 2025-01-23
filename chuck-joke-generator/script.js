const jokebtn = document.querySelector('button')

function jokeCreator(){
  const xhr = new XMLHttpRequest();

xhr.open('GET','https://api.chucknorris.io/jokes/random');

xhr.onreadystatechange = function () {
  if(this.readyState === 4 && this.status === 200 ){
    const joke = JSON.parse(this.responseText).value;
    document.getElementById('joke').innerText = joke;
  }
}
xhr.send();
}

jokebtn.addEventListener('click', jokeCreator)
document.addEventListener('DOMContentLoaded', jokeCreator) 