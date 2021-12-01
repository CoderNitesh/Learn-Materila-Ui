const KEYS = {
    employees: 'employees'
}

export const insertEmployee = (data) => {
    data['id'] = Date.now();
    const employees = getEmployees();
    employees.push(data)
    localStorage.setItem(KEYS.employees, JSON.stringify(employees))
}

export const getEmployees = () => {
    if(localStorage.getItem(KEYS.employees) == null)
        localStorage.setItem(KEYS.employees, JSON.stringify([]))
    return JSON.parse(localStorage.getItem(KEYS.employees))
}

