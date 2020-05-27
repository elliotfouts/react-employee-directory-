import React from 'react';

function EmployeeCard({ data }) {
	const { name, phone, email, gender, thumbnail, id } = data;
	const fullName = `${name.first} ${name.last}`;
	return (
		<tr>
			<th scope="row">{fullName}</th>
			<td>{id.value}</td>
			<td>{phone}</td>
			<td>{email}</td>
		</tr>
	);
}

export default EmployeeCard;
