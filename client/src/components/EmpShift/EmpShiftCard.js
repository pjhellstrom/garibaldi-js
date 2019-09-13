import React from "react";
import Card from 'react-bootstrap/Card'

const ShiftCard = (props) => {
	return (
		<div className="card">

			<Card>
				{/* {console.log(props)} */}
				<Card.Header>{props.name}</Card.Header>
				<Card.Body>
					{/* <Card.Title>Special title treatment</Card.Title> */}
					<Card.Text>
						<b>Date:</b> {props.date}<br/>
						<b>Time:</b> {props.start} to {props.end}<br/>
						<b>Location:</b> {props.location}<br/>
						<b>Description:</b> {props.description}
					</Card.Text>
					<button className="btn btn-success" onClick={props.addShift} >Accept</button>
				</Card.Body>
			</Card>



		</div>
	);
}

export default ShiftCard;
