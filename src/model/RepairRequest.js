import DamageReport from "./DamageReport";
import Device from "./Device";
import User from "./User";

export default class RepairRequest {
  user = new User();
  damageReport = new DamageReport();           
  device = new Device();  
  requestId;
  customerId;
  waranty_status = {
    valid: "Valid",
    invalid: "Invalid"
  };
  approxCost;
  actualCost;
  status:  {
    queue: "queue",
    progress: "in progress",
    cancel: "cancelled",
    complete: "completed"
  }
}