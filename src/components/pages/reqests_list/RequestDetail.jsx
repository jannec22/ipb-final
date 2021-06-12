import { storeContext } from "../../hoc/store_context/StoreContext";
import { useContext } from "react";
import { useParams } from "react-router";

const RequestDetail = () => {
  const { id } = useParams();
  const [{ requests }] = useContext(storeContext);
  console.log(requests);
  return (
    <div className="d-flex flex-column align-content-center">
      <div className="d-flex flex-row">
        <h2> Username: {requests[id].user.username}</h2>
      </div>
      <div className="d-flex flex-column">
        <h2>
          Damage report:{" "}
          {requests[id].damageReport &&
          requests[id].damageReport.damages.length > 0 ? (
            <span>{requests[id].damageReport.damages}</span>
          ) : (
            "None"
          )}
        </h2>
      </div>
      <div>
        <h2>Warranty Status: {requests[id].device.warranty.status}</h2>
      </div>
      <div>
        <h2> Approximated cost: {requests[id].approxCost}</h2>
      </div>
      <div>
        <h2>Actual cost: {requests[id].actualCost}</h2>
      </div>
      <div>
        <h2>Status: {requests[id].status}</h2>
      </div>
    </div>
  );
};

export default RequestDetail;

// {JSON.stringify(requests[id])}
// {"user":{"username":"someone"},
// "damageReport":{"damages":[]},"device":{"warranty":{"status":"EXPIRED"}},
// "approxCost":0,"actualCost":0,"status":"queue","id":"first"
