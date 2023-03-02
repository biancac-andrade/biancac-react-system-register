import React, { useEffect, useState } from "react";
import { Table, Button, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeName`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((data) => {
        return Object.values(data)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };
  const setData = (data) => {
    console.log(data);
    let { id, firstName, nameCoordinateX, nameCoordinateY, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Coordinate X", nameCoordinateX);
    localStorage.setItem("Coordinate Y", nameCoordinateY);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const getData = () => {
    axios
      .get(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeName`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeName/${id}`)
      .then(() => {
        getData();
      });
  };

  return (
    <div>
      <div>
        <Input
          icon={{ name: "search", circular: true, link: true }}
          placeholder="Pesquisar.."
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nome do Ponto</Table.HeaderCell>
            <Table.HeaderCell>Coordenada X</Table.HeaderCell>
            <Table.HeaderCell>Coordenada Y</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {searchInput.length > 1
            ? filteredResults.map((data) => {
                return (
                  <Table.Row>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.nameCoordinateX}</Table.Cell>
                    <Table.Cell>{data.nameCoordinateY}</Table.Cell>

                    <Table.Cell>
                      {data.checkbox ? "Checked" : "Unchecked"}
                    </Table.Cell>
                    <Link to="/update">
                      <Table.Cell>
                        <Button onClick={() => setData(data)}>Update</Button>
                      </Table.Cell>
                    </Link>
                    <Table.Cell>
                      <Button onClick={() => onDelete(data.id)}>Delete</Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            : APIData.map((data) => {
                return (
                  <Table.Row>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.nameCoordinateX}</Table.Cell>
                    <Table.Cell>{data.nameCoordinateY}</Table.Cell>

                    <Table.Cell>
                      {data.checkbox ? "Checked" : "Unchecked"}
                    </Table.Cell>
                    <Link to="/update">
                      <Table.Cell>
                        <Button onClick={() => setData(data)}>Update</Button>
                      </Table.Cell>
                    </Link>
                    <Table.Cell>
                      <Button onClick={() => onDelete(data.id)}>Delete</Button>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
        </Table.Body>
      </Table>
    </div>
  );
}
