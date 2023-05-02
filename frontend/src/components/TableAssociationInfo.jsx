/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";

function TableAssociationInfo(props) {
  return (
    <>
      <Table bordered striped hover>
        <thead>
          <tr>
            <td>Name</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.email}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Phone Number</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.phone_number}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Schedule of collection</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.schedule}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Address of Collection</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.addressOfCollection}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Bank IBAN</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.iban}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Fiscal Code</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.fiscalCode}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.address}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>President</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.president}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Administrator</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.administrator}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Censor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.censor}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TableAssociationInfo;
