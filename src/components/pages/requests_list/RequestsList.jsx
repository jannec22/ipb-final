import { Button, Table } from "react-bootstrap"
import { useContext, useState } from "react"

import RepairRequestForm from "../request_registration_form/RepairRequestForm"
import { storeContext } from "../../hoc/store_context/StoreContext"
import { useHistory } from "react-router"

const RequestList = ({ type }) => {
  const [state] = useContext(storeContext)
  const { requests = {} } = state
  const { push } = useHistory()
  const [adding, setAdding] = useState(false)

  return (
    <div className="m-2">
      <h2>Requests:</h2>
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

      {
        type === "customer" && (
          adding ? (
            <div className="m-2 d-flex flex-column">
              <RepairRequestForm onClose={() => setAdding(false)} />
              <Button onClick={() => setAdding(false)} className=" ms-auto mt-2" variant="warning">
                cancel
              </Button>
            </div>
          ) : (
            <Button onClick={() => setAdding(true)} variant="light">
              Add new Request
            </Button>
          )
        )
      }
    </div>
  )
}

export default RequestList
