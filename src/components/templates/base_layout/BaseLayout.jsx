import { Button, ButtonGroup } from "react-bootstrap";

import { Link } from "react-router-dom";

const BaseLayout = ({ children }) => (
  <section className="w-100 h-100 d-flex flex-column">
    <header className="d-flex justify-content-between p-2 border-bottom border-3">
      <big className="my-auto">
        <strong>HP Service Center</strong>
      </big>
      <div className="d-flex justify-content-end">
        <ButtonGroup>
          <Button variant="link">
            <Link to="/customer">Customer</Link>
          </Button>

          <Button variant="link">
            <Link to="/employee">Employee</Link>
          </Button>
        </ButtonGroup>
      </div>
    </header>
    <section className="flex-grow-1">{children}</section>

    <footer className="w-100 bg-light p-3">
      <strong>Made by s18749 & s18349</strong>
    </footer>
  </section>
);

export default BaseLayout;
