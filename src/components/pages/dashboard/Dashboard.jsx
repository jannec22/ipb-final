import { Button } from "react-bootstrap"
import { useHistory } from "react-router"

const Dashboard = () => {
   const { push } = useHistory()

   return (
     <>
       <Button onClick={() => push("/customer")}>Customer page</Button>
       <Button onClick={() => push("/employee")}>Employee page</Button>
     </>
   )
 }

 export default Dashboard