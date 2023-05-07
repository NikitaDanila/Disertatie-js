/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function TableAssociationInfoById() {
  const associationDetailsById = useSelector(
    (state) => state.associationDetailsById
  );
  const { associationById } = associationDetailsById;
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
            <td>{associationById ? associationById.name : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{associationById ? associationById.email : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Phone Number</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{associationById ? associationById.phone_number : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Schedule of collection</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {associationById ? associationById.schedule_of_receipts : null}
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Address of Collection</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {associationById ? associationById.address_of_collection : null}
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Bank IBAN</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{associationById ? associationById.bank_iban : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Fiscal Code</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{associationById ? associationById.fiscal_code : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{associationById ? associationById.address : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>President</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{associationById ? associationById.president : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Administrator</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{associationById ? associationById.administrator : null}</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <td>Censor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{associationById ? associationById.censor : null}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default TableAssociationInfoById;
