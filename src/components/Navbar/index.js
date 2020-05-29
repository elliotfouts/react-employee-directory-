import React from 'react';

function Navbar(props) {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-md-between">
			<div className="d-flex">
				<a className="navbar-brand" href="#">
					Employee Directory
				</a>
				<div className="nav-item dropdown">
					<a
						className="nav-link dropdown-toggle"
						href="#"
						id="navbarDropdown"
						role="button"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false"
					>
						Sort By
					</a>
					<div className="dropdown-menu" aria-labelledby="navbarDropdown">
						<a
							className="dropdown-item"
							href="#"
							onClick={() => {
								props.sortEmployees('name');
							}}
						>
							Name
						</a>
						<a
							className="dropdown-item"
							href="#"
							onClick={() => {
								props.sortEmployees('employeeId');
							}}
						>
							Employee ID
						</a>
					</div>
				</div>
			</div>

			<form className="form-inline my-2 my-lg-0">
				<input
					className="form-control mr-sm-2"
					type="search"
					placeholder="Search Employees"
					aria-label="Search"
					onChange={props.handleInputChange}
				/>
			</form>
		</nav>
	);
}

export default Navbar;
