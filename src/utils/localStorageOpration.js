const KEYS = {
    employees: 'employees'
}

export const insertEmployee = (data) => {
    data['id'] = Date.now();
    const employees = getEmployees();
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export const updateEmployee = (data) => {
    const employees = getEmployees();
    const recordIndex = employees.findIndex(x => x.id === data.id);
    employees[recordIndex] = {...data};
    localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export const deleteEmployee = (item) => {
    const employees = getEmployees();
    const remaningEmployee = employees.filter(x => x.id !== item.id)
    localStorage.setItem(KEYS.employees, JSON.stringify(remaningEmployee))
}

export const getEmployees = () => {
    if(localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees))
}

export const getHeaders = () => {
    if(localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]));
    const employees = JSON.parse(localStorage.getItem(KEYS.employees))[0]
    const employeesHeader = Object.keys(employees).filter(item => item !== 'city' && item !== 'hireDate' && item !== 'isPermanent' && item !== 'id')
    // console.log(employeesHeader)
    const modifyTheHeader = employeesHeader.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    // console.log(modifyTheHeader)
    return modifyTheHeader
}
