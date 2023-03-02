import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Update() {
  let history = useHistory();

  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [nameCoordinateX, setnameCoordinateX] = useState("");
  const [nameCoordinateY, setnameCoordinateY] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  // busca dados em localStorage, armazenamento tipo local
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setnameCoordinateX(localStorage.getItem("Coordinate X"));
    setnameCoordinateY(localStorage.getItem("Coordinate Y"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeName/${id}`, {
        firstName,
        nameCoordinateX,
        nameCoordinateY,
        checkbox,
      })
      .then(() => {
        history.push("/read");
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Coordenada X</label>
          <input
            placeholder="Coordinate X"
            value={nameCoordinateX}
            onChange={(e) => setnameCoordinateX(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Coordenada X</label>
          <input
            placeholder="Coordinate Y"
            value={nameCoordinateY}
            onChange={(e) => setnameCoordinateY(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            checked={checkbox}
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={updateAPIData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
