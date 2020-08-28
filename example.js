function fetchData() {
    fetch('https://reqres.in/api/users')
    .then(response => {
        console.log(response);
        return response.json(); 
    })
    .then(data => {
        console.log(data.data);
        const html = data.data.map(user => {
            return `
            <div class="user">
            <p><img src="${user.avatar}" alt="${user.first_name}"/></p>
            <p> Id: ${user.id}</p>
            <p> Name: ${user.first_name}</p>
            <p> Email: ${user.email}</p>
            </div>
            `
        }).join("");
        console.log(html);
        document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
    }).catch(error => {
        console.log(error)
    }); 
}

fetchData();