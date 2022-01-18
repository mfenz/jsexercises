// script.js

addRow(1, "Hans", "hans@example.com");
addRow(2, "Tom", "tom@example.com");

function addRow(id, name, email)
{
    let tr = document.createElement('tr');
    tr.innerHTML = `<td>${id}</td>
    <td>${name}</td>
    <td>${email}</td>`;

    document.querySelector('tbody').appendChild(tr);
}