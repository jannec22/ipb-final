import DamageReport from "./DamageReport";
import Device from "./Device";
import User from "./User";
export default class RepairRequest {
  id;
  user = new User();
  damageReport = new DamageReport();
  device = new Device();

  approxCost = 0;
  actualCost = 0;
  status = RepairRequest.Status.none;

  static Status = {
    queue: "queue",
    progress: "in progress",
    cancel: "cancelled",
    completed: "completed",
    none: "none",
  };
}
