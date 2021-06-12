import { Table } from "react-bootstrap";
import { storeContext } from "../../hoc/store_context/StoreContext";
import { useContext } from "react";
import { useHistory } from "react-router";

const RequestList = ({ type }) => {
  const [state] = useContext(storeContext);
  const { requests = {} } = state;
  const { push } = useHistory();

  return (
    <div className="p-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>RequestId</th>
            <th>Customer name</th>
            <th>Warranty stat</th>
            <th>Damages</th>
            <th>Approx cost</th>
            <th>Actual cost</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(requests).map((request, i) => (
            <tr
              onClick={() => push(`/${type}/requests/${request.id}`)}
              key={`request-${i}`}
            >
              <td>{request.id}</td>
              <td>{request.user.username}</td>
              <td>{request.device.warranty.status}</td>
              <td>{request.damageReport.damages.length}</td>
              <td>{request.approxCost}</td>
              <td>{request.actualCost}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default RequestList;
