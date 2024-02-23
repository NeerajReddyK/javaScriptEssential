const employees = [
    { id: 1, name: 'Virat Kohli', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Rohit Sharma', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Suresh Raina', age: 35, department: 'Finance', salary: 60000 },
    { id: 4, name: 'Shikar Dhawan', age: 25, department: 'Sales', salary: 65000 },
  ];

  const displayEmployees = () => {
    const employeesDetails = employees.map((employee) => {
        return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`;
    }).join('');
    document.getElementById('employeesDetails').innerHTML = employeesDetails;
};

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department ==='HR');
    const hrEmployeesDisplay = hrEmployees.map((employee) => {
        return `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    }).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if(foundEmployee) {
        document.getElementById("employeesDetails").innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById("employeesDetails").innerHTML = "No employee found with the given ID";
    }
}
  