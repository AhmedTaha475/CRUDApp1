var nameInput = document.getElementById("name");
var ageInput = document.getElementById("age");
var salaryInput = document.getElementById("salary");
var phoneInput = document.getElementById("phone");
var addBtn = document.getElementById("addBtn");
var inputIndex = document.getElementsByClassName("form-control");
var employees;


if (localStorage.getItem("employeesList") == null) {
    employees = [];

}
else {

    employees = JSON.parse(localStorage.getItem("employeesList"));
    displayData();
}


addBtn.onclick = function () {
    if (document.getElementById("addBtn").innerHTML == "Add Employee") {
        addEmployee();
        displayData();
        resetData();

    }
    else {
        editData();
        displayData();
        resetData();
    }


}



function addEmployee() {

    var employee = {
        name: nameInput.value,
        age: ageInput.value,
        salary: salaryInput.value,
        phone: phoneInput.value
    }
    employees.push(employee);
    localStorage.setItem("employeesList", JSON.stringify(employees));

}
function displayData() {
    var trs = "";
    for (var i = 0; i < employees.length; i++) {
        trs +=
            `
        <tr >
        <td>${employees[i].name}</td>
        <td>${employees[i].age}</td>
        <td>${employees[i].salary}</td>
        <td>${employees[i].phone}</td>
        <td><button class="btn btn-warning" onclick="updateRow(${i})" >Update</button>
        <td><button class="btn btn-danger" onclick="deleteRow(${i})">Delete</button>
        </tr>
        `
    }
    document.getElementById("body").innerHTML = trs;
}
function resetData() {
    for (var i = 0; i < inputIndex.length; i++) {
        inputIndex[i].value = "";
    }
}
function deleteRow(index) {
    employees.splice(index, 1);
    displayData();
    localStorage.setItem("employeesList", JSON.stringify(employees));
}
function updateRow(index) {
    document.getElementById("addBtn").innerHTML = "Edit Employee"
    nameInput.value = employees[index].name;
    ageInput.value = employees[index].age;
    salaryInput.value = employees[index].salary;
    phoneInput.value = employees[index].phone;
    localStorage.setItem("updateIndex", JSON.stringify(index));
}
function editData() {
    var index = JSON.parse(localStorage.getItem("updateIndex"));
    employees[index].name = nameInput.value;
    employees[index].age = ageInput.value;
    employees[index].salary = salaryInput.value;
    employees[index].phone = phoneInput.value;
    localStorage.setItem("employeesList", JSON.stringify(employees));
    document.getElementById("addBtn").innerHTML = "Add Employee";


}
