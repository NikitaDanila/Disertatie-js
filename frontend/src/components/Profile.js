import React from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Profile({ profile }: { profile: any }) {
  return (
    <Card style={{ width: "20rem" }}>
      <Link to={`/profile/${profile.id}`}>
        <Card.Img src={profile.profilePicture} />
      </Link>
      <Card.Body>
        <Card.Title>
          {profile.first_name} {profile.last_name}
        </Card.Title>
      </Card.Body>
      <ListGroup variant="flush">
        <ListGroup.Item>{profile.email}</ListGroup.Item>
        <ListGroup.Item>{profile.mobile_number}</ListGroup.Item>
        <ListGroup.Item>Ap: {profile.apartement_number}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Profile;
