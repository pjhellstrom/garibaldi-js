import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const MgrEmpCard = props => {
  return (
    <div className="card">
      <Card id={`${props._id}`}>
        {/* {console.log(props)} */}
        <Card.Header>
          {props.firstName} {props.lastName}
        </Card.Header>
        <Card.Body>
          <Card.Text>
            <b>Email:</b> {props.username}
            <br />
            <b>Home Location:</b> {props.location}
            <br />
            <b>Phone #:</b> {props.phoneNumber}
            <br />
            <b>Is Manager:</b> {props.isManager}
            <br />
          </Card.Text>
          <Button
            variant="outline-warning"
            onClick={() => props.deleEmp(props._id)}
          >
            Remove Employee
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MgrEmpCard;

// {
// 	"username": "aa@job.com",
// 	"firstname": "Andrew",
// 	"password": "null",
// 	"lastname": "Andrews",
// 	"location": "345 toronto st.",
// 	"isManager": false,
// 	"teamid": "1"
// },
