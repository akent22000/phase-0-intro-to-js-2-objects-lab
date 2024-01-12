// Write your solution in this file!

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {...employee}
    employees[key] = value
    return employees
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee    
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee       
}


const employee = { name: "Sam", streetAddress: "11 Broadway", };
function destructivelyDeleteFromEmployeeByKey(employee, key) { 
    delete employee[key]; 
    return employee; 
}
destructivelyDeleteFromEmployeeByKey(employee,"streetAddress")