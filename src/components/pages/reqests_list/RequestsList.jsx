import { Button } from "bootstrap"
import { Table } from "react-bootstrap"
import { storeContext } from "../../hoc/store_context/StoreContext"
import { useContext } from "react"

const RequestList = () => {
  const { requests = [] } = useContext(storeContext)

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>RequestId</th>
            <th>CustomerId</th>
            <th>Warranty stat</th>
            <th>Consent</th>
            <th>Approx cost</th>
            <th>Actual cost</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            requests.map((request, i) => (
              <tr key={`request-${i}`}>
                <td>
                  {request.requestId}
                </td>
                <td>
                  {request.customerId}
                </td>
                <td>
                  {request.warrantyStat}
                </td>
                <td>
                  {request.consent}
                </td>
                <td>
                  {request.approxCost}
                </td>
                <td>
                  {request.actualCost}
                </td>
                <td>
                  {request.status && request.status === "queue" && <Button variant="outline-primary">Accept</Button>}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default RequestList