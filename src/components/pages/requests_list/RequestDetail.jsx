import { Button, Dropdown, DropdownButton, Table } from "react-bootstrap"
import { useCallback, useContext } from "react"

import RepairRequest from "../../../model/RepairRequest"
import { storeContext } from "../../hoc/store_context/StoreContext"
import { useHistory } from "react-router-dom"
import { useParams } from "react-router"

const RequestDetail = ({ type }) => {
  const { id } = useParams()
  const [{ requests }, setState] = useContext(storeContext)
  const request = requests[id]
  const { goBack } = useHistory()

  const changeStatus = useCallback((status) => {
    setState(old => ({
      ...old,
      requests: {
        ...old.requests,
        [request.id]: {
          ...request,
          status
        }
      }
    }))
  }, [request, setState])

  return (
    <div className="m-2 d-flex flex-column align-content-center">
      <Button variant="light" className="me-auto" onClick={goBack}>{"<"} Back</Button>
      <h2>Details:</h2>
      {
        request ? (
          <>
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
                <tr>
                  <td>{request.id}</td>
                  <td>{request.user.username}</td>
                  <td>{request.device.warranty.status}</td>
                  <td>{request.damageReport.damages.length}</td>
                  <td>{request.approxCost}</td>
                  <td>{request.actualCost}</td>
                  <td>{request.status}</td>
                </tr>
              </tbody>
            </Table>

            {
              type === "employee" && (
                <DropdownButton variant="light" title="change status">
                  {
                    Object.values(RepairRequest.Status).map(status => (
                      <Dropdown.Item key={status} onClick={() => changeStatus(status)}>{status}</Dropdown.Item>
                    ))
                  }
                </DropdownButton>
              )
            }
          </>
        ) : (
          <strong className="text-danger">
            No such request
          </strong>
        )
      }
    </div>
  )
}

export default RequestDetail
