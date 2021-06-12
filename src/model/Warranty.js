export default class Warranty {
  status = Warranty.Status.EXPIRED;

  static Status = {
    VALID: "VALID",
    EXPIRED: "EXPIRED"
  }
}