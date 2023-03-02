import React, { useEffect, useState } from "react";
import { Table, Button, Input } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ReadParameter() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    axios
      .get(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeNameParameter`)
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
    let { id, name, value, days, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", name);
    localStorage.setItem("Coordinate X", value);
    localStorage.setItem("Coordinate Y", days);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const getData = () => {
    axios
      .get(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeNameParameter`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(
        `https://63fa6585beec322c57f2d0ee.mockapi.io/fakeNameParameter/${id}`
      )
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
            <Table.HeaderCell>Nome do Parametro</Table.HeaderCell>
            <Table.HeaderCell>Valor do Parametro</Table.HeaderCell>
            <Table.HeaderCell>Dia da Coleta</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.Cell></Table.Cell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {searchInput.length > 1
            ? filteredResults.map((data) => {
              return (
                <Table.Row>
                  <Table.Cell>{data.name}</Table.Cell>
                  <Table.Cell>{data.value}</Table.Cell>
                  <Table.Cell>{data.days}</Table.Cell>

                  <Table.Cell>
                    {data.checkbox ? "Checked" : "Unchecked"}
                  </Table.Cell>
                  <Link to="/updateParameter">
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
                    <Table.Cell>{data.name}</Table.Cell>
                    <Table.Cell>{data.value}</Table.Cell>
                    <Table.Cell>{data.days}</Table.Cell>

                    <Table.Cell>
                      {data.checkbox ? "Checked" : "Unchecked"}
                    </Table.Cell>
                    <Link to="/updateParameter">
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
