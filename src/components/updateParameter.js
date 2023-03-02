import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useHistory } from "react-router";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

export default function UpdateParameter() {
  let history = useHistory();
  const [APIData, setAPIData] = useState([]);

  const [id, setID] = useState(null);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [days, setDays] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [date, setDate] = useState(null);
  const [point, setPoint] = useState("");
  const handleDateChange = (event, data) => setDate(data.value);
  const handlePointChange = (event, data) => setPoint(data.firstName);

  useEffect(() => {
    axios
      .get(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeName`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  // busca dados em localStorage, armazenamento tipo local
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setName(localStorage.getItem("Name Parameter"));
    setValue(localStorage.getItem("Value Parameter"));
    setDays(localStorage.getItem("Days"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(
        `https://63fa6585beec322c57f2d0ee.mockapi.io/fakeNameParameter/${id}`,
        {
          name,
          value,
          days,
          point,
          checkbox,
        }
      )
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Valor do Parametro</label>
          <input
            placeholder="Value Parameter"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Data da Coleta</label>
          <SemanticDatepicker onChange={handleDateChange} />
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
