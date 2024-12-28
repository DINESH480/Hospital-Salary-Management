document.getElementById('salaryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const salary = document.getElementById('salary').value;

    const date = new Date();
    const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

    const table = document.getElementById('salaryTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell(0).textContent = formattedDate;
    newRow.insertCell(1).textContent = name;
    newRow.insertCell(2).textContent = role;
    newRow.insertCell(3).textContent = salary;

    // Create a delete button
    const deleteCell = newRow.insertCell(4);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.backgroundColor = '#dc3545'; // Bootstrap danger color
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.padding = '5px 10px';
    deleteButton.addEventListener('click', function() {
        table.deleteRow(newRow.rowIndex - 1); // Adjust for header row
    });
    deleteCell.appendChild(deleteButton);

    // Clear the form
    document.getElementById('salaryForm').reset();
});