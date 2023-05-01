let usersList = document.querySelector('.users-list');
// Building table to hold data
let table = `<table><thead><tr><th>Name</th><th>Email</th><th>Phone</th></tr></thead>`;

const urls = ['https://jsonplaceholder.typicode.com/users'];

// loop through url given above and fetch data
for( var i = 0; i < urls.length; i++) {
   fetch(urls[i])
//    convert data or response fetched from the url as JSON
    .then(response => response.json())
    .then(data => {
        // Building table rows
        for (var i = 0; i < data.length; i++) {table += `<tr><td>` + data[i].name + `</td><td>` + data[i].email + `</td><td>` + data[i].phone + `</td></tr>`;
    }
        // closing table tags
        table += `</tbody></table>`;
        // add table to DOM
        usersList.innerHTML = table;
    })
    // catch error if fetching the data is not succesful
    .catch(err => console.log(err)); 
}

// search filter function
const searchUser = document.querySelector('#search');
searchUser.addEventListener('input', () => {
    const filter = searchUser.value.toLowerCase();
    const tRows = document.querySelectorAll('tbody tr');
    tRows.forEach(row => {
        let items = row.querySelectorAll('td');
        let found = false;
        items.forEach(item => {
            if(item.textContent.includes(filter)){
                found = true
            }
        })
        if(found){
            tRows.style.display = ''
        } else {
            tRows.style.display = 'none'
        }
    });
});

const successMessage = document.querySelector('#success-message');
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    successMessage.style.display = 'block';
    form.style.backgroundColor = '#f2fbf1';
});













