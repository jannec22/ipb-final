import { Button, Form } from "react-bootstrap"
import { useCallback, useContext, useState } from "react"

import DamageReport from "../../../model/DamageReport"
import DamageReportSubForm from "./DamageReportSubForm"
import Device from "../../../model/Device"
import DeviceSubForm from "./DeviceSubForm"
import RepairRequest from "../../../model/RepairRequest"
import Warranty from "../../../model/Warranty"
import { storeContext } from "../../hoc/store_context/StoreContext"

const estimateCost = (report) => {
  return 30 * report.damages.length
}

const RepairRequestForm = ({ onClose }) => {
  const [{ user }, setState] = useContext(storeContext)
  const [damageReport, setDamageReport] = useState(new DamageReport())
  const [device, setDevice] = useState(new Device())
  const [error, setError] = useState("")
  const [consent, setConsent] = useState(false)

  const clear = useCallback(() => {
    setError("")
    setDamageReport(new DamageReport())
    setDevice(new Device())
    setConsent(false)
    onClose()
  }, [setError, setDamageReport, setDevice, setConsent, onClose])

  const submit = useCallback(() => {
    const request = new RepairRequest()
    request.id = Math.floor(Math.random() * 1000)
    request.consent = consent
    request.estimateCost = estimateCost(damageReport)
    request.damageReport = damageReport
    request.device = device
    request.user = user
    request.device.warranty = new Warranty()
    request.device.warranty.status = Warranty.Status.VALID

    if (request.damageReport.damages.length < 1) {
      setError("specify at least 1 damage!")
      return
    }

    if (request.damageReport.damages.some(d => !d)) {
      setError("damages cannot be empty!")
      return
    }

    if (!request.device.model) {
      setError("specify device model!")
      return
    }

    if (!request.device.serialNumber) {
      setError("specify device serialNumber!")
      return
    }

    if (!request.consent) {
      setError("agree for the estimated cost!")
      return
    }

    setState((old) => ({
      ...old,
      requests: { ...old.requests, [request.id]: request },
    }))
    clear()
  }, [consent, user, damageReport, device, setState, setError, clear])

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <DeviceSubForm device={device} setDevice={setDevice} />
      <DamageReportSubForm
        damageReport={damageReport}
        setDamageReport={setDamageReport}
      />

      {(device ||
        device.warranty ||
        device.warranty.status !== Warranty.Status.VALID) && (
          <Form.Group className="mb-3">
            <Form.Label>Estimated Cost: {estimateCost(damageReport)}</Form.Label>
            <Form.Check value={consent} onChange={() => setConsent(old => !old)} type="checkbox" label="I agree for the estimated cost" />
            <Form.Text>
              Actual cost may differ depending on various conditions. If final
              cost will be higher than expected, you can resign from repairing
              your laptop
            </Form.Text>
          </Form.Group>
        )}

      {
        !!error && (
          <div className="my-2">
            <strong className="text-danger">{error}</strong>
          </div>
        )
      }

      <Button onClick={submit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default RepairRequestForm
