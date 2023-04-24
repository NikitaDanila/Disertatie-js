import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Profile from "../components/Profile";

function HomeScreen() {
  const [profiles, setProfiles] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProfiles() {
      const { data } = await axios.get("/api/users/getProfiles");
      // console.log(data);
      setProfiles(data);
    }

    fetchProfiles();
  }, []);

  return (
    <div>
      <Row>
        {profiles.map((profile) => (
          <Col key={profile.id} sm={12} md={6} lg={4} xl={3}>
            <Profile profile={profile} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
