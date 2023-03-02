import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";

export default function Create() {

  let history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [nameCoordinateX, setnameCoordinateX] = useState("");
  const [nameCoordinateY, setnameCoordinateY] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  //  const handleOnSubmit = (book) => {
  //    const filteredBooks = books.filter((book) => book.id !== id);
  //    setBooks([book, ...filteredBooks]);
  //    history.push("/");
  //  };

  const postData = () => {
    axios
      .post(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeName`, {
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
          <label>Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Coordinate X</label>
          <input
            placeholder="Coordinate X"
            onChange={(e) => setnameCoordinateX(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Coordinate X</label>
          <input
            placeholder="Coordinate Y"
            onChange={(e) => setnameCoordinateY(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
