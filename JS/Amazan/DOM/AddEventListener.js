
let form = document.getElementById("form")
let table = document.getElementById("table")

var sno =1;
form.addEventListener("submit",function(e){
    e.preventDefault(); 
    console.log(e);
    let userName = document.getElementById("username").value
    let userEmail = document.getElementById("useremail").value

    table.innerHTML += `
    <tr>
        <td>${sno++}</td>
        <td>${userName}</td>
        <td>${userEmail}</td>
    </tr>`;

    console.log(userName);
    console.log(userEmail);
});