import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <React.Fragment>
      <h1 className="is-size-2">Error Page</h1>
      <Link to="/" className="button">
        {" "}
        Go Back to Home
      </Link>
    </React.Fragment>
  );
};

export default Error;
