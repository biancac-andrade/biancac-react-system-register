import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import axios from "axios";

export default function ListAll() {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://63fa6585beec322c57f2d0ee.mockapi.io/fakeName`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  return (
    <div>
      
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pontos </Table.HeaderCell>
            <Table.HeaderCell>Parametros</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {APIData.map((data) => {
                return (
                  <Table.Row>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.firstName}</Table.Cell>
                  </Table.Row>
                );
              })}
        </Table.Body>
      </Table>
    </div>
  );
}
