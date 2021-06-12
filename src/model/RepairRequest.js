import DamageReport from "./DamageReport";
import Device from "./Device";
import User from "./User";
import Warranty from "./Warranty";

export default class RepairRequest {
  user = new User();
  damageReport = new DamageReport();
  device = new Device();

  warranty = new Warranty()

  approxCost = 0;
  actualCost = 0;
  status = RepairRequest.Status.none

  static Status = {
    queue: "queue",
    progress: "in progress",
    cancel: "cancelled",
    completed: "completed",
    none: "none"
  }
}