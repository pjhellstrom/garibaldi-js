import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
class MgrPendingApproval extends Component 
const MgrPendingShiftCard = props => {
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
            <br />
            <p ><b>Applicant : {props.pendingUserId ? props.pendingUserId.firstName+props.pendingUserId.lastName: "No applicant yet!"}</b></p>
            <Button
              variant="outline-success"
              onClick={() => props.updateShift(props.shiftid)}
            >
              Approved
            </Button>
            <Button
              variant="outline-warning"
              onClick={() => props.deleShift(props.shiftid)}
            >
              Decline
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MgrPendingShiftCard;
