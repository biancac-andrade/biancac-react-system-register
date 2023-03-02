import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import axios from "axios";
import { useHistory } from "react-router";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default function CreateParameter() {
  let history = useHistory();
  const [APIData, setAPIData] = useState([]);

  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [days, setDays] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [point, setPoint] = useState("");
  const handlePointChange = (event, data) => setPoint(data.firstName);

  useEffect(() => {
    axios
      .get(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeName`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const postData = () => {
    axios
      .post(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeNameParameter`, {
        name,
        value,
        days,
        point,
        checkbox,
      })
      .then(() => {
        history.push("/readParameter");
      });
  };

  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>Nome do Parametro</label>
          <input
            placeholder="Name Parameter"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>VAlor do Parametro</label>
          <input
            placeholder="Value Parameter"
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Data da Coleta</label>
          <SemanticDatepicker onChange={(e) => setDays(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Qual ponto cadastrado:</label>
          <select onChange={handlePointChange}>
            {APIData.map((data) => (
              <option key={data.firstName} value={data.firstName}>
                {data.firstName}
              </option>
            ))}
          </select>
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
