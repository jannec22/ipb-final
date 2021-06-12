import { Button, Form } from "react-bootstrap";
import { useCallback, useContext, useState } from "react";

import DamageReport from "../../../model/DamageReport";
import DamageReportSubForm from "./DamageReportSubForm";
import Device from "../../../model/Device";
import DeviceSubForm from "./DeviceSubForm";
import RepairRequest from "../../../model/RepairRequest";
import Warranty from "../../../model/Warranty";
import { storeContext } from "../../hoc/store_context/StoreContext";
import { useHistory } from "react-router";

const estimateCost = (report) => {
  return 30 * report.damages.length;
};

const RepairRequestForm = () => {
  const [{ user }, setState] = useContext(storeContext);
  const [damageReport, setDamageReport] = useState(new DamageReport());
  const [device, setDevice] = useState(new Device());
  const [request, setRequest] = useState(new RepairRequest());

  const { push } = useHistory();

  const submit = useCallback(() => {
    let newRequest = new RepairRequest();

    newRequest.id = Math.floor(Math.random() * 1000);
    newRequest.estimateCost = estimateCost(damageReport);
    newRequest.damageReport = damageReport;
    newRequest.device = device;
    newRequest.user = user;

    setState((old) => ({
      requests: { ...old.requests, [newRequest.id]: newRequest },
    }));

    push("/customer");
  }, [user, damageReport, device, setState, push]);

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
          <Form.Check type="checkbox" label="I agree for the estimated cost" />
          <Form.Text>
            Actual cost may differ depending on various conditions. If final
            cost will be higher than expected, you can resign from repairing
            your laptop
          </Form.Text>
        </Form.Group>
      )}

      <Button onClick={submit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RepairRequestForm;
