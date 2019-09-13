import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ShiftCard = props => {
  return (
    <div className="card">
      <Card id={`${props._id}`}>
        {/* {console.log(props)} */}
        <Card.Header>{props.name}</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
          <Card.Text>
            <b>Date:</b> {props.date}
            <br />
            <b>Time:</b> {props.start} to {props.end}
            <br />
            <b>Location:</b> {props.location}
            <br />
            <b>Claimed:</b> {props.claimed}
            <br />
            <b>Capacity:</b> {props.capacity}
            <Button
              variant="outline-success"
              onClick={() => props.updateShift(props.shiftid)}
            >
              Update
            </Button>
            <Button
              variant="outline-warning"
              onClick={() => props.deleShift(props.shiftid)}
            >
              Remove
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShiftCard;
