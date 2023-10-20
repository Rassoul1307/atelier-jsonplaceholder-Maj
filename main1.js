async function getAllTodos() {
    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
      const response = await fetch(apiUrl);
      const data = await response.json();
      const tableBody = document.querySelector('.tableBody')
      data.forEach(element => {
        const ligne = document.createElement('tr')
        let UserId = ligne.insertCell(0)
        let id = ligne.insertCell(1)
        let title = ligne.insertCell(2)
        let completed = ligne.insertCell(3)
        UserId.innerHTML = element.userId;
        id.innerHTML = element.id;
        title.innerHTML = element.title;
        completed.innerHTML = element.completed ? "Oui" : "Non";
        tableBody.appendChild(ligne);
      });
    //   console.log(data);
    }catch (error) {
        console.error('Une erreur s\'est produite lors de la récupération des todos : ', error);
    }
}
getAllTodos();