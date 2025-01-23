const xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/Daksh1090/repos')

xhr.onreadystatechange = function (){
  if(this.readyState === 4 && this.status === 200 ){
    const data = JSON.parse(this.responseText);
    data.forEach((repo, index) => {
      
      console.log(index)
        const li = document.createElement('li')
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;
      document.getElementById('results').appendChild(li)
     
    })
  }
}

xhr.send();