function addRow() {
function saveData() {
    let tableData = [];
    let table = document.querySelector("#dynamic tbody");
    
    for (let row of table.rows) {
        let rowData = {
            department: row.cells[0]?.querySelector("input")?.value || row.cells[0]?.innerText || "",
            head: row.cells[1]?.querySelector("input")?.value || row.cells[1]?.innerText || "",
            subject: row.cells[2]?.querySelector("input")?.value || row.cells[2]?.innerText || "",
            teacher: row.cells[3]?.querySelector("input")?.value || row.cells[3]?.innerText || "",
            rowSpanDept:row.cells[0]?.rowSpan||1,
            rowSpanHead:row.cells[1]?.rowSpan || 1,
        };
        tableData.push(rowData);
    }
    
    localStorage.setItem("tableData", JSON.stringify(tableData));
}
function loadData() {
    let table = document.querySelector("#dynamic tbody");
    table.innerHTML = ""; // Clear table before loading data
    let tableData = JSON.parse(localStorage.getItem("tableData")) || [];
    let lastdeptRow = null, lastHeadRow = null;
    tableData.forEach((rowData, index) => {
        let newRow = document.createElement("tr");
        let deptcell = index === 0 || rowData.department ? `<td rowspan = "${rowData.rowSpanDept}">${rowData.department}</td>` : "";
        let headcell = index === 0 || rowData.head ? `<td rowspan = "${rowData.rowSpanHead}">${rowData.head}</td>` : "";
        newRow.innerHTML = `
            ${deptcell}
            ${headcell}
            <td>${rowData.subject?rowData.subject:"<input type='text' placeholder='Enter Subject'>"}</td>
            <td>${rowData.teacher?rowData.teacher:"<input type='text' placeholder='Enter Teacher'>"}</td>
            <td><button onclick="removeRow(this)">Delete</button></td>
        `;
        table.appendChild(newRow);
        if(rowData.department) lastdeptRow = newRow;
        if (rowData.head) lastHeadRow =newRow;
    });
}

    let table = document.getElementById("dynamic").querySelector("tbody");
    let newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td><input type='text' placeholder='Enter Department'></td>
        <td><input type='text' placeholder='Enter Head of Department'></td>
        <td><input type='text' placeholder='Enter Subject'></td>
        <td><input type='text' placeholder='Enter Teacher'></td>
        <td><button onclick='removeRow(this)'>Delete</button></td>
    `;
    table.appendChild(newRow);
    saveData();
}
function addSubject() {
    let table = document.getElementById("dynamic").querySelector("tbody");
    let lastdeptRow = null;
    for (let row of table.rows) {
        if (row.cells.length >= 4) {
            lastdeptRow = row;
        }
    }
    if (!lastdeptRow) {
        alert("Please add a department first");
        return;
    }
    let deptcell = lastdeptRow.cells[0];
    let headcell = lastdeptRow.cells[1];
    let newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td><input type='text' placeholder='Enter Subject'></td>
    <td><input type='text' placeholder='Enter Teacher'></td>
    <td><button onclick='removeRow(this)'>Delete</button></td>
    `;
    table.appendChild(newRow);
    if (deptcell) deptcell.rowSpan += 1;     
    if (headcell) headcell.rowSpan += 1;
    saveData();
}

function removeRow(button) {
    let row = button.closest("tr");
    let table = document.getElementById("dynamic").querySelector("tbody");
    let deptcell = row.cells[0];
    let headcell = row.cells[1];
    if (deptcell && deptcell.rowSpan > 1) {
        deptcell.rowSpan -= 1;
    }
    if (headcell && headcell.rowSpan > 1) {
        headcell.rowSpan -= 1;
    }
    row.remove();
    saveData();
}
document.addEventListener("input", saveData);
// Load data when page loads
document.addEventListener("DOMContentLoaded", loadData);