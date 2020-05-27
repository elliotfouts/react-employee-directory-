import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/index';
import EmployeeTable from './components/EmployeeTable/index';
import API from './utilities/API';

function App() {
	const [employees, setEmployees] = useState([]);
	const [filteredEmployees, setFilteredEmployees] = useState([]);

	useEffect(() => {
		API.getUsers().then((data) => {
			setEmployees(data.data.results);
			setFilteredEmployees(data.data.results);
		});
	}, []);

	function handleInputChange(event) {
		let filterValue = event.target.value;
		let filteredEmployees = employees.filter((employee) => {
			let employeeName = `${employee.name.first} ${employee.name.last}`;
			return employeeName.toLowerCase().includes(filterValue);
		});
		setFilteredEmployees(filteredEmployees);
	}

	function sortEmployees(sortCriterea) {
		let sortedEmployees;
		console.log(sortCriterea);
		switch (sortCriterea) {
			case 'name':
				sortedEmployees = filteredEmployees.map((employee) => employee);
				sortedEmployees.sort((first, second) => {
					if (first.name.first > second.name.first) return 1;
					else return -1;
				});
				setFilteredEmployees(sortedEmployees);
				break;
			case 'employeeId':
				sortedEmployees = filteredEmployees.map((employee) => employee);
				sortedEmployees.sort((first, second) => {
					for (let i = 0; i < 11; i++) {
						if (first.id.value[i] > second.id.value[i]) {
							return 1;
						} else if (first.id.value[i] < second.id.value[i]) {
							return -1;
						}
					}
					return 0;
				});
				setFilteredEmployees(sortedEmployees);
				break;
			default:
				break;
		}
	}

	return (
		<div className="App">
			<Navbar sortEmployees={sortEmployees} handleInputChange={handleInputChange} />
			<EmployeeTable employees={filteredEmployees} />
		</div>
	);
}

export default App;
