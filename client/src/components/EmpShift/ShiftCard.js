import React  from 'react';
import Moment from 'react-moment';
// import Date from "./Date";
// import EmpShift from "./EmpShift";
import Card from "react-bootstrap/Card";

const ShiftCard = (props) => {
	return (
		<div className="card">

			<Card>
				{/* {console.log(props)} */}
				<Card.Header>{props.name}</Card.Header>
				<Card.Body>
					{/* <Card.Title>Special title treatment</Card.Title> */}
					<Card.Text>
					<b>Email:</b> {props.username}
					<br />
					<b>Home Location:</b> {props.location}
					<br />
					<b>Phone #:</b> {props.phoneNumber}
					<br />
					<b>Is Manager:</b> {props.isManager}
					<br />
					<p>Shifts : {props.shifts}</p>
					</Card.Text>
				</Card.Body>
			</Card>

		</div>
	);
}



export default ShiftCard;