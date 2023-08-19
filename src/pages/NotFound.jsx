import { Link } from "react-router-dom";
import { FullPageCenter } from "../styled";

function NotFound() {
  return (
    <FullPageCenter>
      <div style={{ fontSize: "1.85rem" }}>
        Oops, looks like that page doesn't exist.
      </div>
      <Link to="/">Go back instead.</Link>
    </FullPageCenter>
  );
}

export default NotFound;