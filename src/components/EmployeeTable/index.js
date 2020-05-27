import React from 'react';
import API from '../../utilities/API';
import EmployeeCard from '../EmployeeCard/index';

function EmployeeTable(props) {
	let employees = props.employees;
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Employee ID</th>
					<th scope="col">Email</th>
					<th scope="col">Phone</th>
				</tr>
			</thead>
			<tbody>
				{employees.map((employee, index) => {
					return <EmployeeCard key={index} data={employee} />;
				})}
			</tbody>
		</table>
	);
}

export default EmployeeTable;
