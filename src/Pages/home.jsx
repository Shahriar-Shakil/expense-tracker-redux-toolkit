import React from "react";
import { Link } from "react-router-dom";
import Balance from "../components/Balance";
import Form from "../components/Form";
import Transactions from "../components/Transactions/Transactions";

export default function Home() {
  return (
    <>
      <Balance />
      <Form />
      <Transactions />
      <div className="container">
        <Link
          to="/alltransaction"
          style={{
            maxWidth: "400px",
            textDecoration: "none",
            textAlign: "center",
          }}
          className="btn"
        >
          View all
        </Link>
      </div>
    </>
  );
}
