import React from "react";
import { Table } from "semantic-ui-react";
export default function Critery() {
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Parâmetro</Table.HeaderCell>
            <Table.HeaderCell>Unidade</Table.HeaderCell>
            <Table.HeaderCell>
              COPAM/CERH-MG nº 01 - 2008 Água Doce - Classe 2
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Alumínio dissolvido</Table.Cell>
            <Table.Cell>mg/l </Table.Cell>
            <Table.Cell>0.1</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Arsênio total</Table.Cell>
            <Table.Cell>mg/l </Table.Cell>
            <Table.Cell>0.01</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Chumbo total </Table.Cell>
            <Table.Cell>mg/l </Table.Cell>
            <Table.Cell>0.01</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cobre dissolvido </Table.Cell>
            <Table.Cell>mg/l </Table.Cell>
            <Table.Cell>0.009</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Escherichia coli </Table.Cell>
            <Table.Cell>NMP/100ml </Table.Cell>
            <Table.Cell>1000</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cromo total</Table.Cell>
            <Table.Cell>mg/l </Table.Cell>
            <Table.Cell>0.05</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Cádmio total</Table.Cell>
            <Table.Cell>mg/l </Table.Cell>
            <Table.Cell>0.001</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>DBO</Table.Cell>
            <Table.Cell>mg O2/l</Table.Cell>
            <Table.Cell>5</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}
