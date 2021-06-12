import { Form } from "react-bootstrap"

const RepairRequestSubForm = ({ device, setDevice }) => {
  const { serialNumber = "", model = "" } = device
  
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Serial Number</Form.Label>
        <Form.Control
          value={serialNumber}
          onChange={({ target }) => setDevice({ ...device, serialNumber: target.value })}
          type="text"
          placeholder="Enter Serial Number"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Model</Form.Label>
        <Form.Control
          value={model}
          onChange={({ target }) => setDevice({ ...device, model: target.value })}
          type="text"
          placeholder="Enter Model"
        />
      </Form.Group>
    </Form>
  )
}

export default RepairRequestForm
