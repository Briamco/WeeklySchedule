const tableBody = document.querySelector("#horario-table tbody");

function deleteRow(event) {
    const row = event.target.closest("tr");
    if (row) {
        tableBody.removeChild(row);
    }
}

function addRow() {
    const newRow = document.createElement('tr');
    
    const hourCell = document.createElement('td');
    hourCell.className = 'table__hour';
    hourCell.innerHTML = `
        <select class="hour">
            <option value="00">00</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
        </select>
        <span class="time">:</span>
        <select class="minute">
            ${Array.from({ length: 60 }, (_, i) => `<option value="${String(i).padStart(2, '0')}">${String(i).padStart(2, '0')}</option>`).join('')}
        </select>
    `;
    newRow.appendChild(hourCell);

    for (let i = 0; i < 7; i++) {
        const taskBox = document.createElement('td');
        taskBox.className = 'task__box';
        const textarea = document.createElement('textarea');
        textarea.className = 'task';
        textarea.placeholder = 'Ingresa la tarea aquí';
        taskBox.appendChild(textarea);
        newRow.appendChild(taskBox);
    }

    const deleteCell = document.createElement('td');
    deleteCell.className = 'task__box';
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-row-btn';
    deleteButton.textContent = 'Eliminar';
    deleteCell.appendChild(deleteButton);
    newRow.appendChild(deleteCell);

    tableBody.appendChild(newRow);
}

addRow();

tableBody.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-row-btn")) {
        deleteRow(event);
    }
});

document.getElementById('add-row-btn').addEventListener('click', addRow);
