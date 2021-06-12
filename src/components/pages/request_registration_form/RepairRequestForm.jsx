import { Button, Form } from "react-bootstrap"

import DamageReportSubForm from "./DamageReportSubForm"
import DeviceSubForm from "./DeviceSubForm"
import RepairRequest from "../../../model/RepairRequest"
import Warranty from "../../../model/Warranty"
import { useState } from "react"

const estimateCost = (report) => {
  return 30 * report.damages.length
}

const RepairRequestForm = ({
  initialRequest: {
    warranty = new Warranty(),
    damageReport: initialDamageReport,
    device: initialDevice
  } = new RepairRequest()
}) => {
  const [damageReport, setDamageReport] = useState(initialDamageReport)
  const [device, setDevice] = useState(initialDevice)
  
  console.log(damageReport, device)

  return (
    <Form onSubmit={e => e.preventDefault()}>
      <DeviceSubForm device={device} setDevice={setDevice} />
      <DamageReportSubForm damageReport={damageReport} setDamageReport={setDamageReport} />

      {
        warranty.status !== Warranty.Status.VALID && (
          <Form.Group className="mb-3">
            <Form.Label>Estimated Cost: {estimateCost(damageReport)}</Form.Label>
            <Form.Check type="checkbox" label="I agree for the estimated cost" />
            <Form.Text>Actual cost may differ depending on various conditions. If final cost will be higher than expected, you can resign from repairing your laptop </Form.Text>
          </Form.Group>
        )
      }

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default RepairRequestForm
